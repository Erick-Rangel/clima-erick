import React from "react";
import styles from "./SearchBar.module.css";
import { IoAdd } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [search, setSearch] = React.useState("");
  const handleOnSearch = () => {
    onSearch(search);
    setSearch("");
  };

  return (
    <div className={styles.searchBar}>
<<<<<<< HEAD
              <NavLink to="/"> 
        <span className={styles.head}> <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block aling-top" alt=""/>
        Henry - Weather App
        
      </span>
         </NavLink>         
        <input   
=======
      <input
>>>>>>> adcf17b1e0ff9049c02e97019a6162c2f257051b
        className={styles.input}
        id="searchInput"
        placeholder="Agregar una cuidad..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleOnSearch();
        }}
      />
      <button className={styles.button} onClick={handleOnSearch}>
        <IoAdd />
      </button>
<div>
        <iframe
          width="640"
          height="360"
          frameborder="0"
          src="https://mega.nz/embed/XBBhDaJQ#zkvTPbo52uyyxMM93swgQWgKEorfBUcOQCI1RkElUaw"
          allowfullscreen
        >video</iframe>
        </div>  
    </div>
  );
}
