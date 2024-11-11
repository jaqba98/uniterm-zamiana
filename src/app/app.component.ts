import { Component } from '@angular/core';
import { UnitermComponent } from './uniterm/uniterm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UnitermComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
