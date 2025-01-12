import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { TipService } from '../service/tip.service';
import { FormStoreService } from '../service/form-store.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnDestroy {
  form: FormGroup;

  a: string = '';

  b: string = '';

  sub: Subscription[] = [];

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
      changeDescription: ['up'],
      fontSize: ['40'],
    });
    this.sub.push(
      this.store.getFormObservable().subscribe((store) => {
        this.form.patchValue({
          expressionA: store.expressionA || '',
          expressionB: store.expressionB || '',
          operationSequence: store.operationSequence || '.',
          changeDescription: store.changeDescription || 'up',
          fontSize: store.fontSize || '40',
        });
        this.a = store.expressionA || '';
        this.b = store.expressionB || '';
      })
    );
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

  ngOnDestroy() {
    this.sub.forEach((i) => i.unsubscribe());
  }

  private saveToDatabase(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
