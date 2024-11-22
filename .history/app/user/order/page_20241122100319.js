import UserAside from "../components/user-aside";
import OrderList from "./component/order-list";
const Order = () => {
  return (
    <div className="l-user">
      <UserAside />
      <OrderList />
    </div>
  );
};
export default Order;
