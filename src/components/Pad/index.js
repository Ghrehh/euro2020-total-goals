import PropTypes from 'prop-types';

const unitSize = 6;
const paddingForSize = (size) => `${unitSize * size}px`;

const Pad = ({ size, sides, children, ...restProps }) => {
  const styles = {
    paddingTop: !sides ? paddingForSize(size) : 0,
    paddingRight: !sides ? paddingForSize(size): 0,
    paddingBottom: !sides ? paddingForSize(size) : 0,
    paddingLeft: !sides ? paddingForSize(size): 0
  }

  if (sides !== undefined) {
    Object.keys(sides).forEach(key => {
      const value = sides[key];
      const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      styles[`padding${capitalize(key)}`] = paddingForSize(value);
    });
  }

  return (
    <div
      style={styles}
      {...restProps}
    >
      {children}
    </div>
  );
}

Pad.propTypes = {
  size: PropTypes.number,
  sides: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  children: PropTypes.node
}

Pad.defaultProps = {
  size: 2,
  sides: undefined,
  children: null
}

export default Pad;
