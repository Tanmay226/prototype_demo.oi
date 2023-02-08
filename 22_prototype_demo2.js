//prototype is a object we can  add new prooerty to the function
class Employee{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}
Employee.prototype.sal=50000;//this is function to add new property to  the class
emp1obj=new Employee(100,"devid");
console.log(emp1obj.eid,emp1obj.ename,emp1obj.sal);//100 devid 50000

emp2obj=new Employee(102,"john");
console.log(emp2obj.eid,emp2obj.ename,emp2obj.sal);//102 john 50000