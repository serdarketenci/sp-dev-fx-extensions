var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseListViewCommandSet } from '@microsoft/sp-listview-extensibility';
import SendEMailDialog from './components/SendEMailDialog/SendEMailDialog';
import SendDocumentService from './services/SendDocumentService';
var LOG_SOURCE = 'SendDocumentCommandSet';
var SendDocumentCommandSet = (function (_super) {
    __extends(SendDocumentCommandSet, _super);
    function SendDocumentCommandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendDocumentCommandSet.prototype.onInit = function () {
        Log.info(LOG_SOURCE, 'Initialized SendDocumentCommandSet');
        return Promise.resolve();
    };
    SendDocumentCommandSet.prototype.onListViewUpdated = function (event) {
        var sendDocumentCommand = this.tryGetCommand('SEND_DOCUMENT');
        if (sendDocumentCommand) {
            // This command should be hidden unless exactly one row is selected.
            sendDocumentCommand.visible = event.selectedRows.length === 1;
        }
    };
    SendDocumentCommandSet.prototype.onExecute = function (event) {
        switch (event.itemId) {
            case 'SEND_DOCUMENT':
                var fileRef = event.selectedRows[0].getValueByName('FileRef').toString();
                var fileName = event.selectedRows[0].getValueByName('FileLeafRef').toString();
                SendDocumentService.fileName = fileName;
                SendDocumentService.fileUri = fileRef;
                SendDocumentService.webUri = this.context.pageContext.web.absoluteUrl;
                SendDocumentService.msGraphClientFactory = this.context.msGraphClientFactory;
                var dialog = new SendEMailDialog(SendDocumentService);
                // show dialog
                dialog.show().then(function () {
                });
                break;
            default:
                throw new Error('Unknown command');
        }
    };
    __decorate([
        override
    ], SendDocumentCommandSet.prototype, "onInit", null);
    __decorate([
        override
    ], SendDocumentCommandSet.prototype, "onListViewUpdated", null);
    __decorate([
        override
    ], SendDocumentCommandSet.prototype, "onExecute", null);
    return SendDocumentCommandSet;
}(BaseListViewCommandSet));
export default SendDocumentCommandSet;
//# sourceMappingURL=SendDocumentCommandSet.js.map