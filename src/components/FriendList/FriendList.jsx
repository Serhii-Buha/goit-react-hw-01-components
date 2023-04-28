import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { List, Item } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </Item>
      ))}

      {/* <!-- Произвольное кол-во FriendListItem --> */}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// export const FriendList = ({ friends }) => {
//   return (
//     <ul className="friend-list">
//       {friends.map(({ avatar, name, isOnline, id }) => (
//         <li key={id} className="item">
//           <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
//         </li>
//       ))}

//       {/* <!-- Произвольное кол-во FriendListItem --> */}
//     </ul>
//   );
// };

// export const FriendList = ({ friends, children }) => {
//   return (
//     <ul className="friend-list">
//       {friends.map(friend => (
//         <li key={friend.id} className="item">
//           {children}
//         </li>
//       ))}

//       {/* <!-- Произвольное кол-во FriendListItem --> */}
//     </ul>
//   );
// };
