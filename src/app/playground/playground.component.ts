import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UnitermComponent } from './uniterm/uniterm.component';
import { TipService } from '../service/tip.service';
import { FormStoreService } from '../service/form-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [UnitermComponent, CommonModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent implements OnDestroy {
  a: string = '';

  b: string = '';

  sub: Subscription[] = [];

  expressionA!: string;

  expressionB!: string;

  operationSequence!: string;

  change!: string;

  fontSize!: string;

  constructor(
    private readonly tipSrv: TipService,
    private store: FormStoreService
  ) {
    this.sub.push(
      this.tipSrv.getTipObservable().subscribe((res) => {
        this.a = res.a;
        this.b = res.b;
      })
    );
    this.sub.push(
      this.store.getFormObservable().subscribe((store) => {
        console.log(store);

        this.expressionA = store.expressionA;
        this.expressionB = store.expressionB;
        this.operationSequence = store.operationSequence;
        this.change = store.changeDescription;
        this.fontSize = `${store.fontSize}px`;
      })
    );
  }

  ngOnDestroy() {
    this.sub.forEach((i) => i.unsubscribe());
  }
}
