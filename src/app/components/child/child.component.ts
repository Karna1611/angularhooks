import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  private _myNumber!: number;

  @Input() myNumber2!: string;

  constructor() {}

  @Input()
  set myNewNumber(number: number) {
    this._myNumber = number;
  }

  get myNewNumber(): number {
    return this._myNumber;
  }

  // OnChanges executes before OnInit
  // executes every time that change comes from the parent component
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes:', changes);
    if (changes['myNewNumber']) {
      const myNewNumberChange: SimpleChange = changes['myNewNumber'];
      console.log('Previous value - ng on changes', myNewNumberChange.previousValue);
      console.log('Current value - ng on changes', myNewNumberChange.currentValue);
      this._myNumber = myNewNumberChange.currentValue;
    }
    if (changes['myNumber2']) {
      const myNumber2Change: SimpleChange = changes['myNumber2'];
      console.log('Previous value - ng on changes', myNumber2Change.previousValue);
      console.log('Current value - ng on changes', myNumber2Change.currentValue);
      this.myNumber2 = myNumber2Change.currentValue;
    }
  }
  // executed once, but ngOnChanges executes whenever any change comes from a parent component to a variable that is receiving value using input decorator
  ngOnInit() {
    console.log('ngOnInit Value', this.myNewNumber);
  }

  // occurs after OnChanges and OnInit 
  ngDoCheck() {
    console.log('From Do Check',this.myNumber2);
  }
  //not necessary to import
  ngAfterContentInit(){
    console.log("Yay from ngAfterContentInit!");
  }
  //used when we initialize every var array or obj in onInit or calculation only once every component is initialized 

  //gets executed just after ContentInit 
  ngAfterContentChecked(){
    console.log('This was executed after ngAfterContentInit');
  }
  //used when we want to perform some actions on the variable that are being changes in the ngDoCheck lifecycle hook
  ngAfterViewInit(){
    console.log("Executed after ngAfterContentChecked");
  }
  //child and grandchild components need to be initialized and executed before this lifecycle hook
  ngAfterViewChecked(){
    console.log("This was executed after ngAfterViewInit");
  }

  ngOnDestroy()
  {
    console.log("Component has been destroyed");
  }
}
