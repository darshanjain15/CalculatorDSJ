

let screen=document.getElementById('screen');
button=document.querySelectorAll('button');
let screenValue = '';

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText =e.target.innerText;
        console.log('Button text is ', buttonText)
        if(buttonText=="*")
        {
            buttonText='*'
            screenValue +=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue='';
            screen.value=screenValue;
        }
        else if(buttonText=='='){
            screen.value = eval(screenValue);
        }
        else if(buttonText=='DEL'){
            screen.value = screen.value.slice(0, - 1);
        }
        else{
            screenValue +=buttonText;
            screen.value=screenValue;
        }
    })


}

    
