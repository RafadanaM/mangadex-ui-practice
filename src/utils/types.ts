export const listViews = ['normal', 'dense', 'cover-only'] as const
export type ListView = typeof listViews[number]

export const sorts = [
    'Best Match',
    'Latest Match',
    'Oldest Upload',
    'Title Ascending',
    'Title Descending',
    'Recently Added',
    'Oldest Added',
    'Most Follows',
    'Fewest Follows',
    'Year Ascending',
    'Year Descending',
] as const
export type MangaSort = typeof sorts[number]
