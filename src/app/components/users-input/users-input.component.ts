import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "../../Models/User"
import { UsersDataSourceService } from "../../services/users-data-source.service";

@Component({
  selector: 'app-users-input',
  templateUrl: './users-input.component.html',
  styleUrls: ['./users-input.component.css']
})
export class UsersInputComponent implements OnInit {
  @Output() userSelectedEvent = new EventEmitter<User>();
  
  users: User[];

  constructor(private userRepository : UsersDataSourceService) { }

  ngOnInit() {
    this.userRepository.getUsers().subscribe(data => {
      this.users = data.users;
    });
  }

  selectUser(user: User): void {
    this.userSelectedEvent.emit(user);
  }
}
