import { PropTypes } from "prop-types";

export const Subtitle = ({ className, text }) => {
  return (
    <>
      <h2 className={className}>{text}</h2>
    </>
  );
};

Subtitle.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
