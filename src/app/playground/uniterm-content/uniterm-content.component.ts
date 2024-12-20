import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uniterm-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uniterm-content.component.html',
  styleUrl: './uniterm-content.component.scss',
})
export class UnitermContentComponent {
  @Input() isVertical = true;

  getUnitermClass() {
    return this.isVertical ? 'uniterm--vertical' : 'uniterm--horizontal';
  }
}
