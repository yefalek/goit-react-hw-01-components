import PropTypes from 'prop-types';


function Statistics({ stats }) {
    return (
        <ul>
            
            {stats.map(({id,label, percentage}) => (
                    <li key={id} class="item">
                        <span class="label">{label}</span>
                        <span class="percentage">{percentage}</span>
                    </li>
            
                ))}
        </ul>
    );
    
}


Statistics.propTypes = {stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
  ),};

export default Statistics;