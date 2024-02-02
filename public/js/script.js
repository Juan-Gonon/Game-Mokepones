
const btnMascota = document.getElementById('btn-select');
const reiniciar = document.getElementById('btn-reiniciar');
const sectionAtaque = document.getElementById('select__ataque');
const sectionMascota = document.getElementById('select__mascota');

/**Constante mascotas */

const spanMascotaJugador = document.getElementById('mascota__jugador');


/** seleccionar mascota */
const mascota__enemigo = document.getElementById('mascota__enemigo');

/**conbate */

const spanVidasJugador = document.getElementById('vidas__jugador');
const spanVidasEnemigo = document.getElementById('vidas__enemigo');

/**Mensaje */
const mensajesJugador = document.getElementById('ataque__Judador');
const mensajesAtaque = document.getElementById('ataque__Enemigo');

/**Crear mensaje*/
const mensajes = document.getElementById('resultado');

//______________ SECCION NUEVA VER MAPA CON CANVAS

const sectionMapa = document.getElementById('ver__mapa');
const mapa = document.getElementById('mapa')



/**Crear mensaje Final*/

// let atque_Jugador;
let ataque_enemigo = [];
let vidas_jugador = 3;
let vidas_Enemigo = 3;

/**Nuevas variables para las victorias Jugador y enemigo */

let victoriasEnemigo = 0;
let victoriasJugador = 0;

/**contenedor para guardar las trjetas creadas en el for Each, capipepo, etc */

const contenTarjetas = document.getElementById('content__tarjetas');
const btns_ataques = document.getElementById('btns_ataques');

let inputRatigueya;
let inputCapipepo;
let inputHipodoge;
let inputTucan;
let inputPydos;
let inputLangosta;

/** Contenedores para forEach de ataques */

let btnFuego;
let btnAgua ;
let btnTierra;
let btns = [];

/**Nueva variable al para el forEach */
let opcionMokepons;
let opcionAtaques;
let mascotaJugador;

// ESTO PARA LA SECCION DE CANVAS

let lienzo = mapa.getContext('2d');
let mapaBackground = new Image();
mapaBackground.src = 'img/mokemap.png';
let mascotaJugadorObjeto;

let alturaBuscamos;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoMapa = 350;

if(anchoDelMapa > anchoMaximoMapa){
    anchoDelMapa = anchoMaximoMapa - 20;
}
alturaBuscamos = anchoDelMapa * 600 / 800;
mapa.width = anchoDelMapa;
mapa.height = alturaBuscamos;



