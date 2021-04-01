import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './slider.module.css';

export default function Slider(props: ISliderProps) {
    const auto = !!props.auto;
    const [sliderRef, slider] = useKeenSlider({
        controls: !auto,
        loop: true,
        duration: 1000,
    });

    if (auto) {
        React.useEffect(() => {
            const timeout = setInterval(() => {
                if (!!slider) {
                    slider.next();
                }
            }, 5000);

            return () => {
                clearInterval(timeout);
            };
        }, [slider]);
    }

    return (
        <>
        <div ref={sliderRef as React.RefObject<HTMLDivElement>} className="keen-slider">
            {
                props.slides.map((s, i) => {
                    <div key={i} className="keen-slider__slide">
                        <h2>{s}</h2>
                    </div>
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
