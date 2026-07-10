import React from "react";
import Navbar from "./Navbar";

function AddBook() {
  return (
    <div>
      <Navbar />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="card shadow-sm">
              <div className="card-header bg-white">
                <h3 className="mb-0">Add New Book</h3>
              </div>

              <div className="card-body">
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Book Code</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Publisher</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Category / Genre</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Edition</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Number of Copies</label>
                    <input type="number" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Publication Year</label>
                    <input type="number" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Shelf Location</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button className="btn btn-primary px-5">
                      Add Book
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

export default AddBook;