import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ title, posts, buttonLabel, buttonLink }) => {
    const postArray = Object.values(posts);

    return (
        <section className="card-section">
            <h2 className="card-section__title">{title}</h2>
            <div className="card-section__grid">
                {postArray.map((post, index) => (
                    <div key={index} className="card">
                        <div className="card__image-container">
                            <img src={post.image} alt={post.title} className="card__image" />
                            <span className={`card__type card__type--${post.type.toLowerCase().replace(' ', '-')}`}>
                                {post.type}
                            </span>
                        </div>
                        <div className="card__content">
                            <p className="card__date">{post.date}</p>
                            <h3 className="card__title">{post.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <a href={buttonLink} className="card-section__button">{buttonLabel}</a>
        </section>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    posts: PropTypes.objectOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    buttonLabel: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
};

export default Card;