import { Skill } from "./Skill";

export type Project = {
  heading: string
  description: string
  period: {
    from: Date,
    to: Date
  },
  skill: Skill[]
}