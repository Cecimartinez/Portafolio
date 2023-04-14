import { PropTypes } from "prop-types";

export const Tag = ({nameSkill}) => {
  return (
    <>
      <div className="text-xs mr-2 font-bold py-1.5 px-4 text-[#8D79FF] bg-[#D6CFFF] rounded-2xl">
        {nameSkill}
      </div>
    </>
  );
};

Tag.propTypes = {
  nameSkill: PropTypes.string
};
