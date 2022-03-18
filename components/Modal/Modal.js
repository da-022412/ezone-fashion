import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import modalStyles from './Modal.module.scss';

import Close from '../../assets/images/outline-close-black.png';

import Heading from '../Heading';
import Button from '../Button';
import BodyText from '../BodyText';

const Modal = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsActive(true);
        }, 5000);
    }, []);

    return (
        isActive && (
            <div className={modalStyles.modal}>
                <div className={`${modalStyles['modal-window']}`}>
                    <a
                        className={`${modalStyles['close-button']}`}
                        onClick={() => setIsActive(!isActive)}
                    >
                        <Image src={Close} width={24} height={24} alt='Close' />
                    </a>
                    <Heading level='6' style='heading-6'>
                        Registration Special
                    </Heading>
                    <Heading level='3' style='heading-3'>
                        Register in the next 24 hours
                    </Heading>
                    <div className={`${modalStyles['modal-container']}`}>
                        <BodyText>
                            and be entered to recieve a 7-day dream vacation
                            certificate
                        </BodyText>
                        <a onClick={() => setIsActive(!isActive)}>
                            <Button style='primary-btn' link='#register'>
                                Register
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
