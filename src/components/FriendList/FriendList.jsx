import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="item">
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}

      {/* <!-- Произвольное кол-во FriendListItem --> */}
    </ul>
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
