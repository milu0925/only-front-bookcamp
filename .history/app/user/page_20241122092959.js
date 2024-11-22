"use client";
import UserAside from "./components/user-aside";
import UserCard from "./components/user-card";
import UserDaily from "./components/user-daily";
const User = () => {
  return (
    <div className="l-user">
      <UserAside />
      <UserCard />
      <UserDaily />
    </div>
  );
};

export default User;
