import { useEffect, useState } from "react";
import api from "../services/api";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      const response = await api.get("/customers");

      setCustomers(response.data.customers || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading customers...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Customers
        </h1>

        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-200">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Customer ID</th>
              </tr>
            </thead>

            <tbody>
              {customers.length === 0 ? (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center p-8 text-gray-500"
                  >
                    No customers found.
                  </td>
                </tr>
              ) : (
                customers.map((customer) => (
                  <tr
                    key={customer._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {customer.name}
                    </td>

                    <td className="p-4">
                      {customer.email}
                    </td>

                    <td className="p-4">
                      {customer._id}
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Customers;