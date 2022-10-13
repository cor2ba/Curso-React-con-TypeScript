import { useState, useEffect, useRef, useLayoutEffect } from "react";
import {gsap} from "gsap";

export const useCounter = ({maxCount = 1}) => {
    const [counter, setCounter] = useState(5)
    const tl = useRef(gsap.timeline())
    
    const counterElement = useRef<any>(null)
    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCount))
    }

    useLayoutEffect(() => {
        if(!counterElement.current) return
        tl.current.to(counterElement.current,{y: -10, duration: 0.2, ease: "ease.out"})
            .to(counterElement.current,{y: 0, duration: 1, ease: "bounce.out"})
            .pause()
    },[])

    useEffect(() => {
      tl.current.play(0)
    },[counter])

    return {
        counter,
        counterElement,
        handleClick
    }
}