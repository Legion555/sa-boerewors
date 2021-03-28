import {useState} from 'react'
//icons
import {CgProfile} from 'react-icons/cg'
import {FiHome, FiShoppingBag} from 'react-icons/fi'
import {IoReceiptOutline} from 'react-icons/io5'



export default function Nav({view, setView}) {
    return (
        <div className="w-64 h-screen fixed top-0 left-0 bg-white">
            <h1 className="mb-4 pt-4 text-center text-2xl font-bold">SA Boerewors</h1>
            <div className="flex flex-col gap-2 px-4">
                {/* <Link name={'Dashboard'} iconName={FiHome} isActive={view === 'dashboard' ? true : false} cta={() => setView('dashboard')} /> */}
                <Link name={'Products'} iconName={FiShoppingBag} isActive={view === 'products' ? true : false} cta={() => setView('products')} />
                <Link name={'Orders'} iconName={IoReceiptOutline} isActive={view === 'orders' ? true : false} cta={() => setView('orders')} />
                {/* <Link name={'Customers'} iconName={CgProfile} isActive={view === 'customers' ? true : false} cta={() => setView('customers')} /> */}
            </div>
        </div>
    )
}

function Link({name, iconName, isActive, cta}) {
    const Icon = iconName;

    return (
        <div className={`flex items-center gap-2 pl-2 py-3 rounded-xl hover:text-gray-200 hover:bg-blue-600 cursor-pointer ${isActive && 'text-gray-200 bg-blue-600'}`}
            onClick={cta} >
            <Icon className={`inline-block text-xl`} />
            <p className="text-xl">{name}</p>
        </div>
       
    )
}