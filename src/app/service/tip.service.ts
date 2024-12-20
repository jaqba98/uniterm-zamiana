import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TipService {
  private tip = new BehaviorSubject<{ a: string; b: string }>({
    a: 'default a',
    b: 'default b',
  });

  getTipObservable() {
    return this.tip.asObservable();
  }

  setTip(newTip: { a: string; b: string }) {
    this.tip.next(newTip);
  }
}
