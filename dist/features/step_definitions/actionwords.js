"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionWords {
    iAmAuthorizedUser() {
        return 'passed';
    }
    iCallP1Elements(p1) {
        return p1;
    }
    iShouldGetTheListOfElements() {
        return 'passed';
    }
    iCallP1ElementsWithProperP2IdOfSpecificElement(p1, p2) {
        return p1 + p2;
    }
    iShouldGetTheElementOfSpecificP1Id(p1) {
        return p1;
    }
}
exports.ActionWords = ActionWords;
//# sourceMappingURL=actionwords.js.map