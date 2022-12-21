let bodytag = document.body;
document.addEventListener("keydown", (e)=>{
    console.log(e)
})
let otpinputboxestag=document.querySelectorAll('.otp-numb')
console.log(otpinputboxestag);

otpinputboxestag.forEach((element, index) => {
    element.addEventListener("keydown", (e)=>{
       if(e.key>=0 && e.key<10){
        otpinputboxestag[index].value = "";
        setTimeout(()=>{
            otpinputboxestag[index+1].focus()
        },0)
       }
       else if(e.key === 'Backspace'){
        otpinputboxestag[index-1].focus();
       }
        console.log(index);
    })
});