import { memo, useState, useMemo, useEffect } from "react";
import { Box } from "@mui/material";

type someProps = {
  value: string,
  func: (text: string | number) => void | void
};

const MemoComp = memo((props: someProps) =>{
  const [num, setNum] = useState<number>(0);
  console.log('memoComp rendered!')

  useEffect(()=> {
    console.log(num);
  }, [num])
  

  useMemo(() => {
    setNum(prev => prev + 1);
    setTimeout(() => {
      console.log("memoComp useEffect executed", props.value);
    }, 3000);
  }, [props.value]);

  // ここでprops.funcをメモ化しても意味がないので注意する

  return (
    <>
      <Box>name: {props.value}</Box>
    </>
  )
});

export default MemoComp;