class Mokepon{
    constructor(
        nombre,
        foto,
        vida,
        fotoMapa,
        // x = 10,
        // y = 10
        id = null
    ){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        //ataques no se coloco en contructor porque se va a llenar con push
        this.ataques = [];
        //CANVAS
        this.ancho = 40;
        this.alto = 40;
        this.x = aleatorio(0, mapa.width - this.ancho);
        this.y = aleatorio(0, mapa.height - this.alto);

        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
        this.id = id;
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

/**Recorriendo los datos de clase */

let hipodoge = new Mokepon('Hipodogue', 'img/hipwebp.webp', 5, 'img/hipodoge.png');
let capipepo = new Mokepon('Capipepo', 'img/rat.png', 5, 'img/capipepo.png');
let ratigueya = new Mokepon('Ratigueya', 'img/rat.webp', 5, 'img/ratigueya.png')
let tucan = new Mokepon('Tucan', 'img/mokepons_tucapalma.png', 5, 'img/y3s277X.png')
let pydos = new Mokepon('Pydos', 'img/mokepons_pydos.png', 5, 'img/LWkctTb.png')
let langosta = new Mokepon('Langostelvis', 'img/mokepons_langostelvis.png', 5, 'img/iaJhdyY.png')
let mokepons = []


// let hipodogeEnemigo = new Mokepon('Hipodogue', 'img/hipwebp.webp', 5, 'img/hipodoge.png');
// let capipepoEnemigo = new Mokepon('Capipepo', 'img/rat.png', 5, 'img/capipepo.png');
// let ratigueyaEnemigo = new Mokepon('Ratigueya', 'img/rat.webp', 5, 'img/ratigueya.png')
// let tucanEnemigo = new Mokepon('Tucan', 'img/mokepons_tucapalma.png', 5, 'img/y3s277X.png')
// let pydosEnemigo= new Mokepon('Pydos', 'img/mokepons_pydos.png', 5, 'img/LWkctTb.png')
// let langostaEnemigo = new Mokepon('Langostelvis', 'img/mokepons_langostelvis.png', 5, 'img/iaJhdyY.png')

/**insertando objetos en el arreglo del objeto hipodoge, capipepo, etc */
mokepons.push(hipodoge, capipepo, ratigueya, tucan, pydos, langosta);

const HipodogueAtaques = [
    {nombre: '☘️', id: 'btn-tierra'},
    {nombre: '☘️', id: 'btn-tierra'},
    {nombre: '☘️', id: 'btn-tierra'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🔥', id: 'btn-fuego'}
]

hipodoge.ataques.push(...HipodogueAtaques);
// hipodogeEnemigo.ataques.push(...HipodogueAtaques);

const CapipepoAtaques = [
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '☘️', id: 'btn-tierra'}
]


capipepo.ataques.push(...CapipepoAtaques)
// capipepoEnemigo.ataques.push(...CapipepoAtaques)

const ratigueyaAtaques = [
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '☘️', id: 'btn-tierra'},
]
ratigueya.ataques.push(...ratigueyaAtaques)
// ratigueyaEnemigo.ataques.push(...ratigueyaAtaques)

const TucanAtaques = [
    {nombre: '☘️', id: 'btn-tierra'},
    {nombre: '☘️', id: 'btn-tierra'},
    {nombre: '☘️', id: 'btn-tierra'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🔥', id: 'btn-fuego'}
]

tucan.ataques.push(...TucanAtaques)
// tucanEnemigo.ataques.push(...TucanAtaques)

const PydosAtaques = [
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '☘️', id: 'btn-tierra'}
]

pydos.ataques.push(...PydosAtaques)
// pydosEnemigo.ataques.push(...PydosAtaques)

const LangostaAtaques = [
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '☘️', id: 'btn-tierra'}
]

langosta.ataques.push(...LangostaAtaques)
// langostaEnemigo.ataques.push(...LangostaAtaques)

// console.log (mokepons)




function iniciarJuego(){

    sectionAtaque.style.display = 'none';
    reiniciar.style.display = 'none';
    sectionMapa.style.display = 'none';

    mokepons.forEach((i) =>{
        // opcionMokepons = i.nombre;
        // console.log(opcionMokepons)

        // /*templates literarios */
        opcionMokepons = `
        <input type="radio" id=${i.nombre} name="mascota">
        <label for=${i.nombre} class="tarjeta_mokepon">
            <span>${i.nombre}</span>
            <img src=${i.foto} alt=${i.nombre}>
        </label>
        `
        // console.log(opcionMokepons)



        contenTarjetas.innerHTML += opcionMokepons;

        // console.log(contenTarjetas)

         inputRatigueya = document.getElementById('Ratigueya');
         inputCapipepo = document.getElementById('Capipepo');
         inputHipodoge = document.getElementById('Hipodogue');
         inputTucan = document.getElementById('Tucan')
         inputPydos = document.getElementById('Pydos')
         inputLangosta = document.getElementById('Langostelvis');


    })

    // console.log(mokepons)

    btnMascota.addEventListener('click', function(){

        if(inputHipodoge.checked){
            // console.log(inputHipodoge.checked )
            spanMascotaJugador.innerHTML = inputHipodoge.id;
            // sectionAtaque.style.display = 'flex';
            sectionMascota.style.display = 'none';

            sectionMapa.style.display = 'flex';

            mascotaJugador = inputHipodoge.id;


        }else if(inputCapipepo.checked){
            spanMascotaJugador.innerHTML = inputCapipepo.id;
            // sectionAtaque.style.display = 'flex';
            sectionMascota.style.display = 'none';
            sectionMapa.style.display = 'flex'

            mascotaJugador = inputCapipepo.id;

        }else if(inputRatigueya.checked){
            spanMascotaJugador.innerHTML = inputRatigueya.id;
            // sectionAtaque.style.display = 'flex';
            sectionMascota.style.display = 'none';
            sectionMapa.style.display = 'flex'

            mascotaJugador = inputRatigueya.id;

        }else if(inputTucan.checked){
            spanMascotaJugador.innerHTML = inputTucan.id;
            // sectionAtaque.style.display = 'flex';
            sectionMascota.style.display = 'none';
            sectionMapa.style.display = 'flex'

            mascotaJugador = inputTucan.id;

        }else if(inputPydos.checked){
            spanMascotaJugador.innerHTML = inputPydos.id;
            // sectionAtaque.style.display = 'flex'
            sectionMascota.style.display = 'none'
            sectionMapa.style.display = 'flex'

            mascotaJugador = inputPydos.id;

        }else if(inputLangosta.checked){
            spanMascotaJugador.innerHTML = inputLangosta.id;
            // sectionAtaque.style.display = 'flex'
            sectionMascota.style.display = 'none'
            sectionMapa.style.display = 'flex'

            mascotaJugador = inputLangosta.id;
        }
        else{
            alert('No ha seleccionado ninguna mascota')
            // sectionAtaque.style.display = 'none'
            //return
        }
        //backend
        seleccionarMokepon(mascotaJugador);
        
        extraerAtaques(mascotaJugador);

        iniciarMapa()

    });


    reiniciar.addEventListener('click', function(){
        location.reload()
    })

    //Nueva Funcion Backend
    unirseAlJuego();
}

