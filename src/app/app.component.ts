import { Component } from '@angular/core';

import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { PlaygroundComponent } from './playground/playground.component';
import { DatabaseComponent } from './database/database.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    NavComponent,
    FormComponent,
    PlaygroundComponent,
    DatabaseComponent,
  ],
})
export class AppComponent {}
