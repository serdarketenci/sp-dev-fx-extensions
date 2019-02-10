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
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog } from '@microsoft/sp-dialog';
import { EMailProperties } from '../../models';
import { SendEMailDialogContent } from '../SendEMailDialogContent/SendEMailDialogContent';
var SendEMailDialog = (function (_super) {
    __extends(SendEMailDialog, _super);
    /**
     *
     */
    function SendEMailDialog(service, eMailProperties) {
        var _this = _super.call(this) || this;
        _this.sendDocumentService = service;
        if (eMailProperties) {
            _this.eMailProperties = eMailProperties;
        }
        else {
            _this.eMailProperties = new EMailProperties({
                To: "",
                Subject: "Send Document - " + _this.sendDocumentService.fileName,
                Body: "",
            });
        }
        return _this;
    }
    SendEMailDialog.prototype.render = function () {
        ReactDOM.render(React.createElement(SendEMailDialogContent, { close: this._close.bind(this), eMailProperties: this.eMailProperties, submit: this._submit.bind(this), sendDocumentService: this.sendDocumentService }), this.domElement);
    };
    SendEMailDialog.prototype.getConfig = function () {
        return {
            isBlocking: false
        };
    };
    SendEMailDialog.prototype.clear = function () {
        if (this.eMailProperties) {
            this.eMailProperties = undefined;
        }
        ReactDOM.unmountComponentAtNode(this.domElement);
    };
    SendEMailDialog.prototype._close = function () {
        this.clear();
        this.close();
    };
    SendEMailDialog.prototype._submit = function (eMailProperties) {
        this.clear();
        this.close();
    };
    return SendEMailDialog;
}(BaseDialog));
export default SendEMailDialog;
//# sourceMappingURL=SendEMailDialog.js.map