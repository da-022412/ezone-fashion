import Hero from '../../components/Manufacturers/Hero';
import Featured from '../../components/Manufacturers/Featured';
import ManufacturerData from '../../components/Manufacturers/ManufacturerData';

export default function Manufacturers() {
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
                }
            `}</style>
            <Hero />
            <Featured />
            <ManufacturerData />
        </>
    );
}
