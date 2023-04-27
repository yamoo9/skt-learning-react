import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/global.css';

// 컴포넌트 "순수"해야 한다.
// 순수 함수 (input → output)
// 함수() => 결과 값 1
// 함수() => 결과 값 2

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
);
