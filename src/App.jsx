import { HashRouter, Route, Routes } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <div className="background-orb background-orb-one" aria-hidden="true" />
        <div className="background-orb background-orb-two" aria-hidden="true" />
        <SiteHeader />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;