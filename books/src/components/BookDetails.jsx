import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BioDataContext } from "./ContextPart";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

const BookDetails = () => {
  const { state } = useContext(BioDataContext);
  const { id } = useParams(); // this id got the id parameter from the router

  const book = state.myData.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book is not found</div>;
  }

  return (
    <div>
      <div className="container shadow-sm mt-3">
        <div className="row mt-5">
          <div className="col-lg-4 mt-5">
            <div className="p-2 shadow-sm">
              <Link
                to="/"
                element={<HomePage />}
                style={{
                  textDecoration: "none",
                  padding: "2px 10px",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Back To Home Page
              </Link>
              {/* use image */}
              <img className="mt-2" src={book.image_url} alt="" />
            </div>
          </div>

          <div className="col-lg-8 mt-5">
            <div className="p-2 shadow-sm">
              <h1>Book Name : {book.title}</h1>
              <p>
                <strong>Author :</strong> {book.authors}
              </p>
              <p>
                <strong>Format :</strong> {book.format}
              </p>
              <p>
                <strong>Edition :</strong> {book.edition}
              </p>
              <h6>Genres: {book.genres}</h6>
              <p>
                <strong>Review :</strong> {book.review_count}
              </p>
              <p>
                <strong>Description :</strong> {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
