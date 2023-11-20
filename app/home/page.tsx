import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Home() {
    const supabase = createServerComponentClient({cookies});
    const {
        data: {user},
    } = await supabase.auth.getUser();

    if(!user){
        redirect('/signIn');
    }

  return (
    <div>test</div>
  )
}
