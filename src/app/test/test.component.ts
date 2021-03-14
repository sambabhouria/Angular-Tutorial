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
              Inline template
            </div>`,

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

  constructor() { }

  ngOnInit(): void {
  }

}
