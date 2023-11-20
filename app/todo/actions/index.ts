"use server"

import createSupabaseServerClient from "@/lib/supabase/server"

export async function createTodo(title: string) {

    const supabase = await createSupabaseServerClient();

   const result = await supabase.from("todo-demo").insert({title}).single()

//    const test = await supabase.from("todo").insert({title})

   return JSON.stringify(result)

}

export async function readTodo() {
   const supabase = await createSupabaseServerClient();

   return await supabase.from("todo-demo").select("*")

   // return JSON.stringify(result)
}

export async function deleteTodoById(id: string) {}

export async function updateTodoById(id: string, completed: boolean) {}
