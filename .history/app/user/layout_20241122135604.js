import Aside from "./components/Aside";
export default function UserLayout({ children }) {
  return (
    <div className="l-user">
      <Aside />
      {children}
    </div>
  );
}
