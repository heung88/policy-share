import React from "react";

export const SearchInput = ({ setKeyword }: { setKeyword: (keyword: string) => void }) => {
  const handleKeyword = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    setKeyword(value);
  };

  return (
    <div className="search-management-input">
      <input type="text" onChange={handleKeyword} />
    </div>
  );
};
