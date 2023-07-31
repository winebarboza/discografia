import Content from './pages/content/contentPage';
import FormPage from './pages/album-add/formPage';
import FormTrack from './pages/track-add/formTrack';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/novoalbum" element={<FormPage />} />
          <Route path="/novatrack/:name/:id" element={<FormTrack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
