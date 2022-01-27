import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import Information from '../components/Information';
import Schedule from '../components/Schedule';
import Configuration from '../components/Configuration';

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
            <Configuration />
            <Hero />
            <Countdown />
            <Information />
            <Schedule />
        </>
    );
}
