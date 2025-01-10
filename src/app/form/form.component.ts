import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TipService } from '../service/tip.service';
import { FormStoreService } from '../service/form-store.service';

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

  constructor(
    private fb: FormBuilder,
    private tipSrv: TipService,
    private store: FormStoreService
  ) {
    this.form = this.fb.group({
      expressionA: [''],
      expressionB: [''],
      operationSequence: ['.'],
      change: ['up'],
      fontSize: ['40'],
    });
  }

  onInput() {
    const newA = this.a === '' ? 'default a' : this.a;
    const newB = this.b === '' ? 'default b' : this.b;
    this.tipSrv.setTip({ a: newA, b: newB });
  }

  onSubmit() {
    const newA = this.a === '' ? 'default a' : this.a;
    const newB = this.b === '' ? 'default b' : this.b;
    this.form.value.expressionA = newA;
    this.form.value.expressionB = newB;
    this.store.setForm(this.form.value);
  }

  zapiszDoBazy() {
    console.log('Zapis do bazy:', this.form.value);
  }
}
