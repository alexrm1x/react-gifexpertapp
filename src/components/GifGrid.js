import React /* { useState, useEffect } */ from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
/* import { getGifs } from "../helpers/getGifs"; */
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  /*   const [count, setCount] = useState(0); */

  const { data: images, loading } = useFetchGifs(category);

  //console.log(data);
  /* console.log(loading); */

  /*   const [images, setImages] = useState([]);*/

  //getGifs();

  return (
    <>
      <h3 className="animate__bounceIn">{category}</h3>
      {loading && <p className="animate__jackInTheBox">Loading...</p>}
      {/* {loading ? "Cargando...:" : "Fin de Carga"} */}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
