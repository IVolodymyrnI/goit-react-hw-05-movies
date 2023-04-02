import { useFetchMovie } from 'hooks';
import { useParams } from 'react-router-dom';
import { Author, ReviewItem, Content } from './ReviewsStyle';

export default function Reviews() {
  const { id } = useParams();
  const { data } = useFetchMovie({
    url: `/movie/${id}/reviews`,
  });
  const reviews = data?.results || [];
  const isReviewEmpty = reviews.length < 1;

  if (isReviewEmpty) {
    return <p>We don't have any review for this movie.</p>;
  }

  return (
    <div>
      {reviews.map(({ content, author, id }) => {
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
