import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from '../components/AddBook'
import ViewAll from '../components/ViewAll'
import SearchBook from '../components/SearchBook'
import DeleteBook from '../components/DeleteBook'
import Home from '../components/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/view-all" element={<ViewAll />} />
          <Route path="/search-book" element={<SearchBook />} />
          <Route path="/delete-book" element={<DeleteBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App