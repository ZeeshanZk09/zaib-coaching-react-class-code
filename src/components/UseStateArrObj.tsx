import React, { useState } from "react";

interface TypeFilms {
  id: number;
  title: string;
  description: string;
  price: number;
}

const UseStateArrObj = () => {
  const [films, setFilms] = useState<TypeFilms[]>([
    { id: 1, title: "film 1", description: "Description 1", price: 100 },
    { id: 2, title: "film 2", description: "Description 2", price: 200 },
    { id: 3, title: "film 3", description: "Description 3", price: 300 },
  ]);
  const handleChange = () => {
    setFilms(
      films.map((f: TypeFilms) =>
        f.id === 1 ? { ...f, title: "New title" } : f
      )
    );
  };
  return (
    <div>
      <ul>
        {films.map((f: TypeFilms) => (
          <li key={f.id}>{f.title}</li>
        ))}
      </ul>
      <div>
        <button
          type="button"
          className="bg-black text-white"
          onClick={handleChange}
        >
          click me
        </button>
      </div>
    </div>
  );
};

export default UseStateArrObj;
