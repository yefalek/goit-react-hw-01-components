import PropTypes from 'prop-types';

const userProfile = ({
    name,
    tag,
    location,
    avatar,
    stats }) => {
    const { followers, views, likes } = stats;
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    class="avatar"
                />
                <p class="name">{name}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    );
}

userProfile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
  };
  
  export default userProfile;