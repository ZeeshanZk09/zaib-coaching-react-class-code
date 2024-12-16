"use client";
import React, { useState } from "react";

interface TypeUserData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

// const a = [1, 2, 3]
// let b = [4, 5, 6]
// const c = [...a] , b

const UserForm = () => {
  const [useData, setUserData] = useState<TypeUserData>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={useData.name}
          onChange={handleClick}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={useData.email}
          onChange={handleClick}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={useData.phone}
          onChange={handleClick}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={useData.password}
          onChange={handleClick}
        />
      </div>

      <br />
      <button type="submit">Submit</button>

      <section className="flex flex-col gap-2">
        <h2>User Data:</h2>
        <p className="py-2">
          Name: <span>{useData.name}</span>
        </p>
        <p className="py-2">
          Email: <span>{useData.email}</span>{" "}
        </p>
        <p className="py-2">
          Phone: <span>{useData.phone}</span>{" "}
        </p>
        <p className="py-2">
          Password: <span>{useData.password}</span>{" "}
        </p>
      </section>
    </form>
  );
};

export default UserForm;
