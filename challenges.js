
let input=document.getElementById("input_text");
let message=document.getElementById('id_message');
let buttonEncriptar=document.getElementById('id_encriptar');
let buttonDesencriptar=document.getElementById('id_desencriptar');
let buttonCopiar=document.getElementById('id_copiar');
let textArea=document.getElementById('id_textoArea');
let ningunMensaje=document.querySelector('.textoAyuda');

// Aplicar estilo al aplicar un cabio dinamíco 
const sectionElemento= document.querySelector('.section_verMensaje');

function Encriptar() {

    let textoDelIput=input.value;
    let cadenaReemplazada = '';

    for (let i=0; i < textoDelIput.length; i++){
            
        if ( textoDelIput[i] == 'a'){
            cadenaReemplazada += 'ai';
        }

        else if (textoDelIput[i] == 'e'){
            cadenaReemplazada += 'enter';
        }

        else if ( textoDelIput[i] == 'i'){
            cadenaReemplazada += 'imes';
        }

        else if (textoDelIput[i] == 'u'){
            cadenaReemplazada += 'ufat';
        }

        else if (textoDelIput[i] == 'o'){
            cadenaReemplazada +='ober';
        }

        else{
            cadenaReemplazada += textoDelIput[i];
        }
    }
    
    textArea.value=cadenaReemplazada;
    input.value='';
    
}

function copiarTexto(){

    textArea.select();
    document.execCommand('copy');

}

function Desencriptar(){
    const textoDelInput=input.value;
    const cadenaDePalabras =[
        {antigua:'ai' ,  nueva:'a'},
        {antigua:'enter' , nueva:'e'},
        {antigua:'imes' , nueva:'i'},
        {antigua:'ufat' , nueva:'u'},
        {antigua:'ober' , nueva:'o'},
];
    let cadenaNueva=textoDelInput;

    for (let i=0; i < cadenaDePalabras.length; i++){

        const palabraNueva=cadenaDePalabras[i].nueva;
        const palabraAntigua=cadenaDePalabras[i].antigua;
        
        let index=cadenaNueva.indexOf(palabraAntigua)
        
        while (index !=-1) {

                cadenaNueva=cadenaNueva.slice(0, index) + palabraNueva + cadenaNueva.slice(index+palabraAntigua.length);
                index=cadenaNueva.indexOf(palabraAntigua + index+1);
        }
    
    }
    
    textArea.value=cadenaNueva;
    input.value='';
    
}
textArea.style.display='none';

function condicionEnElInputBottondesencriptar(){

   
    if (/^[a-z0-9-' ']+$/.test(input.value)){
        Desencriptar();
        ningunMensaje.style.display='none';
        textArea.style.display='block';
        textArea.setAttribute();
        message.innerHTML='El texto ingresado es valido';

    }


    else{
        ningunMensaje.style.display='block';
        textArea.style.display='none'
    }
}

function condicionEnElInputBottonencriptar(){
   
    if (/^[a-z0-9-' ']+$/.test(input.value)){
        Encriptar();
        
        ningunMensaje.style.display='none';
        textArea.style.display='block';
        textArea.setAttribute();
        message.innerHTML='El texto ingresado es valido';

    }


    else{
        ningunMensaje.style.display='block';
        textArea.style.display='none'
    }
}


buttonEncriptar.onclick=condicionEnElInputBottonencriptar;
buttonDesencriptar.onclick=condicionEnElInputBottondesencriptar;
buttonCopiar.onclick=copiarTexto;



