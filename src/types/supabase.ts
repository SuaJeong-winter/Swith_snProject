export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Assignment: {
        Row: {
          deadline: Date
          description: string | null
          id: string
          study_id: string
          verificationMethod: string | null
        }
        Insert: {
          deadline?: Date
          description?: string | null
          id: string
          study_id: string
          verificationMethod?: string | null
        }
        Update: {
          deadline?: Date
          description?: string | null
          id?: string
          study_id?: string
          verificationMethod?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'Assignment_study_id_fkey'
            columns: ['study_id']
            isOneToOne: false
            referencedRelation: 'Study'
            referencedColumns: ['id']
          },
        ]
      }
      MeetieBadge: {
        Row: {
          badge_img: Json | null
          badgename: string
          comment_hap: string | null
          host_hap: string | null
          id: string
          level: string | null
          point_hap: string | null
        }
        Insert: {
          badge_img?: Json | null
          badgename: string
          comment_hap?: string | null
          host_hap?: string | null
          id: string
          level?: string | null
          point_hap?: string | null
        }
        Update: {
          badge_img?: Json | null
          badgename?: string
          comment_hap?: string | null
          host_hap?: string | null
          id?: string
          level?: string | null
          point_hap?: string | null
        }
        Relationships: []
      }
      Meetup: {
        Row: {
          description: string
          id: string
          place: string | null
          schedule: Date
          study_id: string | null
        }
        Insert: {
          description: string
          id?: string
          place?: string | null
          schedule?: Date
          study_id?: string | null
        }
        Update: {
          description?: string
          id?: string
          place?: string | null
          schedule?: Date
          study_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'Meetup_study_id_fkey'
            columns: ['study_id']
            isOneToOne: false
            referencedRelation: 'Study'
            referencedColumns: ['id']
          },
        ]
      }
      Study: {
        Row: {
          curriculum: string
          deadline: string
          end_date: string
          goal: string
          id: string
          info: string
          max_member: number
          member: string[]
          owner: string
          recruit_type: string[]
          regular_days: string
          regular_time: string
          start_date: string
          status: boolean
          tags: string[]
          title: string
          writing_datetime: string
        }
        Insert: {
          curriculum?: string | null
          deadline?: string | null
          end_date?: string | null
          goal?: string | null
          id: string
          info?: string | null
          max_member?: number | null
          member?: string[] | null
          owner?: string | null
          recruit_type?: string[] | null
          regular_days?: string | null
          regular_time?: string | null
          start_date?: string | null
          status?: boolean | null
          tags?: string[] | null
          title: string
          writing_datetime?: string | null
        }
        Update: {
          curriculum?: string | null
          deadline?: string | null
          end_date?: string | null
          goal?: string | null
          id?: string
          info?: string | null
          max_member?: number | null
          member?: string[] | null
          owner?: string | null
          recruit_type?: string[] | null
          regular_days?: string | null
          regular_time?: string | null
          start_date?: string | null
          status?: boolean | null
          tags?: string[] | null
          title?: string
          writing_datetime?: string | null
        }
        Relationships: []
      }
      'Study-apply': {
        Row: {
          id: string
          introduce: string | null
          status: boolean | null
          study_id: string | null
          user_id: string | null
          writing_datetime: string | null
        }
        Insert: {
          id?: string
          introduce?: string | null
          status?: boolean | null
          study_id?: string | null
          user_id?: string | null
          writing_datetime?: string | null
        }
        Update: {
          id?: string
          introduce?: string | null
          status?: boolean | null
          study_id?: string | null
          user_id?: string | null
          writing_datetime?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'Study-apply_study_id_fkey'
            columns: ['study_id']
            isOneToOne: false
            referencedRelation: 'Study'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'Study-apply_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'User'
            referencedColumns: ['id']
          },
        ]
      }
      SubmitAssignment: {
        Row: {
          assignment_id: string | null
          comments: Json[] | null
          desc: string | null
          id: string
          image: string
          study_id: string | null
          temp_status: boolean[] | null
          user_id: string | null
          writing_datetime: string | null
        }
        Insert: {
          assignment_id?: string | null
          comments?: Json[] | null
          desc?: string | null
          id: string
          image: string
          study_id?: string | null
          temp_status?: boolean[] | null
          user_id?: string | null
          writing_datetime?: string | null
        }
        Update: {
          assignment_id?: string | null
          comments?: Json[] | null
          desc?: string | null
          id?: string
          image?: string
          study_id?: string | null
          temp_status?: boolean[] | null
          user_id?: string | null
          writing_datetime?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'SubmitAssignment_assignment_id_fkey'
            columns: ['assignment_id']
            isOneToOne: false
            referencedRelation: 'Assignment'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'SubmitAssignment_study_id_fkey'
            columns: ['study_id']
            isOneToOne: false
            referencedRelation: 'Study'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'SubmitAssignment_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'User'
            referencedColumns: ['id']
          },
        ]
      }
      User: {
        Row: {
          badge: string[] | null
          badge_exp: Json[] | null
          comments: string[] | null
          friends: string[] | null
          id: string
          introduce: string | null
          job_type: string | null
          name: string | null
          profile_img: string | null
          study_list: string[] | null
          study_period: string | null
          study_purpose: string[] | null
          study_style: string[] | null
        }
        Insert: {
          badge?: string[] | null
          badge_exp?: Json[] | null
          comments?: string[] | null
          friends?: string[] | null
          id: string
          introduce?: string | null
          job_type?: string | null
          name?: string | null
          profile_img?: string | null
          study_list?: string[] | null
          study_period?: string | null
          study_purpose?: string[] | null
          study_style?: string[] | null
        }
        Update: {
          badge?: string[] | null
          badge_exp?: Json[] | null
          comments?: string[] | null
          friends?: string[] | null
          id?: string
          introduce?: string | null
          job_type?: string | null
          name?: string | null
          profile_img?: string | null
          study_list?: string[] | null
          study_period?: string | null
          study_purpose?: string[] | null
          study_style?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: 'User_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      StudyroomTest: {
        Row: {
          timestamp: Date
          description: string
          id: string
          photo: string
        }
        Insert: {
          timestamp: Date
          description: string
          id?: string
          photo: string
        }
        Update: {
          description?: string
          id?: string
          photo?: string
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

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never
