//your JS code here. If required.
Object.prototype.getKeys=function(){
	let arr=Object.keys(this);
	
	return arr;
}

let student={
	name:"john",
	age:30,
	city:"New York",
	
}

student.getKeys();
