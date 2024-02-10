import React from 'react';
import '../App.css';
import { Carrousel } from './Carrousel.js';
import CountdownTimer from './Cuenta.js';
import bienvenda from '../Assets/images/anillo.jpg';
import 'typeface-great-vibes';
import song from "../Assets/audio/song.mp3";
import 'typeface-caveat';
import 'typeface-alex-brush';
import 'animate.css';
import anillo from "../Assets/images/anilloF.png";
import LazyLoadComponent from './LazyLoads.js';
import data from "../Assets/Data/invitados.json"
import { Galery } from './Galery.js';
function Home() {
    var dominio=window.location.href
    console.log(dominio)
console.log("hola")
  return (
    <div className="App">
            <img className='imgBienv' src={bienvenda} alt="Bienvenida"></img>
        
            <div className='textBienv'>
              <h1>Nos casamos</h1>
              <h2>CINTHYA & JOSUE</h2>
            </div>
            <h3 className='textSong'>Nuestra cancion</h3>
            <audio controls>
                <source src={song} type="audio/mpeg" />
            </audio>
            <p className='inviteText'>Estas invitado!</p>
            <p className='textInv'>Queremos que seas parte de este momento tan especial</p>
            <CountdownTimer/>
        <LazyLoadComponent>
            <img src={anillo} className='anillo animate__animated animate__flip' alt="Anillo"/>
        </LazyLoadComponent>
            <Carrousel/>
        <div className='divFecha'>
        
          <p>DISCURSO</p>
          <div>
            <p className="dateDisc">21 ABR</p>
            <div className='divDividir'></div>
            <p className="dateDisc">4:00 pm</p>
          </div>
          <a href="https://maps.app.goo.gl/d8SrSb7Qc8oniZAaA" className='ubiDisc'>VER UBICACION</a>
        </div>
        <Galery/>
    </div>
  );
}

export default Home;
