// prototype is object that we can add function to the class
class Employee{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}
Employee.prototype.sal=50000;
//using prototype we creat new function...
Employee.prototype.display=function(){
    console.log(this.eid,this.ename,this.sal);
}

emp1obj=new Employee(100,"devid");
emp1obj.display();

emp2obj=new Employee(102,"john");
emp2obj.display();
// res---100 devid 50000
// 102 john 50000