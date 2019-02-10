import { MSGraphClientFactory } from '@microsoft/sp-http';
import { IService, EMailProperties } from '../models';
export declare class SendDocumentService implements IService {
    webUri: string;
    msGraphClientFactory: MSGraphClientFactory;
    fileName: string;
    fileUri: string;
    private static instance;
    private constructor();
    static getInstance(): SendDocumentService;
    /**
     *  PUBLIC METHODS
     */
    getFileContentAsBase64(fileUri: string): Promise<string>;
    sendEMail(emailProperties: EMailProperties): Promise<boolean | Error>;
    /**
     *  ORIVATE METHODS
     */
    private base64ArrayBuffer(arrayBuffer);
}
declare const _default: SendDocumentService;
export default _default;
