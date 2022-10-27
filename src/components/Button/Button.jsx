import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => (
  <button className={css.btn__loadMore} onClick={loadMore}>
    Load more
  </button>
);

Button.prototype = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
