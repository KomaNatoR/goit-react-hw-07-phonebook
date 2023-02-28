// import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { deleteContact } from "./redux/contacts/contacts-actions";
import { deleteContact } from "./redux/contacts/contacts-operations";
import { getFilteredContacts } from "./redux/selectors";
import { fetchContacts } from "./redux/contacts/contacts-operations";


const ContactList = () => {
    const filterdContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    },[dispatch]);

    const onClickTakeId = (id) => {
        dispatch(deleteContact(id));
    };

    // console.log(filterdContacts);
    return (
        <ul>
            {filterdContacts.map(cont => (
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