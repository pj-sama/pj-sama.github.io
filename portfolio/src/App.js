import React from 'react'
import { BrowserRouter, Routes,  Route} from "react-router-dom";
import Home from './views/Home';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="shane_tm_all_wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
