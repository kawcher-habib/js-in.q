// const parson = {
//     firstName : 'Kawcher',
//     lastName : 'habib',
//     salary : 15000,
//     fullName : function(){
//           const result =   this.firstName + this.lastName;
//             return result;
//     },
//     getCharge : function(amount){
//         this.salary = this.salary - amount;
//         return this.salary;
//     }
// }
// const salaryS = parson.getCharge(150);
// console.log(salaryS)

const parson = {
    firstName : 'Kawcher',
    lastName : 'habib',
    salary : 15000,
    fullName : function(){
          const result =   this.firstName + this.lastName;
            return result;
    },
    // getCharge1 : function(amount){
       
    //     this.salary = this.salary - amount;
    //     return this.salary;
    // }
    getCharge : function(amount){
        console.log(this)
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    fName : 'hero',
    lName : 'balam',
    salary : 30000,

}
const chargBill = parson.getCharge.bind(heroPerson);
chargBill();
