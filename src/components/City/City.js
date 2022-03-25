import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClimaOrd from "../ClimaOrd/ClimaOrd";
import Paisesdigit from "../../utils/Paisesdigit";
import Flag from "react-world-flags";
import "../CitiesOrd/CitiesOrd.scss";
import "./City.scss";

const City = () => {
  const [Data, setData] = useState([]);
  let parametros = useParams();
  async function getData() {
    const response = await fetch(
      "https://raw.githubusercontent.com/michaelx/climate/master/climate.json"
    );
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Ciudad = Data.filter((ciudad) => ciudad.city === parametros.city);
  const Meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril ",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div id="container">
      {Ciudad.length > 0 ? (
        Ciudad.map((a, k) => (
          <div key={k}>
            <div className="titulo">
              <Paisesdigit pais={a.country} />
              <h1>{a.city}</h1>
            </div>
            {a.monthlyAvg.map((meses, s) => (
              <ClimaOrd
                k={s}
                mes={Meses[s]}
                max={meses.high}
                min={meses.low}
                Dsecos={meses.dryDays}
                Dnevados={meses.snowDays}
                lluvia={meses.rainfall}
                key={s}
              />
            ))}
          </div>
        ))
      ) : (
        <div>
          <div className="titulo">
            <Flag code={"ar"} height="70" />
            <h1>Ciudad</h1>
          </div>
          <div className="Clima">
            <div className="Clima-cuerpo">
              <div className="mes">
                <p>.</p>
              </div>
            </div>
          </div>
          <div className="Clima">
            <div className="Clima-cuerpo">
              <div className="mes">
                <p>.</p>
              </div>
            </div>
          </div>
          <div className="Clima">
            <div className="Clima-cuerpo">
              <div className="mes">
                <p>.</p>
              </div>
            </div>
          </div>
          <div className="Clima">
            <div className="Clima-cuerpo">
              <div className="mes">
                <p>.</p>
              </div>
            </div>
          </div>
          <div className="Clima">
            <div className="Clima-cuerpo">
              <div className="mes">
                <p>.</p>
              </div>
            </div>
          </div>
          <div className="Clima">
            <div className="Clima-cuerpo">
              <div className="mes">
                <p>.</p>
              </div>
            </div>
          </div>
          <div className="Clima">
            <div className="Clima-cuerpo">
              <div className="mes">
                <p>.</p>
              </div>
            </div>
          </div>
          <div className="Clima">
            <div className="Clima-cuerpo">
              <div className="mes">
                <p>.</p>
              </div>
            </div>
          </div>
          <div className="Clima">
            <div className="Clima-cuerpo">
              <div className="mes">
                <p>.</p>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};
export default City;
