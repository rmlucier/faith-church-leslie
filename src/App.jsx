import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring, MotionConfig, useReducedMotion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';

// Route-level code splitting — each page ships as its own chunk.
const Home = lazy(() => import('./pages/Home.jsx'));
const Visit = lazy(() => import('./pages/Visit.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Discipleship = lazy(() => import('./pages/Discipleship.jsx'));
const Serve = lazy(() => import('./pages/Serve.jsx'));
const Sermons = lazy(() => import('./pages/Sermons.jsx'));
const Events = lazy(() => import('./pages/Events.jsx'));
const Give = lazy(() => import('./pages/Give.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

// Minimal fallback — keeps the manila page under the nav during chunk load.
function RouteFallback() {
  return <div className="min-h-screen bg-manila" aria-hidden="true" />;
}

export default function App() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <MotionConfig reducedMotion={reduce ? 'always' : 'never'}>
      <BrowserRouter>
        <ScrollToHash />
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-0.5 bg-hunter origin-left z-[60]"
        />
        <Nav />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/about" element={<About />} />
            <Route path="/discipleship" element={<Discipleship />} />
            <Route path="/serve" element={<Serve />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/give" element={<Give />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </MotionConfig>
  );
}
