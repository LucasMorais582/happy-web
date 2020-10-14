import React from 'react';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import markerImg from '../images/marker.svg';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={markerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita</p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>

      <Map center={[-22.9246072,-43.3777264]} zoom={15} style={{ width: '100%', height: '100%'}}>
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}/@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
