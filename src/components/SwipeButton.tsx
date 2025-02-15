'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface SwipeButtonProps {
    onComplete: () => void;
    onReset: () => void;
    text?: string;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({
    onComplete,
    onReset,
    text = 'TREEN IT',
}) => {
    const [swiping, setSwiping] = useState(false);
    const [swipePercentage, setSwipePercentage] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [arrowDirection, setArrowDirection] = useState<'right' | 'left'>(
        'right',
    );
    const buttonRef = useRef<HTMLDivElement>(null);

    const updateArrowDirection = useCallback(
        (newPercentage: number) => {
            const newDirection = newPercentage > 50 ? 'left' : 'right';
            if (newDirection !== arrowDirection) {
                setArrowDirection(newDirection);
            }
        },
        [arrowDirection],
    );

    const handleTouchMove = useCallback(
        (e: TouchEvent | MouseEvent) => {
            if (!swiping || !buttonRef.current) return;

            const touch = 'touches' in e ? e.touches[0] : e;
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const buttonWidth = buttonRect.width;
            const touchX = touch.clientX - buttonRect.left;

            const newPercentage = Math.min(
                Math.max((touchX / buttonWidth) * 100, 0),
                100,
            );
            setSwipePercentage(newPercentage);
            updateArrowDirection(newPercentage);

            if (newPercentage >= 70 && !completed) {
                completeSwipe();
            } else if (newPercentage < 30 && completed) {
                resetSwipe();
            }
        },
        [swiping, completed, updateArrowDirection, onComplete, onReset],
    );

    const handleTouchEnd = useCallback(() => {
        if (!completed && swipePercentage < 90) {
            setSwipePercentage(0);
        }
        setSwiping(false);
    }, [completed, swipePercentage]);

    const completeSwipe = () => {
        setSwiping(false);
        setSwipePercentage(100);
        setCompleted(true);
        onComplete();
    };

    const resetSwipe = () => {
        setSwiping(false);
        setSwipePercentage(0);
        setCompleted(false);
        onReset();
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => handleTouchMove(e);
        const handleMouseUp = () => handleTouchEnd();

        if (swiping) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [swiping, handleTouchMove, handleTouchEnd]);

    return (
        <div
            ref={buttonRef}
            className="relative w-full ml-10 mr-10 h-16 bg-[#D8E9A8] rounded-full overflow-hidden cursor-pointer"
            onTouchStart={() => setSwiping(true)}
            onTouchMove={
                handleTouchMove as unknown as (
                    e: React.TouchEvent<HTMLDivElement>,
                ) => void
            }
            onTouchEnd={handleTouchEnd}
            onMouseDown={() => setSwiping(true)}
        >
            <div
                className="absolute inset-0 flex items-center justify-center text-black font-semibold text-2xl z-10"
                style={{ opacity: 1 - swipePercentage / 100 }}
            >
                {text}
            </div>
            <div
                className="absolute left-0 top-0 bottom-0 bg-[#00A340] rounded-full flex items-center justify-center transition-all duration-300 ease-out"
                style={{ width: `${Math.max(swipePercentage, 22)}%` }}
            >
                {arrowDirection === 'right' ? (
                    <ArrowRight
                        className="text-black transition-transform duration-300"
                        size={24}
                    />
                ) : (
                    <ArrowLeft
                        className="text-black transition-transform duration-300"
                        size={24}
                    />
                )}
            </div>
        </div>
    );
};

export default SwipeButton;
