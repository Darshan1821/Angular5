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

            <br><br>
            <!--Property Binding-->
            <h3>Property Binding:</h3>
            <input [id]="myId" text="Darshan" value="Darshan"/>
            
            <br><br>
            <!--Single Class Binding-->
            <h3>Single Class Binding:</h3>
            <h4 class="text-success">Welcome Dexter</h4>
            <h4 [class]="successClass">Welcome Dexter</h4>
            <h4 [class.text-danger]="hasError">Welcome Dexter</h4>
            
            <br><br>
            <!--Multiple Class Binding-->
            <h3>Multiple Class Binding:</h3>
            <h4 [ngClass]="msgObject">Welcome Dexter</h4>
            
            <br><br>
            <!--Style Binding-->
            <h3>Style Binding:</h3>
            <h4 [style.color]="'orange'">Welcome Dexter</h4>
            <h4 [style.color]="myColor">Welcome Dexter</h4>
            <h4 [style.color]="hasError ? 'red' : 'green'">Welcome Dexter</h4>
            <h4 [ngStyle]="myStyles">Welcome Dexter</h4>`,
  styles: [`
      .text-success{color:green;}
      .text-danger{color:red;}
      .text-special{font-style:italic;}
  `]
})
export class TestComponent implements OnInit {

  public uname="Darshan";
  public myId="username";
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
}
