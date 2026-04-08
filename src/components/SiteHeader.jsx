import { NavLink } from 'react-router-dom';
import { siteNavigation } from '../data/siteData';

function SiteHeader() {
  return (
    <header className="site-header reveal" style={{ '--delay': '40ms' }}>
      <nav className="site-nav" aria-label="Primary">
        <div className="site-branding">
          <span className="site-mark">DF</span>
          <div>
            <p className="site-kicker">Portfolio</p>
            <p className="site-title">Divya Asri Febrianty</p>
          </div>
        </div>
        <div className="site-links">
          {siteNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `site-link${isActive ? ' site-link-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;