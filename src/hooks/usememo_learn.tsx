import { useMemo, useEffect, useRef } from "react";
import { Box,  } from "@mui/material";
import { filterTodos } from "../utils/utils"

type todoTypes = {
  todos: any
  theme: any
  tab: any
};

const MemoLearn = (props: todoTypes) => {

  // useMemo概要
  // ===========================================================

  // theme切り替え時は再計算の必要がないので再計算しない
  const visibleTodos = useMemo(() => 
      // 意図的に遅延させている処理
      filterTodos(props.todos, props.tab)
      // 依存配列には再計算が必要な変数のみ記入する
  , [props.todos, props.tab]);

  // memo化されていないのでtheme変更時に計算に時間がかかる
  // const visibleTodos = filterTodos(props.todos, props.tab);

  // visibleTodo再計算時の発生検知
  const countRendering = useRef<number>(0);
  useEffect(() => {
    console.log('rendering is occurred!', countRendering.current);
    countRendering.current += 1;
  }, [visibleTodos]);

  // ===========================================================


  // オブジェクト型のメモ化
  // ===========================================================

  // 以下のオブジェクト型は再レンダリングが発生すると再定義されるので、
  // 以下のuseEffectがレンダリング毎に実行される
  // const dependencyVal = {value: props.theme};
  
  // 対策
  const dependencyVal = useMemo(() =>{
    return {value:props.theme}
  }, [props.theme]);
  
  useEffect(() => {
    console.log("Effect executed:", dependencyVal)
  }, [dependencyVal])

  // オブジェクト型以外にも、配列・関数も再レンダリング時に再定義が発生する
  // ただし、プリミティブ型は例外
  // ===========================================================


  return (
    <>
      <Box className={props.theme}>
        <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
        <ul>
          {visibleTodos.map(todo => (
            <li key={todo.id}>
              {
                todo.completed ?
                <s>{todo.text}</s> :
                todo.text
              }
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}

export default MemoLearn;