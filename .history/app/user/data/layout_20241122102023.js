import style from "../components/user.module.scss";

export default function UserLayout({ children }) {
  return (
    <div className="l-user">
      <UserAside />
      {children}
    </div>
  );
}
