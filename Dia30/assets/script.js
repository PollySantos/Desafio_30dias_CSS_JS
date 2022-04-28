const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modeText =$(".mode-text");
const mode =$(".mode");
const control = $(".control");
const content = $(".content");
const r = $(":root");
const controlBtn = $(".control");
const video  = $("#video");
const close  = $(".close");
const handelMode = () =>{
    var audio = document.getElementById("audio");
    audio.play();
    video.play();
    let rs = getComputedStyle(r).getPropertyValue('--main');
    content.classList.toggle("active");
    switch (rs) {
        case 'black':
            r.style.setProperty('--main','white');
            modeText.innerText = "Light Mode";
            control.style.backgroundColor = "black";
            break;
         default:
            r.style.setProperty('--main','black');
            modeText.innerText = "Dark Mode";
            control.style.backgroundColor = "white";
            break;
 }

}

const changeName = (name) =>{
  content.innerText = name;
}
controlBtn.onclick = handelMode;

const inputName =$(".insert-input");
inputName.onkeyup = function(e){
    const name = e.target.value;
    if(e.keyCode === 13){
        changeName(name);
        inputName.value = '';
    }
}
close.onclick =function(){
 mode.style.display = 'none';
}