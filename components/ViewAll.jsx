import React from "react";
import Navbar from "./Navbar";

function ViewAll() {
  const books = [
    {
      title: "A Dance With Dragons",
      author: "George R. R. Martin",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpEKg6cPQAJy1bu4w90JjakeDXWq9NOtgoNjPnKndVA&s=10",
      description:
        "Jon, Daenerys, and Tyrion face dangerous challenges in a fractured world.",
    },
    {
      title: "A Feast for Crows",
      author: "George R. R. Martin",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCHED_6wbc_LHk62FcL1sR1OLbRvUFz4jmHKO660mug&s=10",
      description: "The aftermath of war reshapes Westeros as new rulers rise.",
    },
    {
      title: "A Knight of the Seven Kingdoms",
      author: "George R. R. Martin",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaYVt0EvmQvWCM-DiilGC1N-7kDBBbZvqPUOU9Ekg_A&s=10",
      description:
        "The adventures of Dunk and Egg before the Game of Thrones era.",
    },
    {
      title: "The World of Ice & Fire",
      author: "George R. R. Martin",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Eab8Hch19L9dLLajhnXoxGNAb0gBPaxX-2JtYcQXgg&s=10",
      description:
        "A richly illustrated history of Westeros and its great houses.",
    },
    {
      title: "Fire & Blood",
      author: "George R. R. Martin",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHXpUbjiXq1TxcaQS15-HRVSd0Hjvi4MTwUndZT2hKQ&s=10",
      description:
        "The complete history of House Targaryen from Aegon's Conquest.",
    },
    {
      title: "The Witcher: The Last Wish",
      author: "Andrzej Sapkowski",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOYTisGeVm1dQrPE6PusJxAUrlNIO2lfo7LXv1BI_KQ&s=10",
      description: "Geralt of Rivia hunts monsters in a dark fantasy world.",
    },
    {
      title: "Star Wars: The Living Force",
      author: "John Jackson Miller",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpHJvx-BuW_UsWJCin_TIYMQl3sP0nqaFLgon3rqabA&s=10",
      description:
        "A thrilling Star Wars adventure centered around the Jedi Order.",
    },
    {
      title: "The Godfather",
      author: "Mario Puzo",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTNz46r-YwV4Vr5W3PvHvHwiz_LCNjRyTpbpoY7AyUQ&s=10",
      description: "The legendary story of the Corleone crime family.",
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWpkeZgm3rpUVZ3bXSYZAhEvCJEfWLOslyvVmZHHZWA&s=10",
      description:
        "Frodo begins an unforgettable journey to destroy the One Ring.",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      price: "₹2,500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQtI88XXNwYJ9Gr44JYSvP8jk5qSiTsJ8BB5aYcDqqA&s=10",
      description:
        "Harry discovers he is a wizard and begins life at Hogwarts.",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h2 className="text-center mb-5 fw-bold">Book Management System</h2>

        <div className="row g-4">
          {books.map((book, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{
                    height: "420px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>

                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "14px" }}
                  >
                    {book.description}
                  </p>

                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">
                      <strong>Author:</strong> {book.author}
                    </li>

                    <li className="list-group-item">
                      <strong>Price:</strong> {book.price}
                    </li>
                  </ul>

                  <button className="btn btn-success mt-auto w-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewAll;