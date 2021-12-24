import { FiArrowRight } from 'react-icons/fi'

interface ContentTitleI {
    title: string
}

const ContentTitle = ({ title }: ContentTitleI) => {
    return (
        <div className="flex items-center justify-between mt-10 mb-4">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <FiArrowRight className="icon" />
        </div>
    )
}

export default ContentTitle
