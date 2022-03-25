import { Flag, List } from "semantic-ui-react";
import "./CitiesOrd.scss";
import { Link } from 'react-router-dom'

 const CitiesOrd = (props) => {
  return (
    <div className="grupo" key={props.k}>
      <div className="grupo-cabecera">
        <h2>Ciudades que empiezan con {props.letra}</h2>
      </div>
      <div className="grupo-cuerpo">
          {props.ciudades
            .filter((ciudad) => ciudad.city[0] === props.letra)
            .map((ciudad , k) => (
              <div className="pais" key={k}>
                <Flag name={ciudad.country.toLowerCase() === "hawaii"? "us" : ciudad.country.toLowerCase() } />
                <List link>
                  <List.Item key={ciudad.id} className='blanco'>
                  <Link to={"/ciudad/"+ciudad.city}>{ciudad.city}</Link>
                  </List.Item>
                </List>
              </div>
              
            ))}
      </div>
    </div>
  );
}

export default CitiesOrd;
