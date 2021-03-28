import {useEffect, useState} from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
//redux
import {useAppDispatch, useAppSelector} from '../../../hooks'
//components
import Authentication from '../../../components/Authentication'



export default function album() {
    const router = useRouter();

    const userData = useAppSelector(state => state.userData.value)

    useEffect(() => {
        if (userData) {
            return null;
        } else {

        }
    }, [])

    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>{userData && userData.username}</title>
            </Head>

            {userData ?
                <h1>Welcome {userData.username}</h1>
            :
                <Authentication />
            }

            
            
        </div>
    )
}