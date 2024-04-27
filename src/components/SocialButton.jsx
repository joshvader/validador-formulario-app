import PropTypes from 'prop-types';

const SocialButton = ({ icon }) => {
  return (
    <>
    <span className="icons"><i className={icon}></i></span>
    </>
  )
}
SocialButton.propTypes = {
    icon: PropTypes.string.isRequired
  };

export default SocialButton