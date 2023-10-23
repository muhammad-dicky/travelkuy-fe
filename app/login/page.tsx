'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { Database } from './database.types'
import styles from './authForm.module.css'

export default function AuthForm() {
    const supabase = createClientComponentClient()

    return (
        <div className='mx-52 my-20'>
            <Auth
                supabaseClient={supabase}
                // view="magic_link"
                appearance={{ theme: ThemeSupa }}
                theme="dark"
                // showLinks={false}
                providers={['google']}
                redirectTo="http://localhost:3000/success/"
            /></div>
    )
}
// import AuthForm from './auth-form'

// export default function Home() {
//     return (
//         <div className="row">
//             <h1>percobaan ini halaman login</h1>
//             <div className="col-6 auth-widget">
//                 {/* <AuthForm /> */}
//             </div>
//         </div>
//     )
// }