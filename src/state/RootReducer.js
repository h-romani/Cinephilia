export default (state, action) => {

  switch (action.type) {
    case "ADD_MEDIA":
      return {
        ...state,
        mylist: [action.payload, ...state.mylist],
      };
    
    case "REMOVE_MEDIA":
      return {
        ...state,
        mylist: state.mylist.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "ADD_MEDIA_2":
      return {
        ...state,
        mylist2: [action.payload, ...state.mylist2],
      };
    
    case "REMOVE_MEDIA_2":
      return {
        ...state,
        mylist2: state.mylist2.filter(
          (movie) => movie.id !== action.payload
        ),
      };

  default :
    return state;
  }

}