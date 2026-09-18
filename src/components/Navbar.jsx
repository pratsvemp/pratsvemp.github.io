import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home',      path: '/' },
  { name: 'Research',  path: '/research' },
  { name: 'Resources', path: '/resources' },
  { name: 'Personal',  path: '/personal' },
  { name: 'Contact',   path: '/contact' },
];

const Navbar = () => (
  <header className="site-header">
    <div className="page-wrap">
      <NavLink to="/" className="site-name">
        Pratyush Vempati
      </NavLink>
      <nav aria-label="Main navigation">
        <ul className="site-nav">
          {links.map(link => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                id={`nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
