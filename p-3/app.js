// setTimeout(()=>
// {
//     console.log('Hello from setTimeout');
//     document.querySelector('h1').innerHTML="Hello from setTimeout";
    
// },2000)
const changeText= function(){
    console.log('Hello from setTimeout');
    document.querySelector('h1').innerHTML="RISHI from setTimeout";
    
}
const changeMe=setTimeout(changeText,2000)


const btn=document.querySelector('#stop');
btn.addEventListener('click',function(){
    clearTimeout(changeMe);
})
