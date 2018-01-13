import { Component, OnInit, ViewChild, ComponentRef, ComponentFactory, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { INavigationAction } from '../../services/NavigationActions/INavigationAction';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild("actionsContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(private navigationAction: NavigationService, private resolver: ComponentFactoryResolver) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.loadComponent();
  }

  loadComponent(): void {
    this.getActions()
      .filter(action => action.getComponent() != null)
      .filter(action => action.isActive)
      .forEach(action => this.createComponent(action));
  }

  createComponent(action: INavigationAction) {

    if (this.componentRef != null) {
      this.componentRef.destroy();
    }

    const actionComponent = action.getComponent();
    const factory = this.resolver.resolveComponentFactory(actionComponent);
    this.componentRef = this.container.createComponent(factory);
  }

  ngOnDestroy(): void {

  }

  getActions(): INavigationAction[] {
    return this.navigationAction.getActions();
  }

}
