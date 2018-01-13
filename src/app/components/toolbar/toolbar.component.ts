import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';
import { NavigationService } from '../../services/navigation.service';
import { INavigationAction } from '../../services/NavigationActions/INavigationAction';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  activeAction: INavigationAction;
  constructor(private navigation: NavigationService) {

  }

  ngOnInit() {

  }

  getActions(): INavigationAction[] {
    return this.navigation
              .getActions();
  }

  actionClicked(action: INavigationAction): void {
    this.activeAction = action;
    action.execute();
  }

}
