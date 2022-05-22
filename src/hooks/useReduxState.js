import { useContext, useEffect, useState } from "react";
import ReduxContext from "../contexts/ReduxContext";

export default function useReduxState() {
  const store = useContext(ReduxContext)
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      setState(store.getState())
      
    })

    return () => {
      unSubscribe();
    } 
  }, [store]);

  return state;
  
}