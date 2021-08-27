import PropTypes from 'prop-types';

function FriendList({ friends }) {
    return (
        <div class="friends-container">
            <ul class="friend-list">
                {friends.map(({ id, avatar, name, isOnline }) => (
                    
                    <li key={id} class="friend-item">
                        <span class={`status ${ isOnline ? 'online' : 'offline' }`}></span>
                        <img class="friend-icon" src={avatar} alt={name} width="48" />
                        <p class="name">{name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}


FriendList.propTypes = {stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
  ),};

export default FriendList;