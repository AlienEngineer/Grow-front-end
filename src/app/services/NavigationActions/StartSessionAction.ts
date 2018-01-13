import { INavigationAction } from "./INavigationAction";
import { Type } from "@angular/core/src/type";
import { NewSessionComponent } from "../../components/new-session/new-session.component";

export class StartSessionAction implements INavigationAction {
    isActive: boolean;
    icon: string;
    label: string;
    
    constructor() {
        this.icon = "create";
        this.label = "Nova Sessão"
    }

    getComponent(): Type<any> {
        return NewSessionComponent;
    }

    execute(): void {
        
    }
}