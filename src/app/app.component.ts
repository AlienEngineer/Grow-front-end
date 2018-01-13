import { Component } from '@angular/core';
import { CurrentUserService } from './services/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private currentUser : CurrentUserService) {

  }

  isUserLoggedIn(): boolean {
    return this.currentUser.isUserLoggedIn();
  }

}
