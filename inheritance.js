class Parent{
    constructor(){
        this. fatherName = 'tomac';
    }
}
class Child extends Parent{
    constructor(Name){
        super();
        this.name = Name;
    }
    getFullName(){
        return this.fatherName + ' ' + this.name;
    }
}
const baby = new Child('Adnan');
console.log(baby.getFullName());