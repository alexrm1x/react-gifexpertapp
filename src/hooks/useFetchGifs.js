import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    //getGifs(category).then((imgs) => setImages(imgs)); //si la función y el argumento es el mismo, se pueden obviar

    getGifs(category).then((imgs) => {
      console.log(imgs);
      setState({
        data: imgs,
        loading: false,
      });
    }); //así
  }, [category]);

  /*   setTimeout(() => {
    setstate({
      data: [123, 456, 789, 0],
      loading: false,
    });
  }, 3000); */

  return state;
};
