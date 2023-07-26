import React, { useState } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { PostsQuery } from "../query/quries";
import CardSkeleton from "./cardSkeleton";
import { deletePost } from "../query/mutaions";
import UpdatePOst from "./updatpost";
function ReadBlogs() {
  const [hide, show] = useState(false);
  const [title, setitile] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [page_no, setPage_no] = useState(1);
  const [page_limit, setPage_limit] = useState(10);
  const { data, isLoading ,refetch} = useQuery(["POSTS", page_no, page_limit], () =>
    PostsQuery(page_no, page_limit)
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-5">
        {[1, 2, 3, 4].map(() => {
          return <CardSkeleton />;
        })}
      </div>
    );
  }

  const updatePost = (id, title, description) => {
    setitile(title);
    setId(id);
    setDescription(description);
    show(true);
  };
  
  function showpost(){
    show(false);

  }

  return (
    <div>
      {hide ? (
        <UpdatePOst title={title} description={description} id={id} showpost={showpost} />
      ) : (
        <>
          <div className="flex justify-end w-full">
            <NavLink
              to={"create"}
              className={"p-4 rounded bg-gray-400 font-semibold text-white "}
            >
              {" "}
              Create a Post{" "}
            </NavLink>
          </div>
          <div className="p-3 w-full grid grid-cols-4 gap-5">
            {data?.post?.docs?.length > 0 ? (
              data.post.docs.map((item, index) => {
                return (
                  <div className="m-2 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 w-full">
                    {" "}
                    <NavLink to={`${item.id}`}>
                      <div className="m-2 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 w-full">
                        <img
                          className="w-full h-44 object-cover"
                          src={
                            "https://images.unsplash.com/photo-1678067573406-7e206fcfe184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                          }
                          alt="Sunset in the mountains"
                        />
                        <div className="px-6 py-4">
                          <div className="font-bold text-sm mb-2">
                            {item.title}
                          </div>
                          <p className="text-gray-700 text-sm truncate ">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                    <div className="text-center">
                      {/* <NavLink to={"update"}> */}
                      <button
                        className=" text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={() =>
                          updatePost(item.id, item.title, item.description)
                        }
                      >
                        update
                      </button>
                      {/* </NavLink> */}

                      <button
                        className=" text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={() => deletePost(item.id,refetch)}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center w-full">NO Posts found</div>
            )}
          </div>
          <div className="flex justify-center">
            <nav aria-label="Page navigation example">
              <ul className="flex list-style-none">
                <li className="page-item">
                  <button
                    onClick={() => setPage_no(page_no - 1)}
                    disabled={page_no === 1}
                    className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded  focus:shadow-none ${
                      page_no === 1
                        ? "text-gray-400 cursor-not-allowed	 "
                        : "text-gray-800 hover:bg-blue-300  hover:text-gray-800  "
                    }  `}
                  >
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button
                    onClick={() => setPage_no(page_no + 1)}
                    disabled={page_no === data.post.totalPages}
                    className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded  focus:shadow-none ${
                      page_no === data.post.totalPages
                        ? "text-gray-400 cursor-not-allowed "
                        : "text-gray-800 hover:bg-blue-300  hover:text-gray-800  "
                    } `}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default ReadBlogs;
