import { Link } from 'react-router-dom'
export function UkrainianWar() {
    return (
        <Link to="https://savelife.in.ua/en/">
            <div className="fixed right-[50px] bottom-[50px] z-50 w-[120px] h-[70px] text-center">
                <div className="bg-[#0292c4] h-1/2 w-full flex justify-center items-center">
                    #UkrainianWar
                </div>
                <div className="bg-[#f5c142] h-1/2 w-full flex justify-center items-center">
                    Support
                </div>
            </div>
        </Link>
    )
}
