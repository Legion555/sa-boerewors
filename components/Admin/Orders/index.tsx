import {useState, useEffect} from 'react'
import axios from 'axios'
//components
import PendingOrders from './PendingOrders'
import CompletedOrders from './CompletedOrders'
//redux
import {useAppSelector, useAppDispatch} from '../../../hooks'
//functions
let _ = require('lodash');
import {numberWithCommas} from '../../../functions/numberWithCommas';


export default function Index() {
    const [completedOrders, setCompletedOrders] = useState([]);

    return(
        <div className="w-full p-4 flex flex-col gap-8">
            <PendingOrders />

            <CompletedOrders />
        </div>
    )
}

