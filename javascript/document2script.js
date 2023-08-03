// const para1=document.getElementsByClassName('para');
// // para1[0].innerHTML="paragraph";
// // para1[1].innerHTML="paragraph";
// var para=document.querySelectorAll('p.para');
// para.forEach(function(para){
// para.onclick=function()
// {
//     para.innerHTML='paragraph';
// };
// })
// var bt1=document.getElementById('bt1');
// var bt2=document.getElementById('bt2');
// bt1.addEventListener('click',function(){
//     bt2.innerHTML="Button Button";
// })
// bt2.addEventListener('click',function(){
//     bt1.innerHTML="Button Button";
// })
var head1=document.getElementById('head1');
var head2=document.getElementById('head2');
head1.addEventListener('click',function(){
    head2.style.backgroundColor='blue';
})
head2.addEventListener('click',function(){
    head1.style.color='green';

})
