import { Component } from "react";
import { v4 as uuidv } from "uuid";
import PropTypes from "prop-types";
import s from "./Form.module.css";

export class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const obj = {
      name,
      number,
    };
    this.props.addNewContact(obj);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  nameId = uuidv();
  telId = uuidv();

  render() {
    const { handleSubmit, nameId, handleChange, telId } = this;
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={nameId}>
          Name
        </label>
        <input
          className={s.input}
          onChange={handleChange}
          id={nameId}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label className={s.label} htmlFor={telId}>
          Number
        </label>
        <input
          className={s.input}
          onChange={handleChange}
          id={telId}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func,
};
