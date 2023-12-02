export interface ISkill {
    id: number,
    title: string,
    verified: boolean
}
export interface IResponseSkills {
    status: number,
    skills: ISkill[],
}
export interface IResponseSkill {
    status: number,
    skill: ISkill,
}
export interface IResponseDeleteSkill {
    status: number,
    id: number,
}
