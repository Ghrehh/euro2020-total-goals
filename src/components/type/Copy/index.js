import PropTypes from 'prop-types';
import cc from 'util/combineClass';
import styles from './styles.module.css';

const Copy = ({ className, children, ...restProps }) => (
  <span
    {...restProps}
    className={cc(styles.copy, className)}
  >
    {children}
  </span>
)

Copy.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

Copy.defaultProps = {
  className: '',
  children: null
};

export default Copy;
