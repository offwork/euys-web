import { Component, Input } from '@angular/core';
import { YupProjeksiyonOzetModel } from '@euys/api-interfaces';
@Component({
  selector: 'euys-yup-ozet',
  templateUrl: './yup-ozet.component.html',
  styleUrls: ['./yup-ozet.component.scss'],
})
export class YupOzetComponent {
  @Input() ozet: YupProjeksiyonOzetModel = {};
  radius = 120;
  strokeWidth = this.radius;
  svgSize = this.radius * 2 + this.strokeWidth;
  perimeter = Math.PI * 2 * this.radius;
  size = this.perimeter / 6 + this.perimeter / 500;
  list = [
    {
      title: 'LEVHA',
      className: 'text-green-400',
      value: 300,
      angle: 0,
    },
    {
      title: 'TENEKE',
      className: 'text-pink-400',
      value: 250,
      angle: 60,
    },
    {
      title: 'SOĞUK',
      className: 'text-yellow-400',
      value: 1000,
      angle: 120,
    },
    {
      title: 'GALVANİZ',
      className: 'text-indigo-400',
      value: 600,
      angle: 180,
    },
    {
      title: 'ASİTLİ',
      className: 'text-red-400',
      value: 500,
      angle: 240,
    },
    {
      title: 'SICAK',
      className: 'text-blue-400',
      value: 1500,
      angle: 300,
    },
  ];

  getTextCoord(alpha: number) {
    const rad = (alpha + 30) * (Math.PI / 180);
    const dot = {
      x: this.radius * Math.cos(rad),
      y: this.radius * Math.sin(rad),
    };
    return dot;
  }
}
