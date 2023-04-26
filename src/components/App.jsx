import user from 'data/user.json';
import { Profile } from 'components/Profile/Profile';
import data from 'data/data.json';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize: 40,
          color: '#010101',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
      </div>
    </>
  );
};
