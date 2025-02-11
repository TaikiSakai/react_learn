import { useState, useCallback } from 'react';
import MemoComp from './components/memoComp';

import { Box, TextField, Button } from '@mui/material';

const MemoPage = () => {
    const [user, setUser] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [key, setKey] = useState<number>(0);

    // キーを変更してアンマウントさせる
    const unmountComponent = () => {
        setKey(prev => prev+1);
    };

    // ・子コンポーネントに関数を渡す場合
    // 子コンポーネントに関数を渡す場合は、親コンポーネントの再レンダリング時に関数も再定義されるため注意が必要である
    // → useCallbackで関数をメモ化しておく
    // → 親ではなく、子コンポーネント内で受け取った関数をメモ化しても、親コンポーネントでは再定義が発生しているので意味がない
    // → よって、子コンポーネント自体をメモ化していたとしても意味がないので注意する
    const showUser = useCallback(
        (text: string | number) => {console.log(text)}
    , []);

    return (
        <>
            <Box>
                <Button onClick={()=>{unmountComponent()}} variant='contained'>
                    Remount Component
                </Button>
            </Box>
            <Box>
                Name: 
                <TextField 
                    value={user} 
                    onChange={
                        e => setUser(e.target.value)
                    }
                />
            </Box>
            <Box>
                Address: 
                <TextField 
                    value={address} 
                    onChange={
                        e => setAddress(e.target.value)
                    } 
                />
            </Box>
            <MemoComp key={key} value={user} func={showUser} />
        </>
    )

}

export default MemoPage;