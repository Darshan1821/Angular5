import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<!--Interpolation-->
            <h3>Interpolation:</h3>
            <h4>Wecome {{uname}}</h4>
            <h4>{{2+3}}</h4>
            <h4>{{"Welcome "+uname}}</h4>
            <h4>{{uname.toUpperCase()}}</h4>
            <h4>{{uname.length}}</h4>
            <h4>{{greet()}}</h4>
            <hr>
            <!--Property Binding-->
            <h3>Property Binding:</h3>
            <input [id]="myId" text="Darshan" value="Darshan"/>
            <hr>
            <!--Single Class Binding-->
            <h3>Single Class Binding:</h3>
            <h4 class="text-success">Welcome Dexter</h4>
            <h4 [class]="successClass">Welcome Dexter</h4>
            <h4 [class.text-danger]="hasError">Welcome Dexter</h4>
            <hr>
            <!--Multiple Class Binding-->
            <h3>Multiple Class Binding:</h3>
            <h4 [ngClass]="msgObject">Welcome Dexter</h4>
            <hr>
            <!--Style Binding-->
            <h3>Style Binding:</h3>
            <h4 [style.color]="'orange'">Welcome Dexter</h4>
            <h4 [style.color]="myColor">Welcome Dexter</h4>
            <h4 [style.color]="hasError ? 'red' : 'green'">Welcome Dexter</h4>
            <h4 [ngStyle]="myStyles">Welcome Dexter</h4>
            <hr>
            <!--Event Binding-->
            <h3>Event Binding:</h3>
            <button (click)="onClick()">Greet</button>
            {{greeting}}<br><br>
            <button (click)="getEvent($event)">Get Event Type</button>
            {{eventType}}<br><br>
            <button (click)="direct='Direct Message'">Greet</button>
            {{direct}}
            <hr>
            <!--Template Reference Variables-->
            <h3>Template Reference Variables:</h3>
            <input #myInput type="text">
            <button (click)="getValue(myInput)">Get</button>
            <hr>
            <!--Two Way Binding-->
            <h3>Two Way Binding:</h3>
            <input [(ngModel)]="personName" type="text">
            {{personName}}
            <hr>
            <!--ngIf-->
            <h3>ngIf:</h3>
            <h4 *ngIf="ngIfValue; else elseBlock"> ngIf </h4>
            <ng-template #elseBlock><h4>Else Block</h4></ng-template>
            <div *ngIf="ngIfValue; then thenBlock; else elseBlock1"></div>
            <ng-template #thenBlock><h4>Then Block</h4></ng-template>
            <ng-template #elseBlock1><h4>Else Block1</h4></ng-template>
            <hr>
            <!--ngSwitch-->
            <h3>ngSwitch:</h3>
            <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'">You picked red color</div>
            <div *ngSwitchCase="'green'">You picked green color</div>
            <div *ngSwitchCase="'blue'">You picked blue color</div>
            <div *ngSwitchDefault>You picked default color</div>
            </div>
            <hr>
            <!--ngFor-->
            <h3>ngFor:</h3>
            <h3>Index First Last Odd Even Color</h3>
            <div *ngFor="let color of colors; index as i; first as f; last as l;odd as o; even as e">
            <h4>{{i}} {{f}} {{l}} {{o}} {{e}} {{color}}</h4>
            </div>
            <hr>
            <!--Component Interaction-->
            <h3>Component Interaction:</h3>
            <h4>{{"Data from parent to child: Hello "+parentData}}</h4>
            <button (click)="fireEvent()">Send Data to Parent Component</button>`,
  styles: [`
      .text-success{color:green;}
      .text-danger{color:red;}
      .text-special{font-style:italic;}
  `]
})
export class TestComponent implements OnInit {

  //Interpolation
  public uname="Darshan";

  greet(){
    return "Hello "+this.uname;
  }
  
  //Property Binding
  public myId="username";
  
  //Single Class Binding
  public hasError=false;
  public successClass="text-success";

  //Multiple Class Binding
  public isSpecial=true;
  public msgObject = {
      "text-success": !this.hasError,
      "text-danger": this.hasError,
      "text-special": this.isSpecial
  }

  //Style Binding
  public myColor="blue";
  
  public myStyles = {
    color:"purple",
    fontStyle:"italic"
  }

  //Event Binding
  public greeting="";
  public eventType="";
  public direct="";
  
  onClick(){
    this.greeting="WelcOme To mY WoRld";
  }

  getEvent(event){
    this.eventType = event.type;
  }

  //Template Reference Variables
  getValue(myInput){
    console.log(myInput.value);
  }

  //Two Way Binding
  public personName="";

  //ngIf
  public ngIfValue=false;
  
  //ngSwitch
  public color="red";
  
  //ngFor
  public colors=["red","blue","green","yellow",];

  //data from app-component
  @Input() public parentData;
  
  //data to app-component
  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hello Java!!');
  }

  constructor() {}
  ngOnInit() {}
}
