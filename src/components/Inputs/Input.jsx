import { PropTypes } from "prop-types";

export const Input = ({ inputType, nameType, className }) => {
  console.log(inputType, nameType);
  return (
    <input
      type={inputType}
      className={className}
      placeholder={nameType}
      required
    />
  );
};

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  nameType: PropTypes.string.isRequired,
};
