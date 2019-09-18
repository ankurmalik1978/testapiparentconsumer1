import express from 'express';
import { Students } from "testapichild1";
import { fStudents as NewStudents } from "testapiconsumer1";

console.log("**********************************************************");
console.log("This is API call with 1st version");
console.log("should print only name");
let s: Students = new Students("Ankur", " Malik");
// tslint:disable-next-line: no-console
console.log(s.getFullName());

console.log("**********************************************************");
let s1 = NewStudents("Ankur", " Malik");
// tslint:disable-next-line: no-console
console.log("This is the API which is exposed from 2nd API");
console.log(s1);
console.log("**********************************************************");

const app = express();
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