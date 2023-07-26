import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import { http } from "../http/http";

function UpdatePOst({ id, description, title, showpost }) {





  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description,
    title,
  });

  const onChangeListner = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    Updatepost();
  };
  async function Updatepost() {
    await http.put(`/post/${id}`, formData).then((resp) => {
      // showpost();
    });

    // v1/post/:id
  }

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">update post now</h1>
            <form className="flex flex-col">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="title"
                placeholder="titile"
                value={formData.title}
                onChange={(e) => onChangeListner(e)}
              />
              <textarea
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={(e) => onChangeListner(e)}
              />

              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white hover:opacity-80 transition-all duration-500 focus:outline-none my-1"
              >
                updatepost
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePOst;
