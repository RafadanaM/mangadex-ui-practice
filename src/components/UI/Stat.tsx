import { ReactNode } from 'react'

interface StatI {
    icon: ReactNode
    value: string
}

const Stat = ({ icon, value }: StatI) => {
    return (
        <div className="flex items-center gap-x-0.5 mx-1.5 my-0.5">
            {icon}
            <span className="text-sm ml-0.5">{value}</span>
        </div>
    )
}

export default Stat
