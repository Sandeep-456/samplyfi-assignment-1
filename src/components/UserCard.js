import React from "react";

const UserCard = ({ user }) => {
  // DiceBear avatar URL as specified in the doc (replace username dynamically).
  const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg?seed=${user.username}`;

  return (
    <div className="card rounded-4">
      <div className="rounded-top-4 bg-light w-100 p-3 d-flex justify-content-center ">
        <img
          src={avatarUrl}
          className="w-50"
          alt={`${user.username}'s avatar`}
        />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title text-danger fw-bold">{user.name}</h5>
          <p className="text-center">
            <strong>
              Website:
              <br /> <a href={user.website}>{user.website}</a>
            </strong>
          </p>
        </div>
        <p className="card-text">
          <strong>Username:</strong> {user.username}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="card-text">
          <strong>Company:</strong> {user.company.name}
        </p>
        <p className="card-text">
          <strong>Address:</strong> {user.address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
