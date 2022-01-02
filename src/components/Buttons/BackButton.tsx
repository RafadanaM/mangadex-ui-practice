import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

interface BackButtonI {
    title: string
}

const BackButton = ({ title }: BackButtonI) => {
    const navigate = useNavigate()
    return (
        <div className="flex gap-x-4 items-center mb-4">
            <FiArrowLeft
                onClick={() => navigate('/')}
                className="icon cursor-pointer mt-1"
            />
            <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
    )
}

export default BackButton
