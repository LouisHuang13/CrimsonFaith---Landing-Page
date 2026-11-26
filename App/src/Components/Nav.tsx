import { Link } from 'react-router';
import Logo from '../Assets/Images/Favicon.svg';

export const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="" />
            <div>
                <Link to="/Roadmap">Roadmap</Link>
                <Link to="/Lore">Lore</Link>
                <Link to="/Team">L'équipe</Link>
            </div>
            <div>
                <button><Link to="/">Télécharger</Link></button>
            </div>
        </nav>
    )
}