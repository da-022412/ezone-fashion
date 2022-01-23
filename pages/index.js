import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import Information from '../components/Information';
import Schedule from '../components/Schedule';
import About from '../components/About';

export default function Home() {
    return (
        <>
            <style global jsx>{`
                body,
                html {
                    margin: 0;
                    min-height: 100vh;
                    padding: 0;
                }
            `}</style>
            <Hero />
            <Countdown />
            <Information />
            <Schedule />
            <About />
        </>
    );
}
