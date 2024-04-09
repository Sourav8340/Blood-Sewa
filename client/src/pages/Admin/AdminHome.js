import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-danger">{user?.name}</i>
          </h1>
          <h2>Manage Blood-Sewa</h2>
          <hr />
          <p>
          Blood Sewa is a comprehensive web application designed to facilitate blood donation, catering to donors, administrators, hospitals, and organizations. Donors can register on the platform, providing their details and blood type, making it easier for them to be contacted during emergencies. Administrators manage the platform, ensuring smooth operations, verifying donors, and coordinating blood donation drives. Hospitals utilize Blood Sewa to search for compatible donors quickly, streamlining the process of acquiring blood for patients in need. Additionally, organizations can register to organize donation camps or promote awareness campaigns through the platform. With its user-friendly interface and robust features, Blood Sewa acts as a centralized hub for blood donation, fostering a community-driven approach towards saving lives. Whether it's finding donors swiftly or organizing donation events efficiently, Blood Sewa serves as a vital tool in ensuring a steady supply of blood for those in critical need.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;