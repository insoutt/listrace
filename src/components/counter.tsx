import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({total}: {total: number}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if(!inView) return;

    const interval = start();
    return () => clearInterval(interval);
  }, [inView]);

  const start = () => {
    let current = 0;
    const interval = setInterval(() => {

      if(current >= total) {
        clearInterval(interval);
        return;
      }

      current++;
      setValue(current);
    }, Math.trunc(2000/total)) // end count in 2 seconds

    return interval;
  }

  return (<span ref={ref}>{value}</span>);
}

export default Counter;