import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MovieApp';

  receivedId: number;
  setReceivedId(id: number) {
    this.receivedId = id;
  }
}
