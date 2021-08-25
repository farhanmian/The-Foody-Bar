import logo from '../../Assets/Image/foody_logo.png';

const Logo = (props) => {
    return (
        <img className={` ${props.className}`} src={logo} alt="Website-Logo" />
    );
}

export default Logo;