//funcion backend

let jugadorId = null;
let enemigoId = null;


function unirseAlJuego(){
    //La respuesta es asincrona: Porque tarda en responder unos segundos
    //Una vez que llegue se puede manejar esos datos de respuesta por una funcion que es un COLLBACK por su metodo .them
    fetch('http://192.168.1.46:8080/unirse').then(
        function(res){
            console.log(res)
            if(res.ok){
                res.text().then(
                    function(respuesta){
                        jugadorId = respuesta;
                        console.log(jugadorId)
                    }
                )
            }
        }
    )
}


function seleccionarMokepon(mascotaJ){
    console.log(mascotaJ)
    fetch(`http://192.168.1.46:8080/mokepon/${jugadorId}`,{ 
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            mokepon: mascotaJ
        })
    })
}

let mokeponesEnemigos = [];


function enviarPicision(x, y){
    fetch(`http://192.168.1.46:8080/mokepon/${jugadorId}/posicion`, {
        method : "post",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if(res.ok){
            res.json().then(
                function({enemigos}){
                console.log(enemigos)
                

                mokeponesEnemigos = enemigos.map((i)=>{
                    let mokeponEnemigo = null;
                    const mokeponNombre = i.mokepon.nombre || "";

                    if(mokeponNombre === "Hipodogue"){
                        mokeponEnemigo = new Mokepon('Hipodogue', 'img/hipwebp.webp', 5, 'img/hipodoge.png', i.id);
                    }else if (mokeponNombre === "Capipepo"){
                        mokeponEnemigo = new Mokepon('Capipepo', 'img/rat.png', 5, 'img/capipepo.png', i.id);
                    }else if(mokeponNombre === "Ratigueya"){
                        mokeponEnemigo = new Mokepon('Ratigueya', 'img/rat.webp', 5, 'img/ratigueya.png', i.id)
                    }

                    mokeponEnemigo.x = i.x
                    mokeponEnemigo.y = i.y

                    console.log(mokeponEnemigo);

                    return mokeponEnemigo
                })
                // let tucanEnemigo = new Mokepon('Tucan', 'img/mokepons_tucapalma.png', 5, 'img/y3s277X.png')
                // let pydosEnemigo= new Mokepon('Pydos', 'img/mokepons_pydos.png', 5, 'img/LWkctTb.png')
                // let langostaEnemigo = new Mokepon('Langostelvis', 'img/mokepons_langostelvis.png', 5, 'img/iaJhdyY.png')

            })
        }
    })
}




/**funcion extraer ataque */

