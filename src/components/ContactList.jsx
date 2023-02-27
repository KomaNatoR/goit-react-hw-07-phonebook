// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";

import { deleteContact } from "./redux/action";
import { getContacts, getFilter } from "./redux/selectors";


const ContactList = () => {
    const contactsStore = useSelector(getContacts);
    const filterStore = useSelector(getFilter);
    const dispatch = useDispatch();

    const normalizeFilter = filterStore.toLowerCase().trim();
    const visiblePersons = contactsStore.filter(cont => cont.name.toLowerCase().includes(normalizeFilter));

    const onClickTakeId = (id) => {
        dispatch(deleteContact(id));
    };

    // console.log(contactsRedux);
    return (
        <ul>
            {visiblePersons.map(cont => (
                <li key={cont.id}>
                    <span>{cont.name}:</span>
                    <span>{cont.number}</span>
                    <button onClick={()=>onClickTakeId(cont.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
// ContactList.defaultProps = {
//     contacts:[],
// }
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number:PropTypes.string.isRequired,
//     }),),
//     onClick: PropTypes.func.isRequired,
// };

export default ContactList;