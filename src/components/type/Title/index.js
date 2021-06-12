import PropTypes from 'prop-types';
import cc from 'util/combineClass';
import styles from './styles.module.css';

const Title = ({ className, children, ...restProps }) => (
  <span
    {...restProps}
    className={cc(styles.title, className)}
  >
    {children}
  </span>
)

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

Title.defaultProps = {
  className: '',
  children: null
};

export default Title;
