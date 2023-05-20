export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _PostToTag: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
      }
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      Post: {
        Row: {
          authId: string
          content: string
          createdAt: string
          id: string
          slug: string
          title: string
          updatedAt: string
        }
        Insert: {
          authId: string
          content: string
          createdAt?: string
          id: string
          slug: string
          title: string
          updatedAt?: string
        }
        Update: {
          authId?: string
          content?: string
          createdAt?: string
          id?: string
          slug?: string
          title?: string
          updatedAt?: string
        }
      }
      Profile: {
        Row: {
          bio: string | null
          createdAt: string
          firstName: string | null
          id: string
          lastName: string | null
          updatedAt: string
          username: string | null
        }
        Insert: {
          bio?: string | null
          createdAt?: string
          firstName?: string | null
          id: string
          lastName?: string | null
          updatedAt?: string
          username?: string | null
        }
        Update: {
          bio?: string | null
          createdAt?: string
          firstName?: string | null
          id?: string
          lastName?: string | null
          updatedAt?: string
          username?: string | null
        }
      }
      Tag: {
        Row: {
          createdAt: string
          id: string
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          name: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          updatedAt?: string
        }
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

