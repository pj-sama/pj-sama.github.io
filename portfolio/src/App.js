import './App.css';

function App() {
  return (
    <div className="shane_tm_all_wrap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
