import Script from 'next/script';

import countdownStyles from '../../styles/Countdown.module.scss';

const Countdown = () => {
    return (
        <>
            <section className={`${countdownStyles['countdown-section']}`}>
                <div className={`${countdownStyles['countdown-wrap']}`}>
                    <div
                        className={`${countdownStyles.timer} ${countdownStyles['text-center']}`}
                    >
                        <h5 className={`${countdownStyles['heading-5']}`}>
                            Days
                        </h5>
                        <div id='days'></div>
                    </div>
                    <div
                        className={`${countdownStyles.timer} ${countdownStyles['text-center']}`}
                    >
                        <h5 className={`${countdownStyles['heading-5']}`}>
                            Hours
                        </h5>
                        <div id='hours'></div>
                    </div>
                    <div
                        className={`${countdownStyles.timer} ${countdownStyles['text-center']}`}
                    >
                        <h5 className={`${countdownStyles['heading-5']}`}>
                            Minutes
                        </h5>
                        <div id='minutes'></div>
                    </div>
                    <div
                        className={`${countdownStyles.timer} ${countdownStyles['text-center']}`}
                    >
                        <h5 className={`${countdownStyles['heading-5']}`}>
                            Seconds
                        </h5>
                        <div id='seconds'></div>
                    </div>
                </div>
            </section>
            <Script id='countdown'>
                {`
                // Set the date we're counting down to
                var countDownDate = new Date('Mar 21, 2022 23:59:59').getTime();
                
                // Update the count down every 1 second
                var x = setInterval(function() {
                
                  // Get today's date and time
                  var now = new Date().getTime();
                
                  // Find the distance between now and the count down date
                  var distance = countDownDate - now;
                
                  // Time calculations for days, hours, minutes and seconds
                  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                  // Display the result in the element with id='demo'
                  document.getElementById('days').innerHTML = days;
                  document.getElementById('hours').innerHTML = hours;
                  document.getElementById('minutes').innerHTML = minutes;
                  document.getElementById('seconds').innerHTML = seconds;
                
                }, 1000);
                `}
            </Script>
        </>
    );
};

export default Countdown;
