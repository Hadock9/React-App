import { UserRoundX } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LogoImg from '../img/cyberbetlogo.png'
import rootstyle from '../styles/root.module.css'

export function NavBar() {
    const { isRegUser, user, logout } = useAuth()

    return (
        <>
            <header className="flex justify-around items-center w-full h-24 shadow-lg p-3">
                <Link to="/Home">
                    <div className="flex">
                        <div className="h-16 w-16 flex justify-center items-center">
                            <img
                                className="w-[100%] h-auto rounded-full"
                                src={LogoImg}
                                alt="user.picture"
                            />
                        </div>
                        <div
                            className={`text-5xl self-end ml-2 mb-1 ${rootstyle.LogoFont}`}
                        >
                            CyberBet
                        </div>
                    </div>
                </Link>
                <div className="flex gap-[50px]">
                    <Link to="/News">
                        <div className="hover:animate-pulse font-sans font-semibold text-base">
                            Новини
                        </div>
                    </Link>
                    <Link to="/Home">
                        <div className="hover:animate-pulse font-sans font-semibold text-base">
                            Головна
                        </div>
                    </Link>
                    <Link to="/Home">
                        <div className="hover:animate-pulse font-sans font-semibold text-base">
                            Контакти
                        </div>
                    </Link>
                    <Link to="/Home">
                        <div className="hover:animate-pulse font-sans font-semibold text-base">
                            Підтримати
                        </div>
                    </Link>
                </div>

                <div>
                    {isRegUser ? (
                        <div className="flex items-center gap-[10px]">
                            <Link to="/profile">
                                <div className="flex items-center gap-[12px] hover:animate-pulse font-sans font-semibold shadow-lg h-[60px] px-[15px] rounded-xl">
                                    <div className="h-11 w-11 flex justify-center items-center ">
                                        <img
                                            className="w-[100%] h-auto rounded-full"
                                            src={user.picture}
                                            alt="user.picture"
                                        />
                                    </div>
                                    <div>Профіль</div>
                                </div>
                            </Link>
                            <Link to="/Home">
                                <div
                                    onClick={logout}
                                    className="flex items-center hover:animate-pulse font-sans font-semibold shadow-lg h-[60px] px-[15px] text-rose-800 rounded-xl"
                                >
                                    <p>Розлогінитися</p>
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-[10px]">
                            <Link to="/Login">
                                <div className="flex items-center gap-[12px] hover:animate-pulse font-sans font-semibold shadow-lg h-[60px] px-[15px] rounded-xl">
                                    <div className="h-9 w-9 flex justify-center items-center ">
                                        <UserRoundX className="w-[100%] h-auto" />
                                    </div>
                                    <div>Вхід</div>
                                </div>
                            </Link>
                            <Link to="/Registration">
                                <div className="flex items-center hover:animate-pulse font-sans font-semibold shadow-lg h-[60px] px-[15px] rounded-xl">
                                    Зареєструватися
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}
