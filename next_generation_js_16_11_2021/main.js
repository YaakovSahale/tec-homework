//!...................................1-3

class Student {
  constructor(name, age, gender) {
    (this.name = name), (this.age = age), (this.gender = gender);
  }
  write() {
    console.log(this.name, this.age, this.gender);
  }

  isYoung() {
    if (this.age < 18) {
      return true;
    }
    return false;
  }
}

const student1 = new Student("gil", 45, "sasover");
const student2 = new Student("avi", 17, "sasover");

console.log(student1.isYoung());
console.log(student2.isYoung());


const studentsArr = [student1,student2]
studentsArr.forEach(student => {
    console.log(student.isYoung());
});


