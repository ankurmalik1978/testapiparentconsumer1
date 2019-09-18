"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testapichild1_1 = require("testapichild1");
function fStudents(fname, sname) {
    // private fName: string;
    // private lName: string;
    // constructor(fname: string, lname: string){
    //     this.fName = fname;
    //     this.lName = lname;
    // }
    // getFullName():string{
    //     return this.fName.concat(this.lName);
    // }
    let s1 = new testapichild1_1.Students(fname, sname);
    return s1.getFullName().concat(" ~1.0.0");
}
exports.fStudents = fStudents;
//# sourceMappingURL=Students.js.map