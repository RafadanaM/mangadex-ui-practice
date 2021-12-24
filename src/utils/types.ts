export const listViews = ['normal', 'dense', 'cover-only'] as const
export type ListView = typeof listViews[number]
