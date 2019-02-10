import { EMailProperties } from "../../models";
export interface ISendEMailDialogContentProps {
    close: () => void;
    submit: (eMailProperties: EMailProperties) => void;
    eMailProperties: EMailProperties;
}
