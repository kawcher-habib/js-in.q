class student{
        constructor(sId, sName){
            this.id = sId;
            this.name = sName;
            this.school = 'kolimunnesa school'
        }
}
const student1 = new student(12,'kawcher');
const student2 = new student(13, 'habib');
console.log(student1, student2);