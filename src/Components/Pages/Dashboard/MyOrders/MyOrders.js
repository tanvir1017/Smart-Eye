import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Orders from "./Orders";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  console.log(myOrders);
  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  return (
    <>
      {" "}
      <div class="row row-cols-md-3 ms-5 row-cols-sm-1 row-cols-lg-3">
        {myOrders.map((order) => (
          <Orders key={order._id} order={order}></Orders>
        ))}
      </div>
    </>
  );
};

export default MyOrders;
