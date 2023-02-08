//prototype is object that we can add new property to the function
function student()
{
    this.name='john';
    this.gender='male';
}
student.prototype.age=35;// prototype is function that add any property in function.... 
stu1=new student();
// console.log(stu1.name);
// console.log(stu1.gender);

// now i add one more veriable of this function
stu1.age=35; // this is new veriable
console.log(stu1.name,stu1.gender,stu1.age);//john male 35  
// this function work successfully

//now
stu2=new student();
console.log(stu2.name,stu2.gender,stu2.age);//john male undefined(age is not creat for stu2)
