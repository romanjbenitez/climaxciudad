import "./ClimaOrd.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faSnowflake, faTint } from "@fortawesome/free-solid-svg-icons";

const ClimaOrd = (props) => {
  return (
    <div className="Clima">
      <div key={props.k} className="Clima-cuerpo">
        <div className="mes"><p>{props.mes}</p></div>
        <div className="temp">
          <FontAwesomeIcon
            icon={props.Dsecos > props.Dnevados ? faSun : faSnowflake}
          />
          <p>
            {props.max}
            <span>/{props.min}</span>
          </p>
        </div>
        <div className="dias">
          <p>Cantidad de dias secos:{props.Dsecos}</p>
          <p>Cantidad de dias nevados: {props.Dnevados}</p>
        </div>
        <div className="lluvia">
          <p>Total de lluvia {props.lluvia} <FontAwesomeIcon icon={faTint} /></p>{" "}
        </div>
      </div>
    </div>
  );
};

export default ClimaOrd;
