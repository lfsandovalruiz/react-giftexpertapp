import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({
    data:[],
    loading: true
  });

  // un efecto no puede ser async
  useEffect(() => {
    getGifs(category)
      .then( imgs => {
        setState({
          data:imgs,
          loading: false
        });
      })
  }, [category]); 

  return state;
}

export default useFetchGifs;