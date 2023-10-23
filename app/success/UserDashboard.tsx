'use client'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useState } from 'react'
import { Database } from '../database.types'

export default function UserDashboard({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)
    const user = session?.user

    // const getProfile = useCallback(async () =>{
    //     try {
    //         setLoading
    //     } catch (error) {

    //     }
    // })




    return (
        <>
            <div className='form-widget'>
                <div>
                    <label htmlFor="email">email</label>

                </div>
                <div>
                    <form action="/auth/signout" method='post'>
                        <button className='button block ' type='submit'>
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
