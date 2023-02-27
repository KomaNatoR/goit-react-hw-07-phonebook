export const getContacts = ({ contacts }) => contacts;
export const getFilter = ({ filter }) => filter;
export const getFilteredContacts = ({ contacts, filter }) => {
    const normalizeFilter = filter.toLowerCase().trim();
    const visiblePersons = contacts.filter(cont => cont.name.toLowerCase().includes(normalizeFilter));
    return visiblePersons;
};