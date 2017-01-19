// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
import { Component } from "@angular/core";
import { PeekViewBrokerService } from "../services/peek-view-broker.service";
var _reflect = Reflect;
var DecoratorUtils = (function () {
    function DecoratorUtils() {
    }
    DecoratorUtils.getMetadata = function (metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        PeekViewBrokerService.CONFIGURE_TEMPLATE_URL(metadata);
        PeekViewBrokerService.CONFIGURE_STYLE_URLS(metadata);
        return metadata;
    };
    DecoratorUtils.annotateComponent = function (cls, metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        var annotations = _reflect.getMetadata('annotations', cls) || [];
        annotations.push(new Component(DecoratorUtils.getMetadata(metadata, customDecoratorMetadata)));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    };
    return DecoratorUtils;
}());
export { DecoratorUtils };
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/decorators/utils.js.map