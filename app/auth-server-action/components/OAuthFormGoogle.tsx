"use client"
import { Button } from '@/components/ui/button'
import { createBrowserClient } from '@supabase/ssr'
import React from 'react'

export default function OAuthFormGoogle() {

    const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	  )

      const LoginWithGoogle =() => {
        supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo : `${location.origin}/auth-server-action/callback`,
            }
        })
      }

  return <Button className='w-full' onClick={LoginWithGoogle}>
    Login With Google
  </Button>
}
