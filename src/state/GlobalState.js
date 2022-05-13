import React, { createContext, useReducer, useEffect} from 'react';
import  RootReducer from './RootReducer';

const startState = {
  mylist: localStorage.getItem("mylist") ? JSON.parse(localStorage.getItem("mylist")) : [],
  mylist2: localStorage.getItem("mylist2") ? JSON.parse(localStorage.getItem("mylist2")) : [],
  media_info: localStorage.getItem("media_info") ? JSON.parse(localStorage.getItem("media_info")) : [],
};

export const GlobalContext = createContext(startState); 

export const GlobalProvider = (props) => {

  const [state, dispatch] = useReducer(RootReducer, startState);

  useEffect(() => {
    localStorage.setItem("mylist", JSON.stringify(state.mylist));
    localStorage.setItem("mylist2", JSON.stringify(state.mylist2));
    localStorage.setItem("media_info", JSON.stringify(state.media_info));
  }, [state]);


  const addingtoMyList = (movie) => {
    dispatch({
      type: "ADD_MEDIA", payload: movie
    });
  };
  
  const removingfromMyList = (id) => {
    dispatch({
      type: "REMOVE_MEDIA", payload: id
    });
  };

  const addingtoMyList2 = (movie) => {
    dispatch({
      type: "ADD_MEDIA_2", payload: movie
    });
  };

  const removingfromMyList2 = (id) => {
    dispatch({
      type: "REMOVE_MEDIA_2", payload: id
    });
  };
  
  return (

    <GlobalContext.Provider value={{
      
      mylist: state.mylist,
      mylist2: state.mylist2,
      media_info: state.media_info,
      addingtoMyList,
      removingfromMyList,
      removingfromMyList2,
      addingtoMyList2,
    }}

  
    >
      {props.children}
    </GlobalContext.Provider>
    
    
  );
};


