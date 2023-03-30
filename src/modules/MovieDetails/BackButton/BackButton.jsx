import { NavLink } from 'react-router-dom';
import { Button } from './BackButtonStyle';

export function BackButton({ backHref }) {
  return (
    <NavLink to={backHref}>
      <Button type="button">Go back</Button>
    </NavLink>
  );
}
