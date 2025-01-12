import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormModel } from '../model/form.model';

@Injectable({ providedIn: 'root' })
export class FormStoreService {
  private form = new BehaviorSubject<FormModel>({
    expressionA: 'default a',
    expressionB: 'default b',
    operationSequence: '.',
    changeDescription: 'up',
    fontSize: '40',
  });

  getFormObservable() {
    return this.form.asObservable();
  }

  setForm(newForm: FormModel) {
    this.form.next(newForm);
  }
}
