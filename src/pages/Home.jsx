import ActionLink from '../components/ActionLink';
import Panel from '../components/Panel';
import Reveal from '../components/Reveal';
import { socialLinks } from '../data/siteData';
import profileImage from '../assets/foto.png';

function Home() {
  return (
    <div className="page-stack page-home">
      <section className="hero-grid">
        <Reveal delay={90}>
          <Panel className="hero-card hero-card-intro">
            <div className="hero-avatar-wrap">
              <img src={profileImage} alt="Foto Profil" className="hero-avatar" />
            </div>
            <p className="eyebrow">INFORMATION SYSTEMS GRADUATE • BINUS UNIVERSITY • GPA: 3.71</p>
            <h1>Halo, My Name is Divya!</h1>
            <p className="hero-copy">Let's get to know me better.</p>
            <div className="button-row">
              {socialLinks.map((link) => (
                <ActionLink key={link.label} href={link.href}>
                  {link.label}
                </ActionLink>
              ))}
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={170}>
          <Panel className="hero-card hero-card-note">
            <p className="section-label">Focus</p>
            <h2>Testing, validation, and system analysis.</h2>
            <p>
              I ensure every feature works as intended. Leveraging my technical background to identify defects, analyze system logic, and validate data for high-performance applications.
            </p>
          </Panel>
        </Reveal>
      </section>
    </div>
  );
}

export default Home;