"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const actionwords_1 = require("./actionwords");
let actionWords;
cucumber_1.Before(() => __awaiter(void 0, void 0, void 0, function* () {
    actionWords = new actionwords_1.ActionWords();
}));
cucumber_1.After(() => __awaiter(void 0, void 0, void 0, function* () {
}));
cucumber_1.Given('I am authorized user', function () {
    actionWords.iAmAuthorizedUser();
    return 'passed';
});
cucumber_1.When('I call {string} = elements', function (string) {
    /* eslint-disable no-console */
    console.log('string: ' + string);
    return 'passed';
    /* eslint-enable no-console */
});
cucumber_1.Then('I should get the list of elements', function () {
    return 'passed';
});
//# sourceMappingURL=step_definitions.js.map