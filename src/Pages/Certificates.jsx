import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

function Certificates() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [error, setError] = useState('');

    const certificates = [
        { title: 'Certificate 1', src: 'https://gateway.pinata.cloud/ipfs/QmdWVLmock7EY3S4yMH23mjypkrqRZEnm4XsA59ZHHa1XK' },
        { title: 'Certificate 2', src: 'https://gateway.pinata.cloud/ipfs/Qmc4LVuwhJQCS5WJegdnZkLNWeQUMibhspSgFcEfdGzUzn' },
        { title: 'Certificate 3', src: 'https://gateway.pinata.cloud/ipfs/QmTpiHZ7zFPA1tfngMbLEfhBYf7E3LDyy7zNQrRSbZMXvH' },
        { title: 'Certificate 4', src: 'https://gateway.pinata.cloud/ipfs/Qmenqg1of5HMWQTGQCHTDEh515tAimc4TvrcG2tYaBHVgz' },
        { title: 'Certificate 5', src: 'https://gateway.pinata.cloud/ipfs/QmXq4waGkQd6Sv5YfPLhhDychRZuhpJA8dL313H61mxcNV' },
        { title: 'Certificate 6', src: 'https://gateway.pinata.cloud/ipfs/QmRGMZwae1fjGyePZGgJ96E58ua45w5GR1qMqSXCKTqXdj' },
        { title: 'Certificate 7', src: 'https://gateway.pinata.cloud/ipfs/QmXdwZYiCGqFpJM6Eq6Hp3bTaCcjg7kJec2Hrd2x7oVQ32' },
        { title: 'Certificate 8', src: 'https://gateway.pinata.cloud/ipfs/QmYs3aaFoiDHL3hugHZogtMi34QEsCoD1N9zZbXaKgeZHf' },
        { title: 'Certificate 9', src: 'https://gateway.pinata.cloud/ipfs/QmUHNpaTt4mwVGb8EkcUoKHNxGJtJraBzrT21Yb8Q6GwNU' },
        { title: 'Certificate 10', src: 'https://gateway.pinata.cloud/ipfs/QmPcyTZhbqeqEvpByrkyNjZ8Qq4sjiJfNhnUwy9iBurDu8' },
        { title: 'Certificate 11', src: 'https://gateway.pinata.cloud/ipfs/QmRiLdVDH6fWpUnVYMe9YbyQR9VGweRqUhFeZyHaK3dPd6' },
        { title: 'Certificate 12', src: 'https://gateway.pinata.cloud/ipfs/QmS4HUeNHrQcfEnuz9sp9LqQDEWUM35zvbuoMyESETowDA' },
        { title: 'Certificate 13', src: 'https://gateway.pinata.cloud/ipfs/QmaMUjcfVCM8xGxw584LeVhkwn7CkhuymmKfWGZf1JHnYe' },
        { title: 'Certificate 14', src: 'https://gateway.pinata.cloud/ipfs/QmUgUvWq126m8nDyxZEc5HV1o4tYNuWz3USCnxVbsGhbY4' },
        { title: 'Certificate 15', src: 'https://gateway.pinata.cloud/ipfs/QmS4bYVmcSeJ3Tkfadk3cGaHhQbhwwcTtJHQQwPMwLGsYd' },
        { title: 'Certificate 16', src: 'https://gateway.pinata.cloud/ipfs/QmXdBipGGsPi32pB4mCPxgSUA9J1KELcDnEJK4it3iZGJp'}
    ];

    const handleClick = (src) => {
        const img = new Image();
        img.onload = () => {
            setCurrentImage(src);
            setShowPopup(true);
            setError('');
        };
        img.onerror = () => {
            setError('Certificate not found!');
        };
        img.src = src;
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='dp certificates' style={{ position: 'relative', overflowY: 'auto', maxHeight: '100vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>
                {`
                    .dp.certificates::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
            <VerticalTimeline lineColor='#d2e3d2'>
                {certificates.map((cert, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className='vertical-timeline-element--work'
                        contentStyle={{ color: '#000000', borderRadius: '1rem', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background: '#e6e6e6', padding: '1rem' }}
                        contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                        iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                        icon={<FontAwesomeIcon icon={faCertificate} />}
                        onClick={() => handleClick(cert.src)}
                    >
                        <h3 className='vertical-timeline-element-title'>{cert.title}</h3>
                        <iframe title={cert.title} src={cert.src} width='100%' height='300px' style={{ border: 'none' }}></iframe>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {showPopup && (
                <div className='popup' onClick={closePopup} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backdropFilter: 'blur(5px)', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <img src={currentImage} alt='Certificate' style={{ maxHeight: '80%', maxWidth: '80%', borderRadius: '1rem' }} />
                </div>
            )}
        </div>
    );
}

export default Certificates;
