import { EMailAttachment } from ".";
export declare class EMailProperties {
    To: string;
    Subject: string;
    Body: string;
    Attachment?: EMailAttachment;
    constructor(options: EMailProperties);
}
