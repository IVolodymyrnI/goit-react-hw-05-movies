import { API } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, ReviewItem, Content } from './ReviewsStyle';

export default function Reviews() {
  const { id } = useParams();
  const [review, setReview] = useState('');
  const shortedReviewArray = review.slice(0, 20);
  const isReviewEmpty = review.length === 0;

  useEffect(() => {
    API.fetchMovieReviewById(id).then(r => setReview(r.data.results));
  }, [id]);

  if (!review) {
    return null;
  }

  if (isReviewEmpty) {
    return <p>We don't have any review for this movie.</p>;
  }

  if (!isReviewEmpty) {
    return (
      <div>
        {shortedReviewArray.map(({ content, author, id }) => {
          return (
            <ReviewItem key={id}>
              <Author>
                <b>Author</b>: {author}
              </Author>
              <Content>{content}</Content>
            </ReviewItem>
          );
        })}
      </div>
    );
  }
}
