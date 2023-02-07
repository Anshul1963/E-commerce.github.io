const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}




var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);