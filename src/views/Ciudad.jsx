import React from "react";
import fetchCityById from "../services/fetchCityById";
import styles from "./City.module.css"

export default function Ciudad({ id, onBack}) {
  const [city, setCity] = React.useState();
  React.useEffect(() => {
    fetchCityById (id, setCity);
  }, [id, setCity]);
 /*  if(city === undefined) return <h2>cargando...</h2>
  else if(city === null) return <h2>Ciudad no encontrada</h2>
  return <div>{city.name}</div>; */
  return(
      <div className={styles.citi}>
        <button onclick={onBack}>Atras</button>
          {city === undefined && <h2>cargando...</h2> }
          {city === null && <h2>Ciudad no encontrada</h2>}
          {city && (
          <div className={styles.detail}>
          <div className={styles.prop}>
            <label>Ciudad:</label>
          <span>{city.name}</span>
          </div>
          <div className={styles.prop}>
            <label>T max:</label>
          <span>{city.max}</span>
          </div>
          <div className={styles.prop}>
            <label>T min:</label>
          <span>{city.min}</span>
          </div>
          </div>
          )}
      </div>
  );
}


