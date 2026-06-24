import { Routes, Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import ReadingPage from './pages/ReadingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/reading/:id" element={<ReadingPage />} />
    </Routes>
  )
}