import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <!--Interpolation-->
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
            <!--Template Reference Variables-->
            <h3>Template Reference Variables:</h3>
            <input #myInput type="text">
            <button (click)="getValue(myInput)">Get</button>`,
  styles: [`
      .text-success{color:green;}
      .text-danger{color:red;}
      .text-special{font-style:italic;}
  `]
})
export class TestComponent implements OnInit {

  public uname="Darshan";
  public greeting="";
  public eventType="";
  public myId="username";
  public direct="";
  public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public myColor="blue";
  public msgObject = {
      "text-success": !this.hasError,
      "text-danger": this.hasError,
      "text-special": this.isSpecial
  }
  public myStyles = {
    color:"purple",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit() {
  }

  greet(){
    return "Hello "+this.uname;
  }

  onClick(){
    this.greeting="WelcOme To mY WoRld";
  }

  getEvent(event){
    this.eventType = event.type;
  }

  getValue(myInput){
    console.log(myInput.value);
  }
}
