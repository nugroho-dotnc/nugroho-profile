import { useState, useEffect, useRef } from 'react';

const SkillProgression = ({
    className, 
    progress = 30,
    skill = "UI UX DESIGN",
    animationDelay = 500
}: {
    className?: string,
    progress?: number,
    skill?: string,
    animationDelay?: number
}) => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    // Intersection Observer untuk detect saat component muncul
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Trigger saat 10% component terlihat
                rootMargin: '0px 0px -50px 0px' // Sedikit offset dari bawah
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    // Animasi progress saat component visible
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                const interval = setInterval(() => {
                    setCurrentProgress((prev) => {
                        if (prev >= progress) {
                            clearInterval(interval);
                            return progress;
                        }
                        return prev + 1;
                    });
                }, 20); // Update setiap 20ms untuk smooth animation
            }, animationDelay);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isVisible, progress, animationDelay]);

    return (
        <div 
            ref={elementRef}
            className={`w-full flex flex-col gap-4 relative font-poppins ${className}`}
        >
            <div className="w-full flex items-center justify-start relative mb-2">
                <h1 className="text-white uppercase font-medium">
                    {skill}
                </h1>
            </div>
            <div className="w-full relative">
                <div className="w-full h-2 rounded-full bg-gray-800/50 overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-100 ease-out"
                        style={{
                            width: `${currentProgress}%`,
                            boxShadow: currentProgress > 0 ? '0 0 10px rgba(99, 102, 241, 0.5)' : 'none'
                        }}
                    />
                </div>
                {/* Percentage label yang mengikuti progress */}
                <div 
                    className="absolute -top-8 text-white font-medium text-sm transition-all duration-100 ease-out"
                    style={{
                        left: `${currentProgress}%`,
                        transform: `translateX(-50%)`,
                        opacity: currentProgress > 0 ? 1 : 0,
                    }}
                >
                    <div className="bg-gray-800 px-2 py-1 rounded text-center relative">
                        {currentProgress}%
                        {/* Small arrow pointing down */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillProgression;