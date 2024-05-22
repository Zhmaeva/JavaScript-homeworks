function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.excluded) {
    return;
  }

  if(!this.marks) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(!this.marks?.length) {
    return 0;
  } else {
    return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student("Alex", "male", 38);
let student2 = new Student("Tijana", "female", 23);
let student3 = new Student("Joe", "male", 18);
