import { Project } from "./Project";

export type Career = {
  date: Date;
  company: {
    name: string,
    description: string,
    projects: Project[]
  }
}