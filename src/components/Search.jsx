import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.targe.value);
  };

  return (
    <>
      <div>
        Cari artikel: <input onChange={onSearchChange}></input>
      </div>
      <small>Ditemukan 0 Data dengan pencarian kata: {search}</small>
    </>
  );
}

export default Search;
