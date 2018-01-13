import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  constructor(private users: CurrentUserService) { }

  ngOnInit() {
  }

  getUser(): User {
    return this.users.getUser();
  }
}
