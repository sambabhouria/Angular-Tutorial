import { Component, OnInit } from '@angular/core';

@Component({
  // there is three way to specify you selector :
  // with class   '.app-test then reference it with <div class='app-test'> </div> , or by using the bracket
  // '[app-test]' and then reference it with  <div app-test> </div>

  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',

  // in evry component it is possible to specify the template as a inline template for that we use the template property
  // we remplace templateUrl to juste template
  // templateUrl: './test.component.html',
  // template: '<div>Inline template</div>',

  // for multiple html line use this ``
  template: ` <div>
              <h2>Welcome DIALLO Mamado samba => this is static</h2>
              <h3>email: {{email}}</h3>
              <h2>expression calcul : {{2+2}}</h2>
              <h2> {{ "Welcome " + name}}</h2>
              <h2> {{name.length}}</h2>
              <h2> {{name.toUpperCase()}}</h2>
              <h2> {{greetUser()}}</h2>
              <h2> {{siteUrl}}</h2>
             </div>
             <input [id]="myId" type="text" value="Samba" />
             <input [disabled] = "false"  id={{myId}} type="text" value="Samba" />
             <input [disabled] = "true"  id={{myId}} type="text" value="Samba" />
             <input [disabled] = "isDesabled"  id={{myId}} type="text" value="Samba" />
             <input bind-disabled = "isDesabled"  id={{myId}} type="text" value="Samba" />

             <h2 class="text-success">Codevolution</h2>
             <h2 [class]="successClass">Codevolution</h2>
             <h2 class="text-special" [class]="successClass">Codevolution</h2>
             <h2 [class.text-danger] ="hasError" >Codevolution</h2>

             <h2 [ngClass]="messageClasses">Message</h2>

             <h2 [style.color]= "'orange'" >Style Binding</h2>
             <h2 [style.color]= "hasError ? 'red' : 'green' " >Style Binding</h2>

             <h2  [style.color]= "highlightColor" >Style Binding 2</h2>

             <h2 [ngStyle]="titleStyles">Style Binding 3</h2>

             <button (click)="onClickConsoleLog()">Greet</button> <br/><br/>
             <button (click)="onClick($event)">Greet</button>

             {{greeting}}

             <button (click)="greeting = 'Welcome  Dilallo mamadou samba'">Greet</button>



            `,


  // we can also change the sytyleUrls property
  // we juste have inlien style
  // styleUrls: ['./test.component.css']
  styles:[`
    div {
       color: red;
    }
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public email ='sambabhouria@gmail.com';
  public name ='DIALLO';
  public siteUrl = window.location.href;
  public myId = "mytestId";
  public isDesabled = false;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public greeting = "";

  constructor() { }

  ngOnInit(): void {
  }
  greetUser() {
    return "Hello " + this.name;
  }

  onClick(event: MouseEvent){
    console.log(event)
    this.greeting = 'Welcome to code evution';

  }

  onClickConsoleLog(){
    console.log("in the console log")
  }

}
