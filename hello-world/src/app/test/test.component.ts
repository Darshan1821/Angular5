import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Wecome {{uname}}</h2>
            <h2>{{2+3}}</h2>
            <h2>{{"Welcome "+uname}}</h2>
            <h2>{{uname.toUpperCase()}}</h2>
            <h2>{{uname.length}}</h2>
            <h2>{{greet()}}</h2>
            <h2 class="text-success">Welcome Dexter</h2>
            <h2 [class]="successClass">Welcome Dexter</h2>
            <h2 [class.text-danger]="hasError">Welcome Dexter</h2>
            <h2 [ngClass]="msgObject">Welcome Dexter</h2>`,
  styles: [`
      .text-success{color:green;}
      .text-danger{color:red;}
      .text-special{font-style:italic;}
  `]
})
export class TestComponent implements OnInit {

  public uname="Darshan";
  public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public msgObject = {
      "text-success": !this.hasError,
      "text-danger": this.hasError,
      "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

  greet(){
    return "Hello "+this.uname;
  }
}
