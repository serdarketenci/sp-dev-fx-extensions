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
import { TextField, PrimaryButton, Button, DialogFooter, DialogContent, Spinner, SpinnerSize } from 'office-ui-fabric-react';
import { EMailAttachment } from '../../models';
var SendEMailDialogContent = (function (_super) {
    __extends(SendEMailDialogContent, _super);
    function SendEMailDialogContent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: false
        };
        _this._eMailProperties = _this.props.eMailProperties;
        _this._onChangedTo = _this._onChangedTo.bind(_this);
        _this._onChangedSubject = _this._onChangedSubject.bind(_this);
        _this._onChangedBody = _this._onChangedBody.bind(_this);
        _this._submit = _this._submit.bind(_this);
        return _this;
    }
    SendEMailDialogContent.prototype.render = function () {
        var _this = this;
        var getDialogContent = function () {
            if (_this.state.isLoading) {
                return (React.createElement(Spinner, { size: SpinnerSize.large, label: "loading...", ariaLive: "assertive" }));
            }
            else {
                return (React.createElement("div", null,
                    React.createElement(TextField, { label: 'To', required: true, value: _this._eMailProperties.To, onChanged: _this._onChangedTo }),
                    React.createElement(TextField, { label: 'Subject', required: true, value: _this._eMailProperties.Subject, onChanged: _this._onChangedSubject }),
                    React.createElement(TextField, { label: 'Body', required: true, multiline: true, value: _this._eMailProperties.Body, onChanged: _this._onChangedBody }),
                    React.createElement(DialogFooter, null,
                        React.createElement(Button, { text: 'Cancel', title: 'Cancel', onClick: _this.props.close }),
                        React.createElement(PrimaryButton, { text: 'OK', title: 'OK', onClick: _this._submit }))));
            }
        };
        // UI
        return React.createElement(DialogContent, { title: 'Send E-Mail Details', subText: '', onDismiss: this.props.close, showCloseButton: true }, getDialogContent());
    };
    SendEMailDialogContent.prototype._onChangedSubject = function (text) {
        this._eMailProperties.Subject = text;
    };
    SendEMailDialogContent.prototype._onChangedTo = function (text) {
        this._eMailProperties.To = text;
    };
    SendEMailDialogContent.prototype._onChangedBody = function (text) {
        this._eMailProperties.Body = text;
    };
    SendEMailDialogContent.prototype.getEMailAttachment = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.props.sendDocumentService
                .getFileContentAsBase64(_this.props.sendDocumentService.fileUri)
                .then(function (fileContent) {
                resolve(new EMailAttachment({
                    FileName: _this.props.sendDocumentService.fileName,
                    ContentBytes: fileContent
                }));
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    SendEMailDialogContent.prototype.sendEMail = function (eMailProperties) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.props.sendDocumentService.sendEMail(eMailProperties)
                .then(function (emailData) {
                resolve(true);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    SendEMailDialogContent.prototype._submit = function () {
        var _this = this;
        this.setState({ isLoading: true });
        this.getEMailAttachment().then(function (attachment) {
            _this._eMailProperties.Attachment = attachment;
            _this.sendEMail(_this._eMailProperties)
                .then(function () {
                _this.props.submit(_this._eMailProperties);
            }).catch(function (err) {
                console.error("Send Document Error", err);
            });
        });
    };
    return SendEMailDialogContent;
}(React.Component));
export { SendEMailDialogContent };
//# sourceMappingURL=SendEMailDialogContent.js.map