import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UnitermComponent } from './uniterm/uniterm.component';
import { TipService } from '../service/tip.service';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [UnitermComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent implements OnDestroy {
  a: string = '';

  b: string = '';

  sub: Subscription;

  constructor(private readonly tipSrv: TipService) {
    this.sub = this.tipSrv.getTipObservable().subscribe((res) => {
      this.a = res.a;
      this.b = res.b;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
