import { Component } from '@angular/core';

import { FormComponent } from './form/form.component';
import { PlaygroundComponent } from './playground/playground.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FormComponent, PlaygroundComponent],
})
export class AppComponent {}
