import { useEffect } from 'react'
//components
import Login from '../components/Admin/Login'
import Index from '../components/Admin'
//redux
import {useAppSelector, useAppDispatch} from '../hooks'
import {resetUserData} from '../slices/userDataSlice'

export default function Admin() {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(state => state.userData.value)
    
    useEffect(() => {
        if (userData && userData.role == 'customer') {
            dispatch(resetUserData())
        }
    }, [])

    return (
        <div className="w-full h-screen">

            {userData ?
                <Index />
            :
                <Login />
            }
            
        </div>
    )
}