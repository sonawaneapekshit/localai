import Image from 'next/image';
import PropTypes from 'prop-types';

const Logo = ({ classes, width = 200, height = 30 }) => {
  return (
    <h1 className={classes}>
      <Image
        alt="localai-logo"
        src="/Ararat-black.svg"
        width={width}
        height={height}
        className="dark:hidden"
      />
      <Image
        alt="localai-logo"
        src="/Ararat-white.svg"
        width={width}
        height={height}
        className="hidden dark:block"
      />
    </h1>
  );
};

Logo.propTypes = {
  classes: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Logo;
