import { useState } from "react";
import "./Books.css";

import BookCard from "../components/BookCard/BookCard";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterBar from "../components/FilterBar/FilterBar";

const data = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
  },
  {
    id: 2,
    title: "React",
    author: "Meta",
    category: "Programming",
  },
  {
    id: 3,
    title: "Java",
    author: "James Gosling",
    category: "Programming",
  },
  {
    id: 4,
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    category: "Novel",
  },
  {
    id: 5,
    title: "Harry Potter",
    author: "J.K. Rowling",
    category: "Fantasy",
  },
  {
    id: 6,
    title: "Spring Boot",
    author: "Craig Walls",
    category: "Programming",
  },
];

function Books() {
  const [keyword, setKeyword] = useState("");

  const books = data.filter((book) =>
    book.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="books-page">
      <div className="books-header">
        <h2>Library Books</h2>
      </div>

      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
      />

      <FilterBar />

      <div className="books-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}

export default Books;