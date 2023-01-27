import { User } from "../user";

export interface Experience {
  id?: number,
  student: User,
  startDate: Date,
  endDate: Date | null,
  company: string,
  poste: string
}
