import '../assets/styles/home.scss';
import Icon from '@mdi/react';
import { mdiAccount, mdiHomeAccount, mdiAccountSupervisor } from '@mdi/js';

const Home = () => {
    return (
        <div className="home-content">
            <div className='card1'>
                <a href=""><Icon path={mdiAccount} size={5} color="white" /></a>
                <p>Students 5,000</p>
            </div>
            <div className='card2'>
                <a href=""><Icon path={mdiAccountSupervisor} size={5} color="white" /></a>
                <p>Teachers 200</p>
            </div>
            <div className='card3'>
                <a href=""><Icon path={mdiHomeAccount} size={5} color="white" /></a>
                <p>Classes 150</p>
            </div>
        </div>
    );
}

export default Home;