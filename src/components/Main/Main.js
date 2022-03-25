import { React, useState, useEffect } from "react";
import { Grid, Input } from "semantic-ui-react";
import "./Main.scss";
import CitiesOrd from "../CitiesOrd/CitiesOrd";


const Main = () => {
  const [Ciudades, setCiudades] = useState([]);
  const [Ciudades2, setCiudades2] = useState([]);
  async function getData() {
    const response = await fetch(
      "https://raw.githubusercontent.com/michaelx/climate/master/climate.json"
    );
    const data = await response.json();
    setCiudades(data);
    setCiudades2(data);
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Alfabeto = [];
  for (let letra in Ciudades) {
    if (Alfabeto.indexOf(Ciudades[letra].city[0]) < 0) {
      Alfabeto.push(Ciudades[letra].city[0]);
    }
  }

  const buscador = (props, e) => {
    let filtro = Ciudades2.filter((ciudad) =>
      ciudad[props].toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setCiudades(filtro);
  };

  return (
    <main>
      {Ciudades2.length > 0 ? (
        <>
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Input
                  placeholder="Paises"
                  onChange={(valor) => buscador("country", valor)}
                />
                <Input
                  placeholder="Ciudades"
                  onKeyUp={(valor) => buscador("city", valor)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="container">
            {Alfabeto.map((letra, k) => (
              <CitiesOrd key={k} k={k} letra={letra} ciudades={Ciudades} />
            ))}
          </div>
        </>
      ) : (
      <div id="preload">
           <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Input placeholder="Paises" />
              <Input placeholder="Ciudades" />
            </Grid.Column>
          </Grid.Row>
          </Grid>
          <div className="container">
            <div className="grupo">
              <div className="grupo-cabecera">
                <h2>Ciudades que empiezan con .</h2>
              </div>
              <div className="grupo-cuerpo"></div>
            </div>
            <div className="grupo">
              <div className="grupo-cabecera">
              <h2>Ciudades que empiezan con .</h2>
              </div>
              <div className="grupo-cuerpo"></div>
            </div>
            <div className="grupo">
              <div className="grupo-cabecera">
              <h2>Ciudades que empiezan con .</h2>
              </div>
              <div className="grupo-cuerpo"></div>
            </div>
            <div className="grupo">
              <div className="grupo-cabecera">
              <h2>Ciudades que empiezan con .</h2>
              </div>
              <div className="grupo-cuerpo"></div>
            </div>
            <div className="grupo">
              <div className="grupo-cabecera">
              <h2>Ciudades que empiezan con .</h2>
              </div>
              <div className="grupo-cuerpo"></div>
            </div>
            <div className="grupo">
              <div className="grupo-cabecera">
              <h2>Ciudades que empiezan con </h2>
              </div>
              <div className="grupo-cuerpo"></div>
            </div>
          </div>
        </div>
        
      )}
    </main>
  );
};

export default Main;
