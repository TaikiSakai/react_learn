import { useState, useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";

// useStateの挙動確認

const StateLearn = () => {
  const [count, setCount] = useState<number>(0);
  const countUp = () => {
    setCount((prevCount) => {
      console.log(prevCount+1);
      return prevCount+1;
    });
    // console.log('countUp', count);
  };

  console.log('component rendered!')

  const countRendering = useRef<number>(0);
  useEffect(() => {
    // console.log(countRendering.current);
    console.log('useEffect', count);
    countRendering.current += 1;
  }, [count]);

  return (
      <>
        <Box>
          count: {count}
        </Box>
        <Box>
          <Button onClick={() => {countUp()}}>
            count
          </Button>
        </Box>
      </>
  )
};


export default StateLearn;