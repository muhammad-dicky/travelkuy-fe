import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import React from 'react'
import { Database } from '../database.types'
import UserDashboard from './UserDashboard'


export default async function page() {
    const supabase = createServerComponentClient<Database>({
        cookies
    })
    const {
        data: { session },

    } = await supabase.auth.getSession()

    return (
        <>
            <div className='m-20 text-4xl'>ini adalah halaman sukses</div>
            <UserDashboard session={session} />
        </>
    )
}