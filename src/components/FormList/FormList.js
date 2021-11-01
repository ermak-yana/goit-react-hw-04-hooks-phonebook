import PropTypes from "prop-types";

import s from "./FormList.module.css";

// function FormList({ contacts, onDeleteContact }) {
//   return (
//     <ul className={s.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li className={s.item} key={id}>
//           <p>
//             {name}: {number}
//           </p>
//           <button
//             className={s.btn}
//             type="button"
//             onClick={() => onDeleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

const FormList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={s.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default FormList;

FormList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
