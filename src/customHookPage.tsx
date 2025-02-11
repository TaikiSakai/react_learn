import React, { useState, useCallback, useContext, createContext, Children, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useCustomHook } from "./hooks/CustomHook";


const Context = createContext<any>(0);
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount, cleanUp] = useCustomHook();

    return (
        <Context.Provider value={{count, setCount, cleanUp}}>
            {children}
        </Context.Provider>
    )
}

const ParentCustomHookLearn = () => {
    const [parentCount, parentSetCount] = useState<number>(0);
    const {cleanUp} = useCustomHook();
    useEffect(() => {
        console.log('parent rendered')
    }, []);

    return (
        <ContextProvider>
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Button variant='contained' onClick={()=>{parentSetCount(prev=>prev+1)}}>ParentCountUp</Button>
                </Box>
                <Box>
                    ParentCount: {parentCount}
                </Box>
            </Box>
            <Box sx={{ py: 1}}>
                <ChildCustomHookLearn />
            </Box>
            <Box>
                <Button onClick={()=>{cleanUp()}}>Clean Up Children from parent</Button>
            </Box>
        </ContextProvider>
    )
}

const ChildCustomHookLearn = () => {
    const { count, setCount, cleanUp } = useContext(Context);

    useEffect(() => {
        console.log('child useEffect rendered');
    }, []);

    console.log('Child rendered');


    //  これだとcontext providerの値が変わることになるので再レンダリングされてしまう
    return (
        <Box sx={{ display: 'flex'}}>
            <Box>
                <Button variant="contained" onClick={()=>{setCount((prev)=>prev+1)}}>CountUp</Button>
            </Box>
            <Box sx={{ px: 2 }}>
                child:{count}
            </Box>
            <Box>
                <Button variant="contained" onClick={()=>{cleanUp()}}>cleanUp</Button>
            </Box>
        </Box>
    )
}

export default ParentCustomHookLearn;
