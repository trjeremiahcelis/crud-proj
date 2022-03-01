import Icon from '@mdi/react'
import { mdiTableLarge, mdiHome } from '@mdi/js'
import Logo from '../assets/images/Logo-01.svg'

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="before">
                <li><img src={Logo} alt="logo" /></li>
                <li><a href="/">
                    <Icon path={mdiHome} title="action" size={1} className='Table' color='white' />
                </a></li>
                <li><a href="/">
                    <Icon path={mdiTableLarge} title="action" size={0.9} className='Table' color='white' />
                </a></li>
            </ul>

            <ul className="after">
                <li><img src={Logo} alt="logo" /></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Table</a></li>
            </ul>
        </nav>
    );
}

export default Nav;