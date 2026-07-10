import React from "react";
import Navbar from "./Navbar";

function DeleteBook() {
  return (
    <div>
      <Navbar />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card shadow-sm">
              <div className="card-header bg-white">
                <h3 className="mb-0">Delete Book</h3>
              </div>

              <div className="card-body">
                <div className="row g-3 align-items-end">

                  <div className="col-md-9">
                    <label className="form-label">
                      Book Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-3 d-grid">
                    <button className="btn btn-danger">
                      Delete
                    </button>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;