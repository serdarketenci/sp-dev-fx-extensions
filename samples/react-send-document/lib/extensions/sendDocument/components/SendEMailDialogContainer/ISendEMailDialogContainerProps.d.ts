import { EMailProperties } from "../../models";
export interface ISendEMailDialogContainerProps {
    close: () => void;
    submit: (eMailProperties: EMailProperties) => void;
    eMailProperties: EMailProperties;
}