function extraerAtaques(mascotaJugador){
    let ataques;

    for(let i=0; i<mokepons.length; i++){
        // console.log(ataques)
        if(mascotaJugador === mokepons[i].nombre){
            ataques = mokepons[i].ataques;
            // console.log(ataques)
        }
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){

    ataques.forEach((i)=>{

            //console.log(i.id)
            opcionAtaques = `
            <button id=${i.id} class="btnsAtaques BAtaque">${i.nombre}</button>
            `

            btns_ataques.innerHTML += opcionAtaques
    })

    btnFuego = document.getElementById('btn-fuego');
    btnAgua = document.getElementById('btn-agua');
    btnTierra = document.getElementById('btn-tierra');
    btns = document.querySelectorAll('.BAtaque');


}

let ataqueJugador = [];

//Hasta aqui ya hay dos arreglos que guarda la secuencia del jugador y la del enemigo


function secuenciaAtaques(){
    btns.forEach((i)=>{
        i.addEventListener('click', (e)=>{
            // console.log(e.target.textContent)
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                i.style.background = '#112f58';
                //desactivar el boton
                i.disabled = true;

            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                i.style.background = '#112f58';
                i.disabled = true;
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                i.style.background = '#112f58';
                i.disabled = true;
            }
                //Nuevo llamando a ataque del enemigo
                //ataqueAleatorioEnemigo();
                if(ataqueJugador.length === 5){
                    enviarAtaques()
                }
               
        })


    })


}


function enviarAtaques(){
    fetch(`http://192.168.1.46:8080/mokepon/${jugadorId}/ataques`, {
        method : "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques : ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50);
}

function obtenerAtaques(){
    fetch(`http://192.168.1.46:8080/mokepon/${enemigoId}/ataques`)
    .then(
        function(res){
            if(res.ok){
                res.json().then(
                    function(respuesta){
                        if (respuesta.ataques.length === 5){
                            ataque_enemigo = respuesta.ataques
                            combate()
                            console.log(ataque_enemigo)
                        }
                    }
                )
            }
        }
    )
}

/* -------------------*/



function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let ataqueMokepones = [];

function enemigoo(ene){

    //Mandar a llamar en ataque

    console.log(ene.nombre)

    // mascota__enemigo.innerText = mokepons[ataque__aleatorio].nombre;
    mascota__enemigo.innerText = ene.nombre;
    // ataqueMokepones = mokepons[ataque__aleatorio].ataques
    ataqueMokepones = ene.ataques;

    console.log(ataqueMokepones);
    secuenciaAtaques()
    // console.log(mascota__enemigo);
}

/**Mejorando ataque de enemgio */

function ataqueAleatorioEnemigo(){
    console.log(ataqueMokepones)
    let ataque__aleatorio = aleatorio(0, ataqueMokepones.length -1);

        // console.log(ataqueMokepones[ataque__aleatorio].nombre)

    if(ataqueMokepones[ataque__aleatorio].nombre === '🔥'){
        ataque_enemigo.push('FUEGO')
    }else if(ataqueMokepones[ataque__aleatorio].nombre === '💧'){
        ataque_enemigo.push('AGUA')
    }else{
        ataque_enemigo.push('TIERRA')
    }
    console.log(ataque_enemigo)


|//nueva funcion parano llamar a combate() aqui
  iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate()
    }

}

/**------------------------ */

let indexAtaqueJugador = '';
let indexAtaqueEnemigo = '';


function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador];
    // console.log(indexAtaqueJugador)
    indexAtaqueEnemigo = ataque_enemigo[enemigo]

}
function combate(){
    clearInterval(intervalo); //terminando de hacer peticiones al backend

    for(let i=0; i<ataqueJugador.length; i++){
       if(ataqueJugador[i] === ataque_enemigo[i]){
            indexAmbosOponentes(i, i)
            crearMensaje('EMPATE XD')
       }else if(ataqueJugador[i] === 'FUEGO'  && ataque_enemigo[i] === 'TIERRA'){
            indexAmbosOponentes(i, i)
            crearMensaje('GANASTE (- _ -)');
            victoriasJugador++
            spanVidasJugador.innerText = victoriasJugador;

       }else if(ataqueJugador[i] === 'AGUA' && ataque_enemigo[i] === 'FUEGO'){
        indexAmbosOponentes(i, i)
        crearMensaje('GANASTE (- _ -)');
        victoriasJugador++
        spanVidasJugador.innerText = victoriasJugador;

       }else if(ataqueJugador[i] === 'TIERRA' && ataque_enemigo[i] == 'AGUA'){
        indexAmbosOponentes(i, i)
        crearMensaje('GANASTE (- _ -)');
        victoriasJugador++
        spanVidasJugador.innerText = victoriasJugador;

       }else{
            indexAmbosOponentes(i, i)
            crearMensaje('PERDISTE');

            victoriasEnemigo++;
            spanVidasEnemigo.innerText = victoriasEnemigo
       }
    }



    revisarVidas()

}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal('Esto fue un empate')
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal('FELICITACIONES! Ganastes')
    }else{
        crearMensajeFinal('Lo siento, PERDISTE')
    }
}

