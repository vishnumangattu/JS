ar=[1,"hello",true,null,false,"hai",2]
console.log(typeof(ar));
console.log(ar.length);
console.log(ar[3]);
console.log(ar.indexOf(false));
ar.push(10)
console.log(ar);
ar.pop()
console.log(ar);
ar.shift()
console.log(ar);
ar[1]="hai"
console.log(ar);
ar[ar.indexOf("hai")]="good"
console.log(ar);
ar.splice(2,1)
console.log(ar);
console.log(ar.reverse());
