import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "../../Models/User"
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-users-input',
  templateUrl: './users-input.component.html',
  styleUrls: ['./users-input.component.css']
})
export class UsersInputComponent implements OnInit {
  @Output() userSelectedEvent = new EventEmitter<User>();
  
  users: User[];

  constructor(private userRepository : UsersService) { }

  ngOnInit() {
    this.userRepository.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  selectUser(user: User): void {
    this.userSelectedEvent.emit(user);
  }
}
