import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      wyrazenieA: [''],
      wyrazenieB: [''],
      wyrazenieSekw: [''],
      operacjaSekw: ['kropka'],
      zamiana: ['lewy'],
      fontSize: ['40'],
    });
  }

  onSubmit() {
    console.log('Dane formularza:', this.form.value);
  }

  zapiszDoBazy() {
    console.log('Zapis do bazy:', this.form.value);
  }
}
