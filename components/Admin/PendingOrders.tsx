import { useState, useEffect } from 'react'
import axios from 'axios'



export default function PendingOrders() {
    const [pendingOrders, setPendingOrders] = useState(null)

    useEffect(() => {
        axios.get('/api/orders/getActive')
        .then(response => {
            setPendingOrders(response.data);
        }).catch(error => console.log(error))
    }, [])

    return (
        <div className="w-full">
            <h1>Pending Orders:</h1>
            <div className="w-full flex">
                <h1 className="w-2/12">Email</h1>
                <h1 className="w-2/12">Contact Number</h1>
                <h1 className="w-2/12">Products</h1>
                <h1 className="w-1/12">Total Cost</h1>
            </div>
            <div className="w-full flex flex-col gap-4">
                {pendingOrders && pendingOrders.map(order => 
                    <Order key={order._id} order={order} />
                )}
            </div>
        </div>
    )
}

const Order = ({order}) => {
    return (
        <div className="w-full flex bg-gray-200">
            <h1 className="w-2/12">{order.buyerEmail}</h1>
            <h1 className="w-2/12">{order.shipping.contactNumber}</h1>
            <div className="w-2/12">
                {order.products.map(item => 
                    <div className="flex gap-2">
                        <h1>{item.name}</h1>
                        <p>x{item.quantity}</p>
                    </div>
                )}
            </div>
            <h1 className="w-1/12">{order.totalCost}</h1>
        </div>
    )
}
// const Order = ({order}) => {
//     return (
//         <div className="w-64 h-64 bg-gray-200">
//             <h1>{order.buyerName}</h1>
//             <h1>{order.buyerEmail}</h1>
//             <h1>{order.totalCost}</h1>
//             <h1>Products:</h1>
//             {order.products.map(item => 
//                 <div>
//                     <div className="flex gap-5">
//                         <h1>{item.name}</h1>
//                         <p>x{item.quantity}</p>
//                     </div>
//                     <p>{item.quantity * item.price} Dong</p>
//                 </div>
//             )}
//         </div>
//     )
// }