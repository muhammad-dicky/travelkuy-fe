import { Button } from '@/components/ui/button'
import createSupabaseServerClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function SignOut() {

    const Logout = async () => {
        "use server";
        const supabase = await createSupabaseServerClient();

        await supabase.auth.signOut();

        redirect('/auth-server-action')
    };



  return (
    <form action={Logout}>
        <Button>SignOut</Button>
        
        </form>
  )
}
