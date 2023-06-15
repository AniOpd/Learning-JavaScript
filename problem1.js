// storing the student info
let n=prompt("Enter the no of students");
n=+n;
let students=[];
for(let i=0;i<n;i++){
    const student={
        Name:prompt("Enter the name of student"),
        "roll no":+prompt("Enter the roll no"),
        Branch:prompt("Enter the branch of student"),
        group:+prompt("Enter the group no of student")
    }
    students.push(student);
}
console.log(students);
for(let student of students){
    console.log(student);
}