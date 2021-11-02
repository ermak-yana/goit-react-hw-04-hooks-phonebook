import PropTypes from "prop-types";
import css from "../PhoneList/PhoneList.module.css";
import PhoneItem from "../PhoneItem/PhoneItem";

function createContactList({ title, filterContact, removeContact }) {
  return (
    <section className={css.block}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {filterContact().map(({ id, name, number }) => (
          <PhoneItem
            key={id}
            id={id}
            name={name}
            number={number}
            removeContact={removeContact}
          />
        ))}
      </ul>
    </section>
  );
}

createContactList.propTypes = {
  title: PropTypes.string,
  filterContact: PropTypes.func,
  removeContact: PropTypes.func,
};

export default createContactList;
