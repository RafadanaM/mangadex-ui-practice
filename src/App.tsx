import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import About from './pages/About'
import Community from './pages/Community'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Title from './pages/Title'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { UserPreferences } from './utils/interfaces'

const App = () => {
    useEffect(() => {
        const userPreferences = localStorage.getItem('userPreferences')
        if (userPreferences) {
            const parsedPreferences: UserPreferences =
                JSON.parse(userPreferences)
            if (!parsedPreferences.listView) {
                parsedPreferences.listView = 'normal'
                localStorage.setItem(
                    'userPreferences',
                    JSON.stringify(parsedPreferences)
                )
            }
        } else {
            localStorage.setItem(
                'userPreferences',
                JSON.stringify({ listView: 'normal' })
            )
        }
    }, [])
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="titles" element={<Title />} />
                <Route path="community" element={<Community />} />
                <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
