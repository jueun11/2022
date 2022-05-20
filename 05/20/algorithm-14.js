const arr = [ "a", "b", "c"];


let temp;

temp = arr[0];
console.log(temp);    //a
arr.shift();          
console.log(arr);   //['b','c'] 
arr.push(temp);
console.log(arr);   //['b','c','a']

