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
import { TextField, PrimaryButton, Button, DialogFooter, DialogContent } from 'office-ui-fabric-react';
var SendEMailDialogContainer = (function (_super) {
    __extends(SendEMailDialogContainer, _super);
    function SendEMailDialogContainer(props) {
        var _this = _super.call(this, props) || this;
        _this._eMailProperties = _this.props.eMailProperties;
        _this._onChangedTo = _this._onChangedTo.bind(_this);
        _this._onChangedSubject = _this._onChangedSubject.bind(_this);
        _this._onChangedBody = _this._onChangedBody.bind(_this);
        return _this;
    }
    SendEMailDialogContainer.prototype.render = function () {
        var _this = this;
        // UI
        return React.createElement(DialogContent, { title: 'Send E-Mail Details', subText: '', onDismiss: this.props.close, showCloseButton: true },
            React.createElement(TextField, { label: 'To', required: true, value: this._eMailProperties.To, onChanged: this._onChangedTo }),
            React.createElement(TextField, { label: 'Subject', required: true, value: this._eMailProperties.Subject, onChanged: this._onChangedSubject }),
            React.createElement(TextField, { label: 'Body', required: true, multiline: true, value: this._eMailProperties.Body, onChanged: this._onChangedBody }),
            React.createElement(DialogFooter, null,
                React.createElement(Button, { text: 'Cancel', title: 'Cancel', onClick: this.props.close }),
                React.createElement(PrimaryButton, { text: 'OK', title: 'OK', onClick: function () { _this.props.submit(_this._eMailProperties); } })));
    };
    SendEMailDialogContainer.prototype.getEMailAttachment = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sendDocumentService
                .getFileContentAsBase64(_this.sendDocumentService.fileUri)
                .then(function (fileContent) {
                resolve(new EMailAttachment({
                    FileName: _this.sendDocumentService.fileName,
                    ContentBytes: fileContent
                }));
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    SendEMailDialogContainer.prototype.sendEMail = function (eMailProperties) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sendDocumentService.sendEMail(eMailProperties)
                .then(function (emailData) {
                resolve(true);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    SendEMailDialogContainer.prototype._onChangedSubject = function (text) {
        this._eMailProperties.Subject = text;
    };
    SendEMailDialogContainer.prototype._onChangedTo = function (text) {
        this._eMailProperties.To = text;
    };
    SendEMailDialogContainer.prototype._onChangedBody = function (text) {
        this._eMailProperties.Body = text;
    };
    return SendEMailDialogContainer;
}(React.Component));
export { SendEMailDialogContainer };
//# sourceMappingURL=SendEMailDialogContainer.js.map