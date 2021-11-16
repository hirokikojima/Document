export enum SkillName {
  /* Environment */
  'AWS',
  'Azure',
  'GCP',
  /* Language */
  'CSS',
  'C',
  'C++',
  'C#',
  'Go',
  'HTML',
  'Java',
  'Javascript',
  'Node.js',
  'PHP',
  'Python',
  'Typescript',
  /* Framework */
  'ASP.NET MVC',
  'CakePHP',
  'CodeIgniter',
  'FuelPHP',
  'Laravel',
  'Next',
  'Nuxt',
  'React',
  'Seasar',
  'Spring',
  'Struts',
  'Vue',
  /* Database */
  'Oracle',
  'MongoDB',
  'MySQL',
  'redis',
  'SQL Server',
  /* Tools */
  'Docker',
  'gRPC',
  'Jenkins',
  'Swagger'
}

export enum SkillLevel {
  Junior,
  Middle,
  Senior
}

export type Skill = {
  name: SkillName,
  year: number,
  level: SkillLevel
}