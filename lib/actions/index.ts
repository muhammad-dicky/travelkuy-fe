'use server'
import { cookies } from "next/headers";
import createSupabaseServerClient from "../supabase/server"


export default  async function readUserSession(){

    const cookieStore = cookies()
    const supabase = await createSupabaseServerClient();

    return supabase.auth.getSession();
}