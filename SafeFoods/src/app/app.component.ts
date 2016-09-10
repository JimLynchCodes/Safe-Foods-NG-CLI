import { Component } from '@angular/core';
import { ToDosComponent } from './to-dos/to-dos.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ToDosComponent]
})
export class AppComponent {
  title = 'app works!';
}
