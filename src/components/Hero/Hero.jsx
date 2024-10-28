import PropTypes from 'prop-types';
import './Hero.scss';

const Hero = ({
    title,
    subtitle,
    buttonLabel,
    buttonLink,
    bgImage,
    shapes,
    isSecondVisit,
}) => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero__content">
                <h1 className="hero__title">{title}</h1>
                <p className="hero__subtitle">{subtitle}</p>
                <a
                    href={buttonLink}
                    className={`hero__button ${isSecondVisit ? 'hero__button--second-visit' : ''}`}
                >
                    {buttonLabel}
                </a>
            </div>
            <img src={shapes.shape_1} alt="" className="hero__shape hero__shape--left" />
            <img src={shapes.shape_2} alt="" className="hero__shape hero__shape--right" />
        </section>
    );
};

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    shapes: PropTypes.shape({
        shape_1: PropTypes.string.isRequired,
        shape_2: PropTypes.string.isRequired,
    }).isRequired,
    isSecondVisit: PropTypes.bool.isRequired,
};

export default Hero;
