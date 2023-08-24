import { PropTypes } from "prop-types";

export const Input = ({ inputType, nameType, className, name, value, onChange }) => {
  return (
    <input
      name={name}
      type={inputType}
      className={className}
      placeholder={nameType}
      value={value}
      onChange={onChange}
      required
    />
  );
};

Input.propTypes = {
  nameType: PropTypes.string.isRequired,
  className: PropTypes.string,
};
