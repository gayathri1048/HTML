// let fun=function(){
//     let a=10;
//     console.log(10);
//     return a
// }
// console.log(fun,"what is inside variable");
// console.log(fun(),"calling the variable");
// Arrow Function: functional expressions
// let fun=(param1,param2)=>{
//     //function body
// }
// fun()
//IIFE fumction
// function fun(...params)
// {
//     console.log(params,"this are all the arguments");
// }
// fun(2,3,4,1,5,6);
//function to argument of another function
function addition(a,b)
{
    let c=a+b;
    return c;
}
function calc(a,b,add)
{
    return add(a,b);
}
function subtraction(a,b)
{
    let c=a-b;
    return c;
}
function calc(a,b,sub)
{
    return sub(a,b);
}
console.log(calc(2,3,subtraction));