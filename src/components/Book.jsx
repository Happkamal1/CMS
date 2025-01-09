import React, { useEffect, useState } from "react";

const Book = ({ book }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`../BookImg/${book.Img}`)
      .then((module) => {
        setImageSrc(module.default);
      })
      .catch((error) => console.error("Error loading image:", error));
  }, [book.Img]);

  if (!imageSrc) {
    return <p>Loading image...</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 items-center text-center transform transition duration-300 hover:scale-105">
      <div className="flex justify-center items-center">
        <img src={imageSrc} alt={book.title} className="h-64 object-contain" />
      </div>
      <h3 className="font-bold text-lg text-gray-800 mt-4">{book.title}</h3>
      <p className="text-gray-600 mt-2">{book.category}</p>
    </div>
  );
};

export default Book;
