import css from './Button.module.css';

const Button = ({ loadMore }) => (
  <button className={css.btn__loadMore} onClick={loadMore}>
    Load more
  </button>
);

export default Button;
