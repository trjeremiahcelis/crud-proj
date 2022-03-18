import Icon from '@mdi/react'
import { mdiAccountGroup , mdiHome } from '@mdi/js'
import Logo from '../assets/images/Logo-01.svg'

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="before">
                <li><img src={Logo} alt="logo" /></li>
                <li><a href="/">
                    <Icon path={mdiHome} title="action" size={1} className='Table' color='grey' />
                </a></li>
                <li><a href="/Table">
                    <Icon path={mdiAccountGroup } title="action" size={0.9} className='Table' color='grey' />
                </a></li>
            </ul>

            <ul className="after">
                <li><img src={Logo} alt="logo" /></li>
                <li><a href="/">Home</a></li>
                <li><a href="/Students">Students</a></li>
            </ul>
        </nav>
    );
}

export default Nav;