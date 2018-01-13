import { INavigationAction } from "./INavigationAction";
import { CurrentUserService } from "../current-user.service";

export class LogoutAction implements INavigationAction {
    isActive: boolean;
    icon: string;
    label: string;
    
    constructor(private currentUser : CurrentUserService) {
        this.label = "";
        this.icon = "power_settings_new";
    }
    
    execute(): void {
        this.currentUser.logout();
    }
}
