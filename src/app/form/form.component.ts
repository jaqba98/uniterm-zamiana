import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  expressionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.expressionForm = this.fb.group({
      expressionA: ['', [Validators.required, Validators.minLength(3)]],
      expressionB: ['', [Validators.required, Validators.minLength(3)]],
      sequenceExpression: ['', Validators.required],
      sequenceOperation: ['comma', Validators.required],
      swapDirection: ['left', Validators.required],
    });
  }

  ngOnInit(): void {}

  show(): void {
    if (this.expressionForm.valid) {
      console.log('Form values:', this.expressionForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

  saveToDatabase(): void {
    if (this.expressionForm.valid) {
      console.log('Saving to database:', this.expressionForm.value);
    } else {
      console.error('Cannot save. Form is invalid.');
    }
  }
}
