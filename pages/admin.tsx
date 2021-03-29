import { useEffect } from 'react'
//components
import Login from '../components/Admin/Login'
import Index from '../components/Admin'
//redux
import {useAppSelector, useAppDispatch} from '../hooks'
import {resetUserData} from '../slices/userDataSlice'

export default function Admin() {
    const dispatch = useAppDispatch()
    const userData = useAppSelector<any>(state => state.userData.value)
    
    useEffect(() => {
        // if (userData.role && userData.role == 'admin') {
        //     null
        // } else {
            dispatch(resetUserData())
        // }
    }, [])

    return (
        <div className="w-full min-h-screen">

            {userData ?
                <Index />
            :
                <Login />
            }
            
        </div>
    )
}