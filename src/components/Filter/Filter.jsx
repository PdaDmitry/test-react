import User from '../User/User';

export default function Filter({ users, contact }) {
  // const usersVisible = users.filter(user => user.toLowerCase().includs(contact.toLowerCase()));

  return (
    <div>
      <div>
        <label htmlFor=""></label>
        <input type="text" />
      </div>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <User data={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
