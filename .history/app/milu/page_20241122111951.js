import style from "@/app/login/login.module.scss";
const Milu = () => {
  return (
    <div className="l-user">
      <div className={`${style.l_login} pixel-border-yellow bg-yellow`}>
        歡迎光臨，這是顯示專用版本，僅提供版面觀看
      </div>
    </div>
  );
};
export default Milu;
