import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uniterm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uniterm.component.html',
  styleUrl: './uniterm.component.scss',
})
export class UnitermComponent {
  @Input() isVertical = true;

  getUnitermClass() {
    return this.isVertical ? 'uniterm--vertical' : 'uniterm--horizontal';
  }
}
