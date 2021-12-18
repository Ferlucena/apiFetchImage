//botones
const btn_gato = document.getElementById('btn_gato');
const btn_perro = document.getElementById('btn_perro');

//visores
const resultadogato = document.getElementById('resultadogato');
const resultadoperro = document.getElementById('resultadoperro');

//eventos
btn_gato.addEventListener('click', getFotoGato);
btn_perro.addEventListener('click', getFotoPerro);

//funciones de eventos
//En fecth de gatos obtengo imagenes
function getFotoGato(){
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        resultadogato.innerHTML = `<img src="${data.file}"/>`
    });
}

//En fetch de perros obtengo una url 
function getFotoPerro(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
       if(data.url.includes('.mp4')){
           getFotoPerro();
       }else{
           resultadoperro.innerHTML = `<img src="${data.url}" alt="dog" />`}
        
    });
}