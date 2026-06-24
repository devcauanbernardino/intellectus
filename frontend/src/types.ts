export type Author = {
  name: string;
  birth_year: number;
  death_year: number;
}

export type Book = {
  id: number;
  title: string;
  authors: Author[]
  formats: {
    [key: string]: string;
  }
}