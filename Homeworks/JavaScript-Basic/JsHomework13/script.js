let student = {
  exam1: "10",
  exam2: "6",
  exam3: "8",
  exam4: "9",
  exam5: "6",
  avarageGrade: function sum() {
    return (
      (parseInt(this.exam1) +
        parseInt(this.exam2) +
        parseInt(this.exam3) +
        parseInt(this.exam4) +
        parseInt(this.exam5)) /
      5
    );
  },
hasPassed: function () {
    let avarage = this.avarageGrade();
    if (avarage >= 8) {
        return "The student has passed the semester"
      } else {
        return `The student has not passed the semester, his grade is ${avarage}`
      }
}
};
console.log(student.avarageGrade());
alert("To pass the semester yor avarage grade should be 8")
alert(student.hasPassed())
