import User from '../User/User';

export default function Users({ users, propDelete }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User data={user} onDelete={propDelete} />
        </li>
      ))}
    </ul>
  );
}
