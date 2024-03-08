import { Component } from '@angular/core';
import { Bulletin } from './bulletin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newProject';
  bulletin = new Bulletin('Angular News', '2024-03-01T12:00:00Z')

  

}


