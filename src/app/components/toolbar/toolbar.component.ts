import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';
import { NavigationService } from '../../services/navigation.service';
import { INavigationAction } from '../../services/NavigationActions/INavigationAction';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() actionSelectedEvent = new EventEmitter<INavigationAction>();
  activeAction: INavigationAction;
  constructor(private navigation: NavigationService) { }

  ngOnInit() {
    this.actionClicked(this.getActions()[environment.activeAction])
  }

  getActions(): INavigationAction[] {
    return this.navigation
              .getActions();
  }

  actionClicked(action: INavigationAction): void {

    this.activeAction = action;
    action.execute();
    this.actionSelectedEvent.emit(action);
  }

}
