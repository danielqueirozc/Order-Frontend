import { useEffect, useState } from 'react';
import { orderService, Order } from '../services/api';

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await orderService.getOrders();
        setOrders(data);
      } catch (err) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center p-4">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-zinc-100">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      <div className="grid gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-lg font-semibold">
                  Order #{order.id}
                </p>
                <p className="text-gray-600">
                  {new Date(order.createdDate).toLocaleDateString()}
                </p>
              </div>
              <p className="text-xl font-bold">
                ${order.totalValue.toFixed(2)}
              </p>
            </div>
            {order.orderItems && order.orderItems.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Items:</h3>
                <div className="space-y-2">
                  {order.orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <span>{item.product.name}</span>
                      <span>${item.valor.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};