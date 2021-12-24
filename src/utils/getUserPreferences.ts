import { UserPreferences } from './interfaces'

const getUserPreferences = () => {
    const userPreferences = localStorage.getItem('userPreferences')
    if (userPreferences) {
        const parsed: UserPreferences = JSON.parse(userPreferences)
        return parsed
    }
    return null
}

export default getUserPreferences
