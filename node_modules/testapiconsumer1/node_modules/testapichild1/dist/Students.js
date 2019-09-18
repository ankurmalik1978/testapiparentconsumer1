"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Students {
    constructor(fname, lname) {
        this.fName = fname;
        this.lName = lname;
    }
    getFullName() {
        return this.fName.concat(this.lName).concat(" Hi there!!");
    }
}
exports.Students = Students;
//# sourceMappingURL=Students.js.map