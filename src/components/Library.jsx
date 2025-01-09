import React, { useState } from "react";
import booksData from "./Books.json";
import Book from "./Book";

const Library = () => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredBooks = Array.isArray(booksData)
    ? booksData.filter((book) => {
        return (
          book.title.toLowerCase().includes(search.toLowerCase()) &&
          (filterCategory ? book.category === filterCategory : true)
        );
      })
    : [];

  return (
    <div className="library bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen py-12 px-8">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center text-indigo-700 mb-10 ">
        Library Catalog
      </h1>
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search for books..."
          className="p-3 border border-indigo-300 rounded-lg w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-3 border border-indigo-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Science">Science</option>
          <option value="Fiction">Fiction</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Library;
