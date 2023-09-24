import React, { createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

let initialState = {
  loading: true,
  myData: [],
  query: "",
  error: "",
};

export const BioDataContext = createContext();
const ContextPart = ({ children }) => {
  //usereducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //calling api
  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=20")
      .then((response) => {
        dispatch({
          type: "FETCH_DATA",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
          payload: "got error",
        });
      });
  }, []);
  //searchbar
  const SearchPost = (search) => {
    dispatch({ type: "SEARCH-POST", query: search });
  };

  const removePost = (postId) => {
    dispatch({
      type: "REMOVE_POST",
      payload: postId,
    });
  };

  return (
    <>
      <BioDataContext.Provider value={{ state, SearchPost, removePost }}>
        {children}
      </BioDataContext.Provider>
    </>
  );
};

export default ContextPart;
