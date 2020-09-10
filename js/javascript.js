document.querySelector('.now').addEventListener('click' , 
() =>{
     document.querySelector('.main').style.display = 'none';
     document.querySelector('.sign-up').style.display='flex';
     document.querySelector('.container').style.background='rgb(248, 14, 111)';
});

document.querySelector('.x-icon').addEventListener('click' , 
() =>{
     document.querySelector('.main').style.display = 'flex';
     document.querySelector('.sign-up').style.display='none';
     document.querySelector('.container').style.cssText=
     'background:linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.6) ),url(image/london.jpg) center no-repeat; background-size:cover;';
});