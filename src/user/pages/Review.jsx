import { useState } from "react";
import "./Review.css";

function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Long",
      rating: 5,
      comment: "Excellent book!",
    },
    {
      id: 2,
      user: "Alice",
      rating: 4,
      comment: "Very useful.",
    },
  ]);

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const addReview = () => {
    if (!comment.trim()) return;

    setReviews([
      ...reviews,
      {
        id: reviews.length + 1,
        user: "You",
        rating,
        comment,
      },
    ]);

    setComment("");
    setRating(5);
  };

  return (
    <div className="review-page">

      <h2>Book Reviews</h2>

      <div className="review-form">

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={5}>★★★★★</option>
          <option value={4}>★★★★☆</option>
          <option value={3}>★★★☆☆</option>
          <option value={2}>★★☆☆☆</option>
          <option value={1}>★☆☆☆☆</option>
        </select>

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button onClick={addReview}>
          Submit Review
        </button>

      </div>

      <div className="review-list">

        {reviews.map((item) => (

          <div className="review-card" key={item.id}>

            <h3>{item.user}</h3>

            <p>{"⭐".repeat(item.rating)}</p>

            <p>{item.comment}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Review;