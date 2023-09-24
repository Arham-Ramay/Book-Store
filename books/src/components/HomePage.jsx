import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { BioDataContext } from "./ContextPart";
import { Link } from "react-router-dom"; // Import Link

const HomePage = () => {
  const { state, removePost } = useContext(BioDataContext);
  const handleDelete = (postId, e) => {
    e.preventDefault();
    removePost(postId);
  };

  if (state.loading) {
    return <div>...loading</div>;
  }
  if (state.error) {
    return <div>{state.error}</div>;
  }
  return (
    <>
      <div className="container">
        <SearchBar />
        <div className="container mt-4">
          <div className="row">
            {state.myData &&
              state.myData.map((user) => {
                return (
                  <>
                    <div key={user.id} className="col-lg-3 mt-3">
                      <h6>
                        <span className="badge bg-danger">{user.authors}</span>
                      </h6>
                      <div className="p-2 shadow-lg">
                        <div className="card">
                          <img
                            style={{ height: "170px" }}
                            src={user.image_url}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{user.title}</h5>
                            <p className="card-text">
                              {/* Some quick example text to build on the card title
                            and make up the bulk of the card's content */}
                              {user.format}
                            </p>
                            <Link
                              to={`/book/${user.id.toString()}`}
                              className="btn btn-danger w-100"
                            >
                              Overview
                            </Link>
                            <a
                              onClick={(e) => handleDelete(user.id, e)}
                              href="/"
                              className="btn btn-danger mt-2 w-100"
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
