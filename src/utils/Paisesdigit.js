import {useState , useEffect} from 'react';
import Flag from 'react-world-flags'

const Paisesdigit= (props) =>{
  const [Data, setData] = useState([]);
  async function getData() {
    const response = await fetch(
      "https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json"
    );
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 const pais = props.pais;
 const rusia = pais === 'Russia' ? "Russian Federation" : null ;
 const vietnan = pais === 'Vietnam' ? "Viet Nam" : null ;
 const hawaii = pais === 'Hawaii' ? "United States" : null ;
 const filtro = Data.filter(ciudad => ciudad.Name === pais || ciudad.Name === rusia || ciudad.Name === vietnan|| ciudad.Name === hawaii);
 console.log(pais)

 return <>
   {filtro.map((bandera , k) => <Flag key={k} code={bandera.Code} height='70'/>)}
 </>
}

export default Paisesdigit
