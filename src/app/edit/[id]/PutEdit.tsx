"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PutEdit(props: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  async function getData() {
    try {
      const dataRes = await fetch(`http://localhost:3000/api/post/${props.id}`);
      const data = await dataRes.json();
      setTitle(data.title);
      setContent(data.content);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > 255) {
      setTitle(inputValue.substring(0, 255));
      alert("대댓글은 255자까지 입력하실 수 있습니다.");
      return;
    }
    setTitle(inputValue);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > 255) {
      setContent(inputValue.substring(0, 255));
      alert("대댓글은 255자까지 입력하실 수 있습니다.");
      return;
    }
    setContent(inputValue);
  };

  async function putData() {
    let data = {
      title: title,
      content: content,
    };
    try {
      const putRes = await fetch(`http://localhost:3000/api/post/${props.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      if (putRes.ok) {
        window.location.assign(`http://localhost:3000/detail/${props.id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="글제목"
      ></input>
      <input
        type="text"
        value={content}
        onChange={handleContentChange}
        placeholder="글내용"
      ></input>
      <button
        type="submit"
        onClick={() => {
          putData();
        }}
      >
        버튼
      </button>
    </div>
  );
}
