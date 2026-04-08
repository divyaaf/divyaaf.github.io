import Panel from '../components/Panel';
import PageHeading from '../components/PageHeading';
import Reveal from '../components/Reveal';
import { experienceItems, summaryText } from '../data/siteData';

function About() {
  return (
    <div className="page-stack">
      <PageHeading eyebrow="About Me" title="Professional background and experience" />

      <div className="content-stack">
        <Reveal delay={110}>
          <Panel className="text-panel">
            <h2>Summary</h2>
            <p className="body-copy">{summaryText}</p>
          </Panel>
        </Reveal>

        <Reveal delay={180}>
          <Panel className="text-panel">
            <h2>Experiences</h2>
            <div className="experience-stack">
              {experienceItems.map((item) => (
                <article key={item.title} className="experience-block">
                  <h3>{item.title}</h3>
                  <ul className="experience-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>
    </div>
  );
}

export default About;