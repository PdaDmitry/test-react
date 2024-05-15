import MyForm from '../MyForm/MyForm';
import objContacts from '../../objContacts.json';
import { useState } from 'react';
import Filter from '../Filter/Filter';
import Users from '../Users/Users';

export default function App() {
  const [users, setUsers] = useState(objContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setUsers(prevUsers => {
      console.log(newContact);
      return [...prevUsers, newContact];
    });
  };

  const usersVisible = users.filter(
    user =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.number.toLowerCase().includes(filter)
  );

  // useEffect(() => {
  //   console.log('Updated users:', users);
  // }, [users]);

  const deleteContact = id => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== id);
    });
  };

  return (
    <>
      <MyForm onAdd={addContact} />
      <Filter value={filter} onFilter={setFilter} />
      <Users users={usersVisible} propDelete={deleteContact} />
    </>
  );
}
