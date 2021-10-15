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

  const newLocal = <div>
    <iframe
      width="640"
      height="360"
      frameborder="0"
      src="https://mega.nz/embed/XBBhDaJQ#zkvTPbo52uyyxMM93swgQWgKEorfBUcOQCI1RkElUaw"
      allowfullscreen
    >video</iframe>
  </div>;
  return (
    <div className={styles.searchBar}>
      <input
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
      {newLocal}  
      <button className={styles.button} onClick={handleOnSearch}>
        <IoAdd />
      </button>
    </div>
  );
}
