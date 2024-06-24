const buttons=document.querySelectorAll('.button')

const body=document.querySelector('body')

//console.log(buttons)

buttons.forEach(function(button){
     button.addEventListener('click',function(e){{
        console.log(e)
         if(e.target.id=='one')
            {
                body.style.backgroundColor='blue';
            }
          if(e.target.id=='two')
            {
                body.style.backgroundColor='green';
            }
     if(e.target.id=='three')
                {
                    body.style.backgroundColor='red';
                }

                
     }})   
});

