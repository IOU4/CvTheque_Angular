import { User } from "../user"

export interface Document {
  id?: number
  student: User
  previewImage: string
  title: string
  type: string
}
