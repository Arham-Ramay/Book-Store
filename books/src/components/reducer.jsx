const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        loading: false,
        myData: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        myData: [],
        error: "something went wrong",
      };
    case "SEARCH-POST":
      return {
        ...state,
        query: action.query,
        myData: state.myData.filter((post) =>
          post.title.toLowerCase().includes(action.query.toLowerCase())
        ),
        error: "",
      };
    case "REMOVE_POST":
      return {
        ...state,
        loading: false,
        myData: state.myData.filter((post) => post.id !== action.payload),
        error: "",
      };
    default:
      return state;
  }
};
export default reducer;
