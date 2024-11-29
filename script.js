var username = document.getElementById('email');
var password = document.getElementById('password');

var usernameEror = document.getElementById('userSpan');
var passwordEror = document.getElementById('passwordSpan');
const form = document.querySelector('.form')


console.log(username.value);

function usernameErorr(){
    if(username.value.length < 8){
        usernameEror.innerHTML="invalid Username";
        // usernameEror.style.color='red'
        // usernameEror.style.margin=' 130px';
       
  }
  else{
    usernameEror.innerHTML='valid Username';
    usernameEror.style.color='green';
  }
    }

    function passwordErorfun(){
        if (password.value.length < 8){
            passwordEror.innerHTML='invalid password please enter password 8 char ';
            // passwordEror.style.color='red';
            // usernameEror.style.margin=' 150px';

        }else{
            passwordEror.innerHTML='valid password'
            passwordEror.style.color='green';
            // passwordEror.style.marginBottomnB='20px'
            
        }
    }

    const a = ['','','','','','','',''];
   
    const para = document.getElementById('para')


form.addEventListener('submit',function(){
    a[0]=email.value;
    a[1]=password.value; 
    console.log(a[0]);
   
    
         para.innerHTML=a[1]
    
    
})
