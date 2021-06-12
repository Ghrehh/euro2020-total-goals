import PropTypes from 'prop-types';

const sizes = ["1x", "2x"];

const Pad = ({ size, sides, children, ...restProps }) => {
  const styles = {}
  let initialSize = '12px';
  if (size === '2x') {
    initialSize = '24px';
  }

  Object.keys(sides).forEach(key => {
    const value = sides[key];
    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let paddingSize = initialSize;
    if (value === '2x') {
      paddingSize = '24px';
    }
    styles[`padding${capitalize(key)}`] = paddingSize;
  });

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
  size: PropTypes.oneOf(sizes),
  sides: PropTypes.shape({
    top: PropTypes.oneOf(sizes),
    right: PropTypes.oneOf(sizes),
    bottom: PropTypes.oneOf(sizes),
    left: PropTypes.oneOf(sizes),
  }),
  children: PropTypes.node
}

Pad.defaultProps = {
  size: '1x',
  sides: {
    top: "1x",
    right: "1x",
    bottom: "1x",
    left: "1x"
  },
  children: null
}

export default Pad;
