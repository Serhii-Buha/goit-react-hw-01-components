import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
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
//       {isOnline ? (
//         <span className="status"></span>
//       ) : (
//         <span className="status"></span>
//       )}
//       <img className="avatar" src={avatar} alt="User avatar" width="48" />
//       <p className="name">{name}</p>
//     </>
//   );
// };
