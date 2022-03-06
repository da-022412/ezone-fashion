import Hero from '../components/Home/Hero';
import Countdown from '../components/Home/Countdown';
import Information from '../components/Home/Information';
import Schedule from '../components/Home/Schedule';
import Testimonials from '../components/Home/Testimonials';
import About from '../components/Home/About';
import Register from '../components/Home/Register';

export default function Home() {
    return (
        <>
            <style global jsx>{`
                body,
                html {
                    margin: 0;
                    max-width: 100vw;
                    min-height: 100vh;
                    overflow-x: hidden;
                    padding: 0;
                    scroll-behavior: smooth;
                }
            `}</style>
            <Hero />
            <Countdown />
            <Information />
            <Schedule />
            <Testimonials />
            <About />
            <Register />
        </>
    );
}
