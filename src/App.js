/* BrowserRouter 컴포넌트를 이용한 라우팅 설정 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 루트 경로로 요청 시 Main 컴포넌트를 보여준다. */}
          {/* <Route path="/" element={ <Main/> }/> */}

          {/* 인덱스로 설정해두면 루트 요청과 동일하다. */}
          <Route index element={<Main />} />

          <Route path="/about" element={ <About/> }/>
          <Route path="/menu" element={ <Menu/> }/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
