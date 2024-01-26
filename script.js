//your JS code here. If required.
Object.prototype.getKeys=function(){
	let arr=Object.keys(this);
	
	return arr;
}

let student={
	name:"abc";
	
}

student.getKeys();
