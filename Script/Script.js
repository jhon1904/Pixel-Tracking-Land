const obtenerParametros = () => {
    
    const parametro1 = document.getElementById("parametro1");
    const parametro2 = document.getElementById("parametro2");
    const parametro3 = document.getElementById("parametro3");
    const parametro4 = document.getElementById("parametro4");
    
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    const number3 = document.getElementById("number3");
    const number4 = document.getElementById("number4");
    
    const iframe1 = document.getElementById("resultadoIframe1");
    const iframe2 = document.getElementById("resultadoIframe2");
    const iframe3 = document.getElementById("resultadoIframe3");
    const iframe4 = document.getElementById("resultadoIframe4");

    const check1 = document.getElementById("check1")

    const actualizarIframeButton = document.getElementById("buscar");
    const randomButton = document.getElementById("random");

    const nextButton = document.getElementById("next");
    const backButton = document.getElementById("back");

    const iframeDivs = document.querySelectorAll(".iframeDiv");

    parametro1.value = getRandomNumber();
    parametro2.value = getRandomNumber();
    parametro3.value = getRandomNumber();
    parametro4.value = getRandomNumber();

    actualizarIframeButton.addEventListener("click", () => {

        if(esValido(parametro1.value)){
            if(parametro1.value !== number1.textContent){
                number1.textContent = parametro1.value
                iframe1.src = 'https://play.pixels.xyz/pixels/share/'+parametro1.value;
            }
        }

        if(esValido(parametro2.value)){
            if(parametro2.value !== number2.textContent){
                number2.textContent = parametro2.value
                iframe2.src = 'https://play.pixels.xyz/pixels/share/'+parametro2.value;
            }
        }

        if(esValido(parametro3.value)){
            if(parametro3.value !== number3.textContent){
                number3.textContent = parametro3.value
                iframe3.src = 'https://play.pixels.xyz/pixels/share/'+parametro3.value;
            }
        }

        if(esValido(parametro4.value)){
            if(parametro4.value !== number4.textContent){
                number4.textContent = parametro4.value
                iframe4.src = 'https://play.pixels.xyz/pixels/share/'+parametro4.value;
            }
        }
    });

    randomButton.addEventListener("click", ()=>{
        if(!check1.checked){
            parametro1.value = number1.textContent = getRandomNumber();
            iframe1.src = 'https://play.pixels.xyz/pixels/share/'+parametro1.value;
        }
        if(!check2.checked){
            parametro2.value = number2.textContent = getRandomNumber();
            iframe2.src = 'https://play.pixels.xyz/pixels/share/'+parametro2.value;
        }

        if(!check3.checked){
            parametro3.value = number3.textContent = getRandomNumber();
            iframe3.src = 'https://play.pixels.xyz/pixels/share/'+parametro3.value;
        }

        if(!check4.checked){
            parametro4.value = number4.textContent = getRandomNumber();
            iframe4.src = 'https://play.pixels.xyz/pixels/share/'+parametro4.value;
        }
    })

    nextButton.addEventListener("click", ()=>{
        parametro1.value = number1.textContent = parseInt(parametro1.value)+4;
        parametro2.value = number2.textContent = parseInt(parametro2.value)+4;
        parametro3.value = number3.textContent = parseInt(parametro3.value)+4;
        parametro4.value = number4.textContent = parseInt(parametro4.value)+4;
        iframe1.src = 'https://play.pixels.xyz/pixels/share/'+parametro1.value;
        iframe2.src = 'https://play.pixels.xyz/pixels/share/'+parametro2.value;
        iframe3.src = 'https://play.pixels.xyz/pixels/share/'+parametro3.value;
        iframe4.src = 'https://play.pixels.xyz/pixels/share/'+parametro4.value;
    })

    backButton.addEventListener("click", ()=>{
        parametro1.value = number1.textContent = parseInt(parametro1.value)-4;
        parametro2.value = number2.textContent = parseInt(parametro2.value)-4;
        parametro3.value = number3.textContent = parseInt(parametro3.value)-4;
        parametro4.value = number4.textContent = parseInt(parametro4.value)-4;
        iframe1.src = 'https://play.pixels.xyz/pixels/share/'+parametro1.value;
        iframe2.src = 'https://play.pixels.xyz/pixels/share/'+parametro2.value;
        iframe3.src = 'https://play.pixels.xyz/pixels/share/'+parametro3.value;
        iframe4.src = 'https://play.pixels.xyz/pixels/share/'+parametro4.value;
    })

    actualizar.addEventListener("click" ,() => {
        number1.textContent = parametro1.value
        number2.textContent = parametro2.value
        number3.textContent = parametro3.value
        number4.textContent = parametro4.value
        iframe1.src = 'https://play.pixels.xyz/pixels/share/'+parametro1.value;
        iframe2.src = 'https://play.pixels.xyz/pixels/share/'+parametro2.value;
        iframe3.src = 'https://play.pixels.xyz/pixels/share/'+parametro3.value;
        iframe4.src = 'https://play.pixels.xyz/pixels/share/'+parametro4.value;
    }) 
    

   
};

function esValido(param) {
    if (!param) {
        return false;
    } else if (param <= 0 || param > 5000 ) {
        return false;
    } else {
        return true;
    }
}

function getRandomNumber(){
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 5000) + 1;

    return randomNumber;
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

async function copy(event){
    console.log(event.target)
    const div = event.target;    
    const text = div.textContent;
    console.log(text)
    await navigator.clipboard.writeText(text).then(() => {
        console.log(`Contenido copiado.`);
      }, () => {
        console.error("Error al copiar al portapapeles");
      });
}



obtenerParametros();