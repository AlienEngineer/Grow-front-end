import { Type } from "@angular/compiler/src/core";

export interface INavigationAction {
  icon: string;
  label: string;
  isActive: boolean;
  execute() : void;
  getComponent(): Type
}

export interface INavigationAction1 {

}