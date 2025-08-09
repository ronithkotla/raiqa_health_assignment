"use client";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import ListView from "./components/ListView";

export default function Home() {
  const [list, setList] = useState<number[]>([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("countList") || "[]");
    setList(savedList);
   }, []);


  useEffect(() => {
    localStorage.setItem("countList", JSON.stringify(list));
  }, [list]);



  return (
    <div className="home_page">
      <h1 className="page_heading">Counter & List App</h1>
      <Counter list={list} addToList={setList} />
      <ListView list={list} removeFromList={setList} />
    </div>
  );
}
