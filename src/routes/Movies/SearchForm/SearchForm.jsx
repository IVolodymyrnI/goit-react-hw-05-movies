import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { Form, Button } from './SearchFormStyle';

export function SearchForm() {
  const [params, setParams] = useSearchParams();
  const { register, handleSubmit } = useForm();
  const query = params.get('query');

  return (
    <Form onSubmit={handleSubmit(setParams)}>
      <label htmlFor="movie-name"></label>
      <input
        type="text"
        id="movie-name"
        defaultValue={query}
        {...register('query')}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}
