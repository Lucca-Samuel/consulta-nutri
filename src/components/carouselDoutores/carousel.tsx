'use client'
import Image from 'next/image'
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './carousel.module.css'
import './carousel.css'

interface CarouselItem {
    image: string;
    title: string;
    title2: string;
    description: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

const CarouselDoutores: React.FC<CarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!items || items.length === 0) {
        return <p>No items to display</p>;
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.carousel_container}>
            <button className={styles.carousel_button_left} onClick={goToPrevious}>
                &#8249;
            </button>

            <div className={styles.carousel_item}>
                <div className={styles.carousel_content}>
                    <Image
                        src={items[currentIndex].image}
                        alt={items[currentIndex].title}
                        width={500}      // Specify desired width
                        height={300}     // Specify desired height
                        className={styles.carousel_image}
                        priority={currentIndex === 0} // Optional: load first image eagerly
                    />
                    <div className={styles.carousel_text}>
                        <h2 className={styles.carousel_text_nome}>{items[currentIndex].title}</h2>
                        <p className={styles.carousel_text_desc}>{items[currentIndex].title2}</p>
                        <p className={styles.carousel_text_desc}>{items[currentIndex].description}</p>
                    </div>
                </div>
            </div>

            <button className={styles.carousel_button_right} onClick={goToNext}>
                &#8250;
            </button>
        </div>
        // <div className="carousel-container">
        //     <button className="carousel-button left" onClick={goToPrevious}>
        //         &#8249;
        //     </button>

        //     <div className="carousel-item">
        //         <Image
        //             src={items[currentIndex].image}
        //             alt={items[currentIndex].title}
        //             width={500}      // Specify desired width
        //             height={300}     // Specify desired height
        //             className="carousel-image"
        //             priority={currentIndex === 0} // Optional: load first image eagerly
        //         />
        //         <div className="carousel-text">
        //             <h2>{items[currentIndex].title}</h2>
        //             <p>{items[currentIndex].title2}</p>
        //             <p>{items[currentIndex].description}</p>
        //         </div>
        //     </div>

        //     <button className="carousel-button right" onClick={goToNext}>
        //         &#8250;
        //     </button>
        // </div>
    );
};

export default CarouselDoutores;