import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UnitermContentComponent } from '../uniterm-content/uniterm-content.component';

@Component({
  selector: 'app-uniterm',
  standalone: true,
  imports: [CommonModule, UnitermContentComponent],
  templateUrl: './uniterm.component.html',
  styleUrl: './uniterm.component.scss',
})
export class UnitermComponent {
  @Input() isVertical = true;

  @Input() left = '';

  @Input() right = '';

  getUnitermClass() {
    return this.isVertical ? 'uniterm--vertical' : 'uniterm--horizontal';
  }

  getUnitermClassI() {
    return this.isVertical ? 'uniterm--vertical-i' : 'uniterm--horizontal-i';
  }
}
