import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
export default class SendEMailDialog extends BaseDialog {
    title: string;
    body: string;
    to: string;
    render(): void;
    getConfig(): IDialogConfiguration;
    private _close();
    private _submit(to, title, body);
}
