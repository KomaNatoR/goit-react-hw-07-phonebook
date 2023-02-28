import { useDispatch, useSelector } from 'react-redux';

// import { addContact } from './redux/contacts/contacts-actions';
import { addContact } from './redux/contacts/contacts-operations';
import { getContacts } from './redux/selectors';
// import PropTypes from 'prop-types';

import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';


const initialValues = {
    name: '',
    number: '',
};

const FormikForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    // console.log(contacts);

    const onSubmitAddContact = ({ name, number }, actions) => {
        let id = nanoid();
        let person = { id: id, name: name, number: number };

        const contactsFind = contacts.find(item => item.name === person.name);
        if (contactsFind) return alert("Це хіба можна так робити?");
        
        // console.log(person);
        dispatch(addContact(person));
        actions.resetForm();
    };

    return (
        <Formik onSubmit={onSubmitAddContact} initialValues={initialValues}>
            <Form >
                <label >Name
                    <Field 
                        type="text"
                        name="name"
                        placeholder="FormikForm"
                        required
                    />
                    {/* <ErrorMessage name="name" component="div" /> */}
                </label>
                <label>Number
                    <Field 
                        type="tel"
                        name="number"
                        placeholder="FormikForm"
                        required
                    />
                    {/* <ErrorMessage name="number" component="div" /> */}
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};
// FormikForm.propTypes = {
//     hendleSubmit:PropTypes.func.isRequired,
// };

export default FormikForm;