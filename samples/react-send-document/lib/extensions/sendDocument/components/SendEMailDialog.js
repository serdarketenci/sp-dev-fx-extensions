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
import { TextField, PrimaryButton, Button, DialogFooter, DialogContent } from 'office-ui-fabric-react';
var SendEMailDialogContent = (function (_super) {
    __extends(SendEMailDialogContent, _super);
    function SendEMailDialogContent(props) {
        var _this = _super.call(this, props) || this;
        _this._to = props.to;
        _this._title = props.title;
        _this._body = props.body;
        _this._onChangedTo = _this._onChangedTo.bind(_this);
        _this._onChangedSubject = _this._onChangedSubject.bind(_this);
        _this._onChangedBody = _this._onChangedBody.bind(_this);
        return _this;
    }
    SendEMailDialogContent.prototype.render = function () {
        var _this = this;
        // UI
        return React.createElement(DialogContent, { title: 'Send E-Mail Details', subText: 'Check details below:', onDismiss: this.props.close, showCloseButton: true },
            React.createElement(TextField, { label: 'To', required: true, value: this._to, onChanged: this._onChangedTo }),
            React.createElement(TextField, { label: 'Subject', required: true, value: this._title, onChanged: this._onChangedSubject }),
            React.createElement(TextField, { label: 'Body', required: true, multiline: true, value: this._body, onChanged: this._onChangedBody }),
            React.createElement(DialogFooter, null,
                React.createElement(Button, { text: 'Cancel', title: 'Cancel', onClick: this.props.close }),
                React.createElement(PrimaryButton, { text: 'OK', title: 'OK', onClick: function () { _this.props.submit(_this._to, _this._title, _this._body); } })));
    };
    SendEMailDialogContent.prototype._onChangedSubject = function (text) {
        this._title = text;
    };
    SendEMailDialogContent.prototype._onChangedTo = function (text) {
        this._to = text;
    };
    SendEMailDialogContent.prototype._onChangedBody = function (text) {
        this._body = text;
    };
    return SendEMailDialogContent;
}(React.Component));
var SendEMailDialog = (function (_super) {
    __extends(SendEMailDialog, _super);
    function SendEMailDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendEMailDialog.prototype.render = function () {
        ReactDOM.render(React.createElement(SendEMailDialogContent, { close: this._close.bind(this), title: this.title, to: this.to, body: this.body, submit: this._submit.bind(this) }), this.domElement);
    };
    SendEMailDialog.prototype.getConfig = function () {
        return {
            isBlocking: false
        };
    };
    SendEMailDialog.prototype._close = function () {
        this.title = "";
        this.body = "";
        this.to = "";
        this.close();
    };
    SendEMailDialog.prototype._submit = function (to, title, body) {
        this.title = title;
        this.body = body;
        this.to = to;
        this.close();
    };
    return SendEMailDialog;
}(BaseDialog));
export default SendEMailDialog;
//# sourceMappingURL=SendEMailDialog.js.map