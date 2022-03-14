import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button.component';

const colors = {
  Primary: 'p-button-primary',
  Secondary: 'p-button-secondary',
  Success: 'p-button-success',
  Info: 'p-button-info',
  Warning: 'p-button-warning',
  Help: 'p-button-help',
  Danger: 'p-button-danger',
};
const defaultColor = colors['Primary'];

/* Stroies of Button Component */
storiesOf('UILib/ButtonComponent', module)
  .addDecorator(moduleMetadata({ imports: [ButtonModule] }))
  .addDecorator(withKnobs)
  .addParameters({ component: ButtonComponent })
  .add('Basic', () => ({
    template: `
      <div class="flex justify-center gap-x-20">
        <p-button [label]="label"></p-button>
        <p-button [label]="label" [disabled]="disabled"></p-button>
        <p-button [label]="label" [styleClass]="link"></p-button>
      </div>
    `,
    props: {
      label: text('label', 'Click'),
      disabled: boolean('disabled', true),
      link: text('styleClass', 'p-button-link'),
    },
  }))
  .add('With Icon', () => ({
    template: `
      <div class="flex justify-center gap-x-20">
        <p-button [icon]="icon"></p-button>
        <p-button [label]="label" [icon]="icon"></p-button>
        <p-button [label]="label" [icon]="icon" [iconPos]="iconPos"></p-button>
      </div>
    `,
    props: {
      label: text('label', 'Click'),
      icon: text('icon', 'pi pi-check'),
      iconPos: text('iconPos', 'right'),
    },
  }))
  .add('Outlined', () => ({
    template: `
      <div class="flex justify-center">
        <button pButton pRipple type="button" label="Submit" [ngClass]="{'p-button-outlined': outlined}" [class]="type"></button>
      </div>
    `,
    props: {
      outlined: boolean('Outlined', true),
      type: select('Kinds of Button', colors, defaultColor),
    },
  }))
  .add('Rounded', () => ({
    template: `
      <div class="flex justify-center gap-x-20">
        <button pButton pRipple type="button" label="Submit" [ngClass]="{'p-button-rounded': rounded}" [class]="type"></button>
      </div>
    `,
    props: {
      rounded: boolean('Rounded', true),
      type: select('Kinds of Button', colors, defaultColor),
    },
  }));
