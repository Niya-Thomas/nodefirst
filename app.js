const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("holl hii")
});
app.listen(3000,()=>{
    console.log("server is running")
})
// core module
// file system
// http create server
// url 
// path
// assert
// os

const calucaltor=require('./cal')  //local varriable

let x=50,y=25;

console.log('addition of 50 and 25 ' +calucaltor.add(x,y));
console.log('substraction of 50 and 25 ' +calucaltor.sub(x,y));
console.log('multiplication of 50 and 25 ' +calucaltor.mult(x,y));



const local=require("./welcome")
local.sayHello();
console.log(local.cuurTime)
console.log(local.adrress)

