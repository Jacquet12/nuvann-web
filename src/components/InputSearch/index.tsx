import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import './styles.scss';

type Props = {
  placeholder: string;
  onSearch: (query: string) => void;
};

const InputSearch: React.FC<Props> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const debouncedSearch = debounce((query: string) => {
    onSearch(query);
  }, 500);

  useEffect(() => {
    debouncedSearch(query);
    return debouncedSearch.cancel;
  }, [query, debouncedSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleButtonClick = () => {
    debouncedSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
};

export default InputSearch;
