//your JS code here. If required.
Object.prototype=getKeys(){
	let arr=[]
	for(let i=0;i<this.length;i++)
		{
			arr.push(this[i]);
		}
	return arr;
}

let student={
	name:"abc";
	
}

student.getKeys();
