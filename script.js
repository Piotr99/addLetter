const txt = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam id doloribus nostrum sequi dolorem distinctio magnam nisi, saepe quas rerum vel incidunt perspiciatis. Natus hic ex blanditiis nobis amet?";
const textSpn = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
let number = 0;



function Type(){
    textSpn.textContent += txt[number];
    number++;
    if(number == txt.length) return clearInterval(typing); 
}
const typing = setInterval(Type, 100);


const showCursor = ()=>{
    cursor.classList.toggle('active');
}
setInterval(showCursor, 500);