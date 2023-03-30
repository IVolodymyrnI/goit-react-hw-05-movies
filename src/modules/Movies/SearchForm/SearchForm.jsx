import { useForm } from 'react-hook-form';
import { Form, Button } from './SearchFormStyle';

export function SearchForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="movie-name"></label>
      <input type="text" id="movie-name" {...register('name')} />
      <Button type="submit">Search</Button>
    </Form>
  );
}
