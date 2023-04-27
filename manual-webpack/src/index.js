import { createRoot } from 'react-dom/client';

// with JSX
const App = () => (
  <div>
    <h1>안녕! React</h1>
    <p>React React는 웹 & 모바일 애플리케이션 개발을 위한 라이브러리</p>
  </div>
);

// without JSX
// const app = (
//   h('div', 
//     null, 
//     h('h1', null, '안녕! React'),
//     h('p', null, 'React는 웹 & 모바일 애플리케이션 개발을 위한 라이브러리'),
//   )
// )

createRoot(
  document.getElementById('root')
).render(
  <App />
)