import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TipService } from '../service/tip.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form: FormGroup;

  a: string = '';

  b: string = '';

  constructor(private fb: FormBuilder, private tipSrv: TipService) {
    this.form = this.fb.group({
      wyrazenieA: [''],
      wyrazenieB: [''],
      wyrazenieSekw: [''],
      operacjaSekw: ['kropka'],
      zamiana: ['lewy'],
      fontSize: ['40'],
    });
  }

  onInput() {
    const newA = this.a === '' ? 'default a' : this.a;
    const newB = this.b === '' ? 'default b' : this.b;
    this.tipSrv.setTip({ a: newA, b: newB });
  }

  onSubmit() {
    console.log('Dane formularza:', this.form.value);
  }

  zapiszDoBazy() {
    console.log('Zapis do bazy:', this.form.value);
  }
}
