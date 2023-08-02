 var elBtn = document.querySelector('.btn')
 var elForm = document.querySelector('.form')
 elBtn.addEventListener('click',function(){
    console.log('book');
 })
 elForm.addEventListener('submit',function(evn){
    evn.preventDefault()
    var login = evn.target.login.value;
    var password= evn.target.password.value;
  if (evn.target.login.value >6){
    console.log('correct');
  }else if (evn.target.login.value >8) {
    console.log('correct');
  }
  if(evn.target.password.value >8){
    console.log('correct');
  }else if (evn.target.password.value <10)
   console.log('incorrect');
     if(login == login.toLowerCase()){
        console.log('yoq');
    }else{
        console.log('bor');
    }
  }
   
)  



