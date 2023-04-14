import { PropTypes } from "prop-types";

export const Button = ({ type, value, onClick, className }) => {
  return (
    <div className="col-span-2 text-right">
      <button type={type} onClick={onClick} className={className}>
        {value}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
