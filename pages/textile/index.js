import Hero from '../../components/Textile/Hero';
import Countdown from '../../components/Textile/Countdown';
import Event from '../../components/Textile/Event';
import Information from '../../components/Textile/Information';
import Schedule from '../../components/Textile/Schedule';
import Testimonials from '../../components/Textile/Testimonials';
import About from '../../components/Textile/About';
import Register from '../../components/Textile/Register';

export default function Textile() {
    return (
        <>
            <style global jsx>{`
                body,
                html {
                    margin: 0;
                    max-width: 100vw;
                    min-height: 100vh;
                    padding: 0;
                    scroll-behavior: smooth;
                }
            `}</style>
            <Hero />
            <Countdown />
            <Event />
            <Information />
            <Schedule />
            <Testimonials />
            <About />
            <Register />
        </>
    );
}
