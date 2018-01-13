import { INavigationAction } from "./INavigationAction";

export class StartSessionAction implements INavigationAction {
    isActive: boolean;
    icon: string;
    label: string;
    
    constructor() {
        this.icon = "create";
        this.label = "Nova Sessão"
    }

    execute(): void {
        
    }
}