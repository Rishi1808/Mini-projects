   const form=document.querySelector('form')

   form.addEventListener('submit',function(e){
    e.preventDefault()
    document.querySelector("#result").style.display = "block";
   const h = parseInt(document.querySelector("#height").value);
   const w = parseInt(document.querySelector("#weight").value);
   const res=document.querySelector("#result");
   if(h==='' || h<0  || isNaN(h)){
    res.innerHTML="Please fill valid  weight";
   }
   else if (w === "" || w < 0 || isNaN(w)) {
     res.innerHTML = "Please fill valid  weight";
   }else{

    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    res.innerHTML = `Your BMI is ${bmi}`;
   }

    

   })