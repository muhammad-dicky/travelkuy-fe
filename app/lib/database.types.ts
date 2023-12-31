export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Product: {
        Row: {
          categories: Json | null
          description: string
          id: number
          img: Json | null
          name: string
          price: string
          rating: number
        }
        Insert: {
          categories?: Json | null
          description: string
          id?: number
          img?: Json | null
          name: string
          price: string
          rating: number
        }
        Update: {
          categories?: Json | null
          description?: string
          id?: number
          img?: Json | null
          name?: string
          price?: string
          rating?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      review: {
        Row: {
          description: string
          id: number
          img: string
          name: string
          status: string
        }
        Insert: {
          description: string
          id?: number
          img: string
          name: string
          status: string
        }
        Update: {
          description?: string
          id?: number
          img?: string
          name?: string
          status?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          address: string
          email: string
          id: number
          name: string
          password: string
          phone: number
        }
        Insert: {
          address: string
          email: string
          id?: number
          name: string
          password: string
          phone: number
        }
        Update: {
          address?: string
          email?: string
          id?: number
          name?: string
          password?: string
          phone?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
