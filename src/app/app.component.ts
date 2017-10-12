import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p *myUnless= "condition">condition is {{condition}}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  condition = false;
}
