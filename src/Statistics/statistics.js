import PropTypes from 'prop-types';


function Statistics({ stats }) {
    return (
        <section class="statistics">
            <h2 class="title">Upload stats</h2>
            <ul class="stat-list">
                
                {stats.map(({id,label, percentage}) => (
                    <li key={id} class="item">
                        <span class="label">{label}</span>
                        <span class="percentage">{percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
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