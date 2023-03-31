import { NavLink } from 'react-router-dom';
import { Button } from './BackButtonStyle';
import PropTypes from 'prop-types';

export function BackButton({ backHref: { current } }) {
  return (
    <NavLink to={current}>
      <Button type="button">Go back</Button>
    </NavLink>
  );
}

BackButton.propTypes = {
  backHref: PropTypes.shape({
    current: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      state: PropTypes.any,
    }),
  }),
};
