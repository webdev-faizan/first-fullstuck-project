import React from "react";

export const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 mt-8">
        <img
          className=" mb-3 rounded-full shadow-lg"
          src="https://firebasestorage.googleapis.com/v0/b/my-frist-project-e9e48.appspot.com/o/images%2Fprofile.jpeg?alt=media&token=7995889b-7390-45f1-b489-dce95ae2f749"
          alt="Bonnie image"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.fullname}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.email}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
