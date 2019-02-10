import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import { EMailProperties, IService } from '../../models';
export default class SendEMailDialog extends BaseDialog {
    private eMailProperties;
    private sendDocumentService;
    /**
     *
     */
    constructor(service: IService, eMailProperties?: EMailProperties);
    render(): void;
    getConfig(): IDialogConfiguration;
    private clear();
    private _close();
    private _submit(eMailProperties);
}
