//your JS code here. If required.
let student ={
	name : "ramesh", 
	}
Object.prototype.getKeys = function () {
	return Object.keys(this);
}
console.log(student.getKeys());