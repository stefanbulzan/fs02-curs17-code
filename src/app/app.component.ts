import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curs17-code';
  message = "";

  startLoadingData() {
    this.message = "Parent start loading";
  }
}
