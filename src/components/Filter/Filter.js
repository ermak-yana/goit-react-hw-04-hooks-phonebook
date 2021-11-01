import React from "react";
import PropTypes from "prop-types";
import s from "./Filtre.module.css";

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Finde contacts by name
    <input
      type="text"
      className={s.input}
      value={value}
      onChange={onChange}
    ></input>
  </label>
);
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
