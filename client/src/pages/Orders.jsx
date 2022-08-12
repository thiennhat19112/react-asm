import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { userRequest } from "../requestMethods";
const Container = styled.div``;

const OrderTable = styled.div`
    width:80%;
    margin : 0 auto;

`;

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const currentUser = useSelector((state) => state.user.currentUser);
    useEffect(()=>{
        const getOrders = async ()=>{
            try{
                const res = await userRequest.get(`orders/find/${currentUser._id}`);
                setOrders(res.data)
            }catch(err){
                throw new Error(err);
            }
        }
        getOrders();
        return ()=>{}
    },[currentUser._id])
  return (
    <Container>
      <Navbar />
      <Announcement />
      <OrderTable>
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>Address</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Create at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length ===0 && "Bạn Không có đơn hàng nào"}
           {orders.map(order=>(
            <tr>
            <td>
              <p class="fw-normal mb-1">{order.address.city}</p>
              <p class="text-muted mb-0">{order.address.country}</p>
            </td>
            
            <td>{order.amount}</td>
            <td>
              <span class="badge badge-success rounded-pill d-inline">
                {order.status}
              </span>
            </td>
            <td>
            <p class="fw-normal mb-1">{order.createdAt}</p>
            </td>
            <td>
              <button type="button" class="btn btn-link btn-sm btn-rounded">
                Cancel
              </button>
            </td>
          </tr>
        ))}
          </tbody>
        </table>
      </OrderTable>
      <Footer />
    </Container>
  );
};

export default Orders;
