import MyForm from '../MyForm/MyForm';
import objContacts from '../../objContacts.json';
import { useState } from 'react';
import Filter from '../Filter/Filter';

export default function App() {
  const [users, setUsers] = useState(objContacts);
  const [contact, setContact] = useState('');

  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <MyForm lalala={handleSubmit} contact={contact} setContact={setContact} />
      <Filter users={users} contact={contact} />
    </>
  );
}
