import { Component } from '@angular/core';
import { CurrentUserService } from './services/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grow v2';

  constructor(private currentUser: CurrentUserService) {

  }

  isUserLoggedIn(): boolean {
    return this.currentUser.isUserLoggedIn();
  }

  logout(): void {
    this.currentUser.logout();
  }
}
