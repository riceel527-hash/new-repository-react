import React, { useState } from "react";
import { books } from "../data";
import Book from "./ui/Book";

const Books = () => {
  const [filter, setFilter] = useState("DEFAULT");

  const sortedBooks = [...books].sort((a, b) => {
    if (filter === "LOW_TO_HIGH") return a.price - b.price;
    if (filter === "HIGH_TO_LOW") return b.price - a.price;
    if (filter === "RATING") return b.rating - a.rating;
    return 0;
  });

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">All Books</h2>
                <select id="filter" defaultValue="DEFAULT" onChange={(e) => setFilter(e.target.value)}>
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {sortedBooks.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;

