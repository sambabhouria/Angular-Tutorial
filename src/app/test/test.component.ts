import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

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
  template: `
  <table>
  <tr>
    <td>
          <div>
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

        <button (click)="onClickConsoleLog()">Greet</button> <br/>
        <button (click)="onClick($event)">Greet</button>

        {{greeting}}

        <button (click)="greeting = 'Welcome  Dilallo mamadou samba'">Greet</button><br/>

        <input #myInput type="text"><br/><br/>
        <button (click)="logMessage(myInput.value)">Log</button><br/>

        <input [(ngModel)]= "prenom" type="text"><br/><br/>
        {{prenom}}

        <h2 *ngIf="false">
          Codevolution
        </h2>


        <h2 *ngIf="displayName; else elseBlock">
          Codevolution
        </h2>
        <ng-template #elseBlock>
        <h2>Hidden block</h2>
        </ng-template>

        <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
        <ng-template #thenBlock>
          <h2>Codevolution</h2>
        </ng-template>
        <ng-template #elseBlock>
          <h2>Hidden</h2>
        </ng-template>


        <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">You picked red color</div>
        <div *ngSwitchCase="'blue'">You picked blue color</div>
        <div *ngSwitchCase="'green'">You picked green color</div>
        <div *ngSwitchDefault>Pick again</div>

        <div *ngFor="let color of colors; index as i; first as f; last as l">
          <h2>{{i}} {{f}} {{l}}  {{color}}</h2>
        </div>

        <h2>{{ "Hello " +  parent}}</h2>

        <button (click) = "fireEvent()"> send event</button>

        <h2>{{"Codevolution" | lowercase}}</h2>
        <h2>{{"Codevolution" | uppercase}}</h2>
        <h2>{{"Welcome to codevolution" | titlecase}}</h2>
        <h2>{{"Codevolution" | slice:3:6}}</h2>
        <h2>{{person | json}}</h2>
        <h2>{{5.678 | number:'1.2-3'}}</h2>
        <h2>{{5.678 | number:'3.4-5'}}</h2>
        <h2>{{5.678 | number:'3.1-2'}}</h2>

        <h2>{{0.25 | percent}}</h2>
        <h2>{{0.25 | currency}}</h2>
        <h2>{{0.25 | currency:'GBP'}}</h2>
        <h2>{{0.25 | currency:'GBP':'code'}}</h2>

        <h2>{{date}}</h2>
        <h2>{{date | date:'short'}}</h2>
        <h2>{{date | date:'shortDate'}}</h2>
        <h2>{{date | date:'shortTime'}}</h2>

        </div>
    </td>
    <td>
     <div>
     </div>
    </td>
  </tr>
  </table>
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


  // Pipes ==> pipes allow to transform data before displaying them
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();


   // Component Interaction ==>  @Input from parent component
  @Input() public parentData ='';

  // if we dont want to name the variable same with the parent data
  // we use alias
  @Input('parentData') public parent ='';

  // sending data to the parent compent we use event
  @Output() public childEvent = new EventEmitter();

  //Structural Directives
  public displayName = false;
  public color = "red";
  public colors = ["red","blue","green","yellow"]

  public prenom ='';

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
  logMessage(value: string){
    console.log(value)
  }

  fireEvent(){
   this.childEvent.emit('Hey form the childComponent');
  }

}
