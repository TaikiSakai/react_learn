import { useState, useEffect, useCallback } from "react";

export const useCustomHook = () => {
    const [count, setCount] = useState(0);
    const cleanUp = () => {
        console.log('cleanUp');
        setCount(0);
    };

    console.log('customhook rendered');

    useEffect(() => {
        console.log('customHook useEffect');
    }, []);

    return [count, setCount, cleanUp] as [number, (value: number)=>void, ()=>void];
};
