import { Students } from "testapichild1";

function fStudents (fname, sname ) : string{
    // private fName: string;
    // private lName: string;

    // constructor(fname: string, lname: string){
    //     this.fName = fname;
    //     this.lName = lname;
    // }

    // getFullName():string{
    //     return this.fName.concat(this.lName);
    // }

    let s1: Students = new Students(fname, sname);
    return s1.getFullName().concat(" ~1.0.0");
}

export { fStudents }