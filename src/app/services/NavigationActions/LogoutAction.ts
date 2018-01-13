import { INavigationAction } from "./INavigationAction";
import { CurrentUserService } from "../current-user.service";
import { Type } from "@angular/core/src/type";

export class LogoutAction implements INavigationAction {
    isActive: boolean;
    icon: string;
    label: string;
    
    constructor(private currentUser : CurrentUserService) {
        this.label = "";
        this.icon = "power_settings_new";
    }
    
    getComponent(): Type<any> {
        return null;
    }
    execute(): void {
        this.currentUser.logout();
    }
}
