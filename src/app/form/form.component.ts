import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  private apiUrl = 'http://localhost:3333/uniterms';

  constructor(
    private fb: FormBuilder,
    private tipSrv: TipService,
    private store: FormStoreService,
    private http: HttpClient
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
    const formData = this.form.value;

    this.saveToDatabase(formData).subscribe({
      next: (response) => {
        console.log('Dane zapisane pomyślnie:', response);
      },
      error: (err) => {
        console.error('Błąd podczas zapisu do bazy:', err);
      },
    });
  }

  private saveToDatabase(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
