import PropTypes from 'prop-types';
import cc from 'util/combineClass';
import styles from './styles.module.css';

const Impact = ({ className, children, ...restProps }) => (
  <span
    {...restProps}
    className={cc(styles.impact, className)}
  >
    {children}
  </span>
)

Impact.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

Impact.defaultProps = {
  className: '',
  children: null
};

export default Impact;
