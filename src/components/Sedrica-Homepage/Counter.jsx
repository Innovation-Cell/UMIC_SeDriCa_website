import React, { useEffect, useRef, useState, useCallback } from 'react';
import './Statistics.css';

const Counter = ({ targetNumber, val }) => {
    const [count, setCount] = useState(0);
    const isCountingRef = useRef(false);
    const counterRef = useRef(null);

    // Memoize the startCounting function to avoid unnecessary re-creation
    const startCounting = useCallback(() => {
        const duration = 4000; // Total duration for the counting (4 seconds)
        const steps = 100; // Number of steps for the counting
        const increment = targetNumber / steps; // Basic increment value

        let step = 0;
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (step >= steps) {
                    clearInterval(interval);
                    return targetNumber;
                }

                // Calculate dynamic increment based on distance to target
                const dynamicIncrement = Math.max(increment * (steps - step) / steps, 1); // Slow down as we get closer

                step++;
                return Math.min(prevCount + dynamicIncrement, targetNumber);
            });
        }, duration / steps);
    }, [targetNumber]);

    useEffect(() => {
        const currentCounterRef = counterRef.current; // Capture ref value

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isCountingRef.current) {
                        startCounting();
                        isCountingRef.current = true; // Prevent further triggers
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (currentCounterRef) {
            observer.observe(currentCounterRef);
        }

        return () => {
            if (currentCounterRef) {
                observer.unobserve(currentCounterRef); // Use captured ref value for cleanup
            }
        };
    }, [startCounting]); // Add startCounting as a dependency

    return (
        <div ref={counterRef}>
            <h1 className='num-text'>{Math.floor(count) + val}</h1>
        </div>
    );
};

export default Counter;
