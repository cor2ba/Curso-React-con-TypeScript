import { useState, useEffect, useRef } from "react";
import {gsap} from "gsap";

function CounterEffect() {
  const MAX_NUM = 10
    const [counter, setCounter] = useState(5)
    const handleClick = () => {
        if(counter >= MAX_NUM) return 
        setCounter(prev => prev + 1)
    }

    const counterElement = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
      if(counter < 10) return
      console.log("Pasas los 10 flaco")
      const tl = gsap.timeline()

      tl.to(counterElement.current,{y: -10, duration: 0.2, ease: "ease.out"})
        .to(counterElement.current,{y: 0, duration: 1, ease: "bounce.out"})

      // gsap.to(counterElement.current,{y: -10, duration: 1, ease: "bounce.out"}).then(()=> {
      //   gsap.to(counterElement.current,{y: 0, duration: 1, ease: "ease.out"})
      // })
    },[counter])

    return (
      <div>
        <h1 ref={counterElement}>Counter: {counter}</h1>
        <button onClick={handleClick}>
            +1
        </button>
      </div>
    );
  }
  
  export default CounterEffect;