import Item from '../models/Item';
import { SPHttpClient } from '@microsoft/sp-http';
import { isNull, isEmpty } from 'lodash';
var HelloWorldService = (function () {
    function HelloWorldService() {
    }
    HelloWorldService.getInstance = function () {
        if (!HelloWorldService.instance) {
            HelloWorldService.instance = new HelloWorldService();
        }
        return HelloWorldService.instance;
    };
    HelloWorldService.prototype.getItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (isNull(_this.listName) == false && isEmpty(_this.listName) == false) {
                _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl + ("/_api/web/lists/getbytitle('" + _this.listName + "')/items?$select=Title,Id"), SPHttpClient.configurations.v1)
                    .then(function (response) {
                    return response.json();
                }).then(function (result) {
                    resolve(result.value.map(function (spItem) {
                        return new Item({
                            Id: spItem.Id,
                            Title: spItem.Title
                        });
                    }));
                });
            }
            else {
                reject("Lütfen 'listName' parametresini giriniz.");
            }
        });
    };
    return HelloWorldService;
}());
export { HelloWorldService };
export default HelloWorldService.getInstance();
//# sourceMappingURL=HelloWorldService.js.map