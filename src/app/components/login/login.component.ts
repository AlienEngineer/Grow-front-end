import { Component, OnInit } from '@angular/core';
import { PinInputComponent } from "../pin-input/pin-input.component";
import { User } from "../../Models/User"
import { CurrentUserService } from '../../services/current-user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private currentUser: CurrentUserService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = null;
  }

  hasUser(): boolean {
    return this.user != null;
  }

  userSelectedEvent(user: User) {
    this.user = user;
    console.log(this.user);
  }

  pinSubmitEvent(pin: string) {
    if (pin == this.user.pin) {
      this.currentUser.login(this.user);
    } else {
      this.snackBar.open("O pin que introduziu não está correcto!", "Fechar", {
        duration: 2000,
      });
    }
  }

  pinCancelEvent() {
    this.user = null;
  }
}
