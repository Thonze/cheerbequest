import logo from '../Assets/logo.png'

const Logo = ({className=''}) => {
    return (
        <img className={`${className}`} src={logo} alt="" srcset="" />
    )
}

export default Logo