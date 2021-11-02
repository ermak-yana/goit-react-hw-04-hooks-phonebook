import PropTypes from "prop-types";
import css from "../Filter/Filter.module.css";

function Filter({ filter, onChange }) {
  return (
    <div className={css.conteiner}>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
}

Filter.propType = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
