import { Injectable } from '@angular/core';
import { INavigationAction } from './NavigationActions/INavigationAction';
import { CurrentUserService } from './current-user.service';
import { LogoutAction } from './NavigationActions/LogoutAction';
import { StartSessionAction } from './NavigationActions/StartSessionAction';
import { environment } from '../../environments/environment';


@Injectable()
export class NavigationService {

  private actions: INavigationAction[];

  constructor(currentUser: CurrentUserService) { 
    this.actions = new Array<INavigationAction>();

    this.actions.push(new StartSessionAction());
    this.actions.push(new LogoutAction(currentUser));

    
  }

  getActions() : INavigationAction[] {
    return this.actions;
  }

}
