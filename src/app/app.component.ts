import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  current_page = 'skills';

  changePage(page: string) {
    this.current_page = page;
  }
}
