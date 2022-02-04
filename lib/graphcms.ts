import { queryTechStacks } from "~/contents/graphcms/tech-stacks"
import { TechStacksObj, VariablesPrevFetch } from "~/types/graphcms"

export async function fetchGraphCMS(query: string, { variables, preview }: VariablesPrevFetch = {}) {
    // console.log(process.env.GRAPHCMS_DEV_AUTH_TOKEN)
    const res = await fetch(process.env.GRAPHCMS_PROJECT_API as string, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query, variables })
    })
    const json = await res.json()

    if (json.errors) {
        throw new Error("Failed to fetch API "+json.errors.map((e: { message: any }) => e.message).join(", "))
    }

    return json.data
}

export async function getTechStacks(): Promise<TechStacksObj[]> {
    const data = await fetchGraphCMS(queryTechStacks, { preview: true })
    return data.techstacks as TechStacksObj[]
}