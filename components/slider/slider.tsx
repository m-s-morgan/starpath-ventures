import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './slider.module.css';

export default function Slider(props: ISliderProps) {
    const auto = props.auto;
    const [sliderRef, slider] = useKeenSlider({
        controls: !auto,
        loop: true,
        duration: 2000,
    });

    if (auto) {
        React.useEffect(() => {
            const timeout = setInterval(() => {
                if (!!slider) {
                    slider.next();
                }
            }, 6000);

            return () => {
                clearInterval(timeout);
            };
        }, [slider]);
    }

    return (
        <>
        <div ref={sliderRef as React.RefObject<HTMLDivElement>} className={`keen-slider ${styles.slider}`}>
            {
                props.slides.map((s, i) => {
                    return (
                        <div key={i} className="keen-slider__slide">
                            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${styles.header}`}>{s}</h1>
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}

export interface ISliderProps {
    slides: string[];
    auto?: boolean;
}
