

export const templateToState = (data) => {
    return {
        ...data, 
        questionTypes: data?.questionsTemplates.map((template) => ({
            type: template.type,
            data: { ...template, options: template.metadata }
        }))
    }
}
