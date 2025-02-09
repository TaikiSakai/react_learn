import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import StateLearn from './hooks/usestate_learn';
import Todo from './todo';

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<App />} path='app' />
            <Route element={<StateLearn />} path='usestate' />
            <Route element={<Todo />}path='usememo' />
        </Routes>
      </BrowserRouter>
  );
};
  
export default AppRouter;