/// <reference types="react" />
import * as React from 'react';
import { ISendEMailDialogContainerProps } from './ISendEMailDialogContainerProps';
export declare class SendEMailDialogContainer extends React.Component<ISendEMailDialogContainerProps, {}> {
    private _eMailProperties;
    constructor(props: any);
    render(): JSX.Element;
    private getEMailAttachment();
    private sendEMail(eMailProperties);
    private _onChangedSubject(text);
    private _onChangedTo(text);
    private _onChangedBody(text);
}
