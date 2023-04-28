import PropTypes from 'prop-types';
import { Status, Name } from 'components/FriendList/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status online={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// export const FriendListItem = ({ avatar, name, isOnline }) => {
//   return (
//     <>
//       <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
//       <img className="avatar" src={avatar} alt="User avatar" width="48" />
//       <p className="name">{name}</p>
//     </>
//   );
// };
