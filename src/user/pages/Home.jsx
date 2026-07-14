import "./Home.css";
import hero from "../../assets/hero.png";
import BookCard from "../components/BookCard/BookCard";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-left">

          <h1>Welcome To Library</h1>

          <p>
            Discover thousands of books from many categories.
            Borrow books quickly and easily.
          </p>

          <button>Explore Books</button>

        </div>

        <div className="hero-right">

          <img src={hero} alt="Hero" />

        </div>

      </section>

      <section className="feature">

        <div className="feature-card">

          <h3>1000+</h3>

          <p>Books</p>

        </div>

        <div className="feature-card">

          <h3>300+</h3>

          <p>Authors</p>

        </div>

        <div className="feature-card">

          <h3>24/7</h3>

          <p>Online</p>

        </div>

      </section>

      <section className="home-books">

        <h2>Popular Books</h2>

        <div className="books-grid">

          <BookCard
            book={{
              id: 1,
              title: "Clean Code",
              author: "Robert C. Martin",
              category: "Programming",
            }}
          />

          <BookCard
            book={{
              id: 2,
              title: "Spring Boot",
              author: "Craig Walls",
              category: "Programming",
            }}
          />

          <BookCard
            book={{
              id: 3,
              title: "Harry Potter",
              author: "J.K. Rowling",
              category: "Fantasy",
            }}
          />

        </div>

      </section>

    </>
  );
}

export default Home;