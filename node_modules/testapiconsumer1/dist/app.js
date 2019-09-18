"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testapichild1_1 = require("testapichild1");
const Students_1 = require("./Students");
let s = new testapichild1_1.Students("Ankur", " Malik");
// tslint:disable-next-line: no-console
console.log("**********************************************************");
console.log("This is API call");
console.log(s.getFullName());
console.log("**********************************************************");
let s1 = Students_1.fStudents("Ankur", " Malik");
// tslint:disable-next-line: no-console
console.log("**********************************************************");
console.log("This is the API which i expose after consuming base");
console.log(s1);
console.log("**********************************************************");
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map