import Item from '../models/Item';
import { IListService } from '../models/IListService';
import { IWebPartContext } from '../../../../node_modules/@microsoft/sp-webpart-base';
export declare class HelloWorldService implements IListService {
    context: IWebPartContext;
    listName: string;
    private static instance;
    private constructor();
    static getInstance(): HelloWorldService;
    getItems(): Promise<Array<Item>>;
}
declare const _default: HelloWorldService;
export default _default;