function crearMensaje(resultado){

    // let notificacion = document.createElement('p');
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');


    // parrafo.innerText = 'Tu Mascota ataco con ' + atque_Jugador + ', la Mascota del enemigo atacó con ' + ataque_enemigo + ', ' + resultado;

    mensajes.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;

    // console.log(nuevoAtaqueEnemigo)

    mensajesJugador.appendChild(nuevoAtaqueJugador)
    mensajesAtaque.appendChild(nuevoAtaqueEnemigo)

    // console.log(mensajes)
}

function crearMensajeFinal(resultadoFinal){


    mensajes.innerHTML = resultadoFinal;

    reiniciar.style.display = 'block';
}

/**FUCNCIONES PARA CANVAS */

let intervalo;


function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    // console.log(mascotaJugadorObjeto.x)
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;

    lienzo.clearRect(0,0, mapa.width, mapa.height);
    lienzo.drawImage(
        mapaBackground,
        0,0,
        mapa.width,
        mapa.height
    )

        mascotaJugadorObjeto.pintarMokepon()

        //backend
        enviarPicision(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
       //------------
        // hipodogeEnemigo.pintarMokepon()
        // capipepoEnemigo.pintarMokepon()
        // ratigueyaEnemigo.pintarMokepon()
        mokeponesEnemigos.forEach((i)=>{
            i.pintarMokepon()
            revisarColision(i)
        })
        // tucanEnemigo.pintarMokepon()
        // pydosEnemigo.pintarMokepon()
        // langostaEnemigo.pintarMokepon()

        // console.log(hipodoge)

        // if(mascotaJugadorObjeto.velocidadX != 0 || mascotaJugadorObjeto.velocidadY != 0){
        //     revisarColision(hipodogeEnemigo)
        //     // console.log(hipodogeEnemigo)
        //     revisarColision(capipepoEnemigo)
        //     revisarColision(ratigueyaEnemigo)
        //     revisarColision(pydosEnemigo)
        //     revisarColision(tucanEnemigo)
        //     revisarColision(langostaEnemigo)
        //}

}

function moverRight(){
    mascotaJugadorObjeto.velocidadX = 5;
}
function moverTop(){

    mascotaJugadorObjeto.velocidadY = -5;
}
function moverLeft(){

    mascotaJugadorObjeto.velocidadX = -5;
}
function moverBottom(){

    mascotaJugadorObjeto.velocidadY = 5;
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(e){
    switch(e.key){
        case 'ArrowUp':
            moverTop();
            break;
        case 'ArrowDown':
            moverBottom();
            break;
        case 'ArrowLeft':
            moverLeft();
            break;
        case 'ArrowRight':
            moverRight();
            break;
        default:
            break;
    }
}

function iniciarMapa(){

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto)


    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla);
    window.addEventListener('keyup', detenerMovimiento)
}


function obtenerObjetoMascota(masJu){
    // console.log(masJu)

    for(let i=0; i<mokepons.length; i++){
        // console.log(ataques)
        if(masJu === mokepons[i].nombre){
            return mokepons[i];
            // console.log(mokepons[i])
        }
    }
}

//COLISION

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const izquierdaEnemigo = enemigo.x

    const arribaMascota =
        mascotaJugadorObjeto.y;
    const abajoMascota =
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
    const derechaMascota =
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaMascota =
        mascotaJugadorObjeto.x


    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo  ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }else{
        // alert('Hay colision ' + enemigo.nombre)
        console.log('se detecto una colision');
        enemigoId = enemigo.id
        detenerMovimiento()
        clearInterval(intervalo)
        sectionAtaque.style.display = 'flex';
        sectionMapa.style.display = 'none'
        enemigoo(enemigo)
       
    }
}






window.addEventListener('load', iniciarJuego)








