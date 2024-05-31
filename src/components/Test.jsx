import PropTypes from "prop-types";

const Test = (props) => {
  return <p>{props.name}</p>;
};

Test.propTypes = {
  name: PropTypes.array,
};

export default Test;
