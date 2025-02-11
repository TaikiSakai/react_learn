import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import StateLearn from './hooks/usestate_learn';
import Todo from './useMemoPage';
import ProductPage from './useCallbackPage';
import MemoPage from './memoPage';
import CustomHookLearn from './customHookPage';

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<App />} path='app' />
            <Route element={<StateLearn />} path='usestate' />
            <Route element={<Todo />}path='usememo' />
            <Route element={<ProductPage />} path='usecallback'/>
            <Route element={<MemoPage />} path='memo'/>
            <Route element={<CustomHookLearn />} path='customhooklearn'/>
        </Routes>
      </BrowserRouter>
  );
};
  
export default AppRouter;