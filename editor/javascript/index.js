
function myFunc(){
     let Html = document.getElementById('Html-code').value;
     let css = "<style>"+ document.getElementById('css-code').value + "</style>";
     let js = document.getElementById('js-code').value;
     let Output = document.getElementById('Output'); 
    //  console.log(Html,css,js,Output);
    Output.contentDocument.body.innerHTML = Html + css;
    Output.contentWindow.eval(js);
}
document.getElementById('Html-code').addEventListener("keyup",myFunc);
document.getElementById('css-code').addEventListener("keyup",myFunc);
document.getElementById('js-code').addEventListener("keyup",myFunc);


let Html = document.getElementById('Html-code');
let css = document.getElementById('css-code');
let js = document.getElementById('js-code');
let clr1 = document.getElementById('clr1');
let clr2 = document.getElementById('clr2');
let clr3 = document.getElementById('clr3');



clr1.addEventListener('click',function (){Html.value='';})
clr2.addEventListener('click',function (){css.value='';})
clr3.addEventListener('click',function (){js.value='';})


// dark mode button
const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();

