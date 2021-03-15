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
            `,


  // we can also change the sytyleUrls property
  // we juste have inlien style
  // styleUrls: ['./test.component.css']
  styles:[`
     div {
       color: red;
     }
  `]
})
export class TestComponent implements OnInit {

  public email ='sambabhouria@gmail.com';
  public name ='DIALLO';
  public siteUrl = window.location.href;
  public myId = "mytestId";
  public isDesabled = false;

  constructor() { }

  ngOnInit(): void {
  }
  greetUser() {
    return "Hello " + this.name;
  }

}
