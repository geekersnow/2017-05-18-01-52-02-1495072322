let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,klass){ 
	Parent.call(this,name,age);
	this.klass = klass;
	this.introduce = function(){
		return "My name is " + this.name + ". I am " + this.age + " years old. I am at Class " + this.klass+ ".";
		}
}
