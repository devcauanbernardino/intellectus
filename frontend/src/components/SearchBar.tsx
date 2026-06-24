import { useState } from 'react';

type SearchBarProps = {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    //    variavel | funcao para trocar o valor da variavel | começa vazio
    const [query, setQuery] = useState('')
    
    return (
        <form className="search-bar" onSubmit={(e) => {
            e.preventDefault(); // cancela carregamento da pagina
            onSearch(query); //vai ser chamada a funcao que vamos criar no App.tsx, passando o valor da query como parametro
        }}>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
            <button type="submit">Search</button>
        </form>
    )
}