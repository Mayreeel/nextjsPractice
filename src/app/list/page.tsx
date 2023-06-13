"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function List() {
  let 상품: string[] = ["Tomatoes", "pasta", "Coconut"];
  const [amount, setAmount] = useState<number[]>([]);

  useEffect(() => {
    let newAmount: number[] = [];

    for (let i = 0; i < 상품.length; i++) {
      newAmount = newAmount.concat(0);
    }
    setAmount(newAmount);
  }, [상품.length]);

  return (
    <div>
      <div className="title">상품목록</div>
      {상품.map((a, i) => (
        <div className="food" key={i}>
          <Image
            src={`/food${i}.png`}
            className="food-img"
            width="400"
            height="400"
            alt={a}
          />
          <h4>{a} $40</h4>
          <span>{amount[i]}</span>
          <button
            onClick={() => {
              setAmount(amount.map((x, y) => (y == i ? x + 1 : x)));
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setAmount(amount.map((x, y) => (y == i ? x - 1 : x)));
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}
