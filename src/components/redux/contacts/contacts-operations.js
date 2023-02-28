import * as api from "components/shared/API/contacts-api";
import actions from "./contacts-actions";

export const fetchContacts = () => {
    const func = async (dispatch) => {
        try {
            dispatch(actions.fetchContactsLoading());
            const data = await api.getContacts();
            dispatch(actions.fetchContactsSuccess(data));
        } catch (error) {
            dispatch(actions.fetchContactsError(error.message));
        }
    };
    return func;
};

export const addContact = (data) => {
    const func = async (dispatch) => {
        try {
            dispatch(actions.addContactsLoading());
            const result = await api.addContact(data);
            // console.log(result);
            dispatch(actions.addContactsSuccess(result));
        } catch (error) {
            dispatch(actions.addContactsError(error.message));
        }
    };
    return func;
};

export const deleteContact = (id) => {
    const func = async (dispatch) => {
        try {
            dispatch(actions.deleteContactsLoading());
            await api.deleteContact(id);
            dispatch(actions.deleteContactsSuccess(id));
        } catch (error) {
            dispatch(actions.deleteContactsError(error.message));
        }
    };
    return func;
};