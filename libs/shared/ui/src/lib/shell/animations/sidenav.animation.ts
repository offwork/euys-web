import {
  trigger,
  transition,
  animate,
  state,
  style,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const profileToggle: AnimationTriggerMetadata = trigger(
  'profileToggle',
  [
    state('expand', style({ width: '{{ width }}px' }), {
      params: { width: 0 },
    }),
    state('narrow', style({ width: '{{ width }}px' }), {
      params: { width: 0 },
    }),
    transition(
      'narrow <=> expand',
      animate('0.4s cubic-bezier(0.680, -0.550, 0.265, 1.000)')
    ),
  ]
);

export const toggle: AnimationTriggerMetadata = trigger('toggle', [
  state('expand', style({ width: '{{ width }}px' }), { params: { width: 0 } }),
  state('narrow', style({ width: '{{ width }}px' }), { params: { width: 0 } }),
  transition(
    'narrow <=> expand',
    animate('0.4s cubic-bezier(0.680, -0.550, 0.265, 1.000)')
  ),
]);

export interface ToggleSidenav {
  value: string;
  params: Record<string, unknown>;
}
