import { User } from "../user"

export interface Education {
  id: number
  student: User
  institution: string
  degree: string
  filed: string
  startDate: Date
  endDate: Date | null
}
