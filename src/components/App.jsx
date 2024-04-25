import { FriendListItem } from './FriendListItem';
import friends from '../friends.json';

export function App() {
  return (
    <div>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
