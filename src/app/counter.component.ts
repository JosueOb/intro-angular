import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      The base is: <strong>{{ base }}</strong>
    </h3>

    <button (click)="operation(base)">+ {{ base }}</button>

    <span>{{ number }}</span>

    <button (click)="operation(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {
  number: number = 10;
  base: number = 5;

  /*addition() {
    this.number += 1;
  }
  subtraction() {
    this.number -= 1;
  }*/
  operation(value: number) {
    this.number += value;
  }
}
