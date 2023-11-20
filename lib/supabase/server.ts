"use server"
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers'

export default async function createSupabaseServerClient(){

const cookieStore = cookies()

  
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            get(name: string) {
              return cookieStore.get(name)?.value;
            },
            set(name: string, value: string, options: CookieOptions) {
                try {
                  cookieStore.set({ name, value, ...options })
                  console.log('set cookies berhasil!')
                } catch (error) {
                  console.log('error saat set cookies', error)
                }
              },
              remove(name: string, options: CookieOptions) {
                try {
                  cookieStore.set({ name, value: '', ...options })
                  console.log("cookies berhasil terhapus")
                } catch (error) {
                  console.log("hapus cookies failed:", error)
                }
              },
          },
        }
      )
}