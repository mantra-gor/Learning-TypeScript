import React, { useState } from "react";

const ShoppingList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() !== "") setItems((prev) => [...prev, inputText]);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inp">Shopping List Input: </label>
        <input
          type="text"
          name="inp"
          id="inp"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
