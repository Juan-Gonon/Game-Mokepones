const express = require("express")
const cors = require("cors")

//express como si fuera una funcion hace una copio o instancia del servidor que se va a utilizar
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

//lista de jugadores
const jugadores = []

//clase jugador
class Jugador{
    constructor(id){
        this.id = id;
    }
    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
    actualizarPosicion(x,y){
        this.x = x;
        this.y = y;
    }
    asignarAtaques(ataques){
        this.ataques = ataques
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre;
    }
}

app.get("/unirse", (req, res)=>{
    const id = `${Math.random()}` //template string: numero se convierte a texto
    const jugador = new Jugador(id);

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*") //permite todo del cors
    res.send(id);
})

//Enpoind de servicio POST

app.post("/mokepon/:jugadorId", (req, res)=>{
    const jugadorId = req.params.jugadorId || "";

    const nombre = req.body.mokepon || "";
    const mokepon = new Mokepon(nombre);
    
    const jugadorIndex = jugadores.findIndex((jugador) =>{
        return jugadorId === jugador.id
    })

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }

    //console.log(jugadores);
    //console.log(jugadorId);
    // console.log(mokepon)
    res.end();
    
})
//enemigo

app.post("/mokepon/:jugadorId/posicion", (req, res)=>{
    const jugadorId = req.params.jugadorId || "";
    const x = req.body.x || 0;
    const y = req.body.y || 0;

    const jugadorIndex = jugadores.findIndex((jugador) =>{
        return jugadorId === jugador.id
    })

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((enemigo)=>{
        return jugadorId !== enemigo.id;
    })

    //console.log(enemigos)

    res.send({
        enemigos
    })
})

//Ataques:

app.post("/mokepon/:jugadorId/ataques", (req, res)=>{
    const jugadorId = req.params.jugadorId || "";

    const ataques = req.body.ataques || [];

    
    const jugadorIndex = jugadores.findIndex((jugador) =>{
        return jugadorId === jugador.id
    })

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }

    console.log(jugadores);
    //console.log(jugadorId);
    // console.log(mokepon)
    res.end();
    
})

app.get("/mokepon/:jugadorId/ataques", (req, res)=>{
    const jugadorId = req.params.jugadorId || "";

    const jugador = jugadores.find((jugador)=>{ //find recibe una funcion y devuelve verdadero o falso
        return jugador.id === jugadorId
    })

    res.send({
        ataques: jugador.ataques || []
    })
})


//iniciar el servidor
app.listen(8080, ()=>{
    console.log('El servidor ya inicio')
})
