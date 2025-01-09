import React, { useState } from "react";

const Library = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "Moby Dick", author: "Herman Melville" },
    { id: 3, title: "1984", author: "George Orwell" },
  ]);
  
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const newId = books.length ? books[books.length - 1].id + 1 : 1;
    setBooks([...books, { id: newId, ...newBook }]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Library Management</h2>
        <p className="text-gray-600 mt-4 text-lg">View and manage the books in the library.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Book List</h3>
        <ul>
          {books.map((book) => (
            <li key={book.id} className="flex justify-between items-center mb-4">
              <div>
                <strong>{book.title}</strong> by {book.author}
              </div>
              <button
                onClick={() => handleDelete(book.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Add New Book</h3>
        <form onSubmit={handleAddBook} className="mt-4">
          <div className="mb-4">
            <input
              type="text"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter book title"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter author name"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Library;
