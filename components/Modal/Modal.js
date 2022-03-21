import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import modalStyles from './Modal.module.scss';

import Close from '../../assets/images/outline-close-black.png';

import Heading from '../Heading';
import Button from '../Button';
import BodyText from '../BodyText';

import imgOne from '../../assets/images/vacation.webp';
import imgTwo from '../../assets/images/mexico.webp';
import imgThree from '../../assets/images/sunscape.webp';

const Modal = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsActive(true);
        }, 3000);
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
                    <div className={`${modalStyles['modal-container']}`}>
                        <div className={`${modalStyles['modal-content']}`}>
                            <Heading level='6' style='heading-6'>
                                Registration Special
                            </Heading>
                            <h3>
                                <span>Register today</span> and be entered into
                                winning your choice of 1 of 3 amazing vacations.
                            </h3>
                            <a onClick={() => setIsActive(!isActive)}>
                                <Button style='primary-btn' link='#register'>
                                    Register
                                </Button>
                            </a>
                        </div>
                        <div className={`${modalStyles['modal-images']}`}>
                            <Image
                                src={imgOne}
                                height={215}
                                width={600}
                                alt='Vacation'
                            />
                            <Image
                                src={imgTwo}
                                height={215}
                                width={600}
                                alt='Vacation'
                            />
                            <Image
                                src={imgThree}
                                height={215}
                                width={600}
                                alt='Vacation'
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
