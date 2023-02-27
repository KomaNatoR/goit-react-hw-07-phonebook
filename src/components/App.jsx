import FormikForm from "./Form";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { MainDiv } from "./app.styled";

export const App = () => {

  return (
    <MainDiv>
      <h1>Phonebook</h1>
      <FormikForm/>
      
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </MainDiv>
  );
};


