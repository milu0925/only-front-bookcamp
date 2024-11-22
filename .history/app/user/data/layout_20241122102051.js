export default function UserLayout({ children }) {
  return (
    <div className="l-user">
      <UserAside />
      {children}
    </div>
  );
}
