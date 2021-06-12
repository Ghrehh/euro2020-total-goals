import PropTypes from 'prop-types';
import { Copy } from 'components/type';
import Pad from 'components/Pad';
import cc from 'util/combineClass';
import styles from './styles.module.css';

const Card = ({ className, title, children, ...restProps }) => (
  <article {...restProps} className={cc(className, styles.card)}>
    <Pad>
      <h2><Copy>{title}</Copy></h2>
      <Pad sides={{ top: "1x" }}>
        {children}
      </Pad>
    </Pad>
  </article>
)

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
};

Card.defaultProps = {
  className: '',
  title: '',
  children: null
};

export default Card;
