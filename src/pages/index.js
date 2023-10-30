import Layout from "@/layout";
import {
  IoEyeOutline,
  IoCartOutline,
  IoChatbubblesOutline,
  IoCashOutline,
} from "react-icons/io5";

export default function Home() {
  return (
    <Layout title={"Dashboard"}>
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">1,504</div>
            <div className="cardName">Daily Views</div>
          </div>

          <div className="iconBx">
            <IoEyeOutline scale={"lg"} />
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">80</div>
            <div className="cardName">Sales</div>
          </div>

          <div className="iconBx">
            <IoCartOutline scale={"lg"} />
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">284</div>
            <div className="cardName">Comments</div>
          </div>

          <div className="iconBx">
            <IoChatbubblesOutline scale={"lg"} />
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">$7,842</div>
            <div className="cardName">Earning</div>
          </div>

          <div className="iconBx">
            <IoCashOutline scale={"lg"} />
          </div>
        </div>
      </div>

      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Recent Orders</h2>
            <a href="#" className="btn">
              View All
            </a>
          </div>
        </div>

        <div className="recentCustomers">
          <div className="cardHeader">
            <h2>Recent Customers</h2>
          </div>
        </div>
      </div>

    </Layout>
  );
}
