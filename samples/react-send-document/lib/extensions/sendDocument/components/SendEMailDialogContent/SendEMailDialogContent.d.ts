/// <reference types="react" />
import * as React from 'react';
import { ISendEMailDialogContentProps } from './ISendEMailDialogContentProps';
import { ISendEMailDialogContentState } from './ISendEMailDialogContentState';
export declare class SendEMailDialogContent extends React.Component<ISendEMailDialogContentProps, ISendEMailDialogContentState> {
    private _eMailProperties;
    constructor(props: any);
    render(): JSX.Element;
    private _onChangedSubject(text);
    private _onChangedTo(text);
    private _onChangedBody(text);
    private getEMailAttachment();
    private sendEMail(eMailProperties);
    private _submit();
}
