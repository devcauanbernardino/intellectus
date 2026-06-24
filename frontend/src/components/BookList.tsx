import type { Book } from "../types";

type BookListProps = {
  books: Book[];
};

export default function BookList({ books }: BookListProps) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <img src={book.formats["image/jpeg"]} alt={book.title} />
          <h3>{book.title}</h3>
          <p>Authors: {book.authors.map((author) => author.name).join(", ")}</p>
        </li>
      ))}
    </ul>
  );
}
