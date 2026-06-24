import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import type { Book } from '../types';
import BookList from '../components/BookList';

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async (query: string) => {
    const response = await fetch(`https://gutendex.com/books?search=${encodeURIComponent(query)}`);
    const data = await response.json();
    setBooks(data.results)
    //console.log(data.results)
  }
  return (
    <>
    <SearchBar onSearch={(query) => {
      console.log('Search query:', query);
      handleSearch(query);
    }} />
    <BookList books={books}/>
    </>
  )
}