import '../styles/home.scss';
import Icon from '@mdi/react';
import { mdiAccount, mdiHomeAccount, mdiAccountSupervisor, mdiAccountPlus } from '@mdi/js';

const Home = () => {
    return (
        <div className="home-content">
            <div className='card1'>
                <a href=""><Icon path={mdiAccount} size={3} color="white" /></a>
                <p>Lorem Ipsum</p>
            </div>
            <div className='card2'>
                <a href=""><Icon path={mdiAccountSupervisor} size={3} color="white" /></a>
                <p>Lorem Ipsum</p>
            </div>
            <div className='card3'>
                <a href=""><Icon path={mdiHomeAccount} size={3} color="white" /></a>
                <p>Lorem Ipsum</p>
            </div>
            <div className='card4'>
                <a href="/table"><Icon path={mdiAccountPlus } size={3} color="white" /></a>
                <p>New</p>
            </div>
            <div className='notice'>
                <p>Notice Board</p>
                <ul className='notice-content'>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Onsectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor incididunt</li>
                    <li>Ut enim ad minim veniam</li>
                    <li>Ut enim ad minim veniam</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;