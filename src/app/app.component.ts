import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private number: number = 45;
  name: string = 'Karna';
  isVisible:boolean=true;

  user = {
    name: 'Karna'
  };

  switchVisibility()
  {
    this.isVisible=!this.isVisible;
  }

  updateValue() {
    this.user.name = 'Bhavin';
  }

  get counter() {
    return this.number;
  }

  set counter(value) {
    this.number = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
