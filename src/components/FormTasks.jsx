"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function FormTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      }
    );
    const data = await res.json();
    console.log(data);
    router.refresh();
  };

  return (
    <div className="bg-slate-200 p-7 h-fit">
      <form onSubmit={handleSubmit}>
        <h1 className="text-black font-bold">Añadir Tarea</h1>

        <div className="mb-4">
          <label htmlFor="title" className="text-black text-xs block mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-400 rounded-md p-2 w-full text-slate-900"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="text-black text-xs block mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-400 rounded-md p-2 w-full text-slate-900"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white rounded-md p-2 block w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default FormTask;
