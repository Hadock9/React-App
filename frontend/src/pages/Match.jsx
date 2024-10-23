import { Map } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckFetch } from '../components/BadFatchDisclaimer'
import { UkrainianWar } from '../components/BlockSaveUkraine'
import { BurgerMenu } from '../components/BurgerMenu'
import { Footer } from '../components/Footer'
import MyLoader from '../components/Loader'
import { NavBar } from '../components/NavBar'
import useFetchGet from '../hooks/fetch/useFetchGet'
import { extractHoursAndMinutes, formatDate } from '../js/TimeValidation'
import rootstyle from '../styles/root.module.css'
import { Link } from 'react-router-dom'
import MatchComments from '../components/MatchComments'

export function Match() {
    const [searchParams] = useSearchParams()
    const idMatch = searchParams.get('idMatch')
    const [match, setMatch] = useState(null)

    const { Data, isLoading, failedToFetch } = useFetchGet({
        url: 'http://localhost:4000/api/games/match/Match',
        id: idMatch,
    })

    useEffect(() => {
        if (Data) {
            setMatch(Data[0])
        }
    }, [Data])

    if (isLoading) {
        return <MyLoader />
    }

    if (!match) {
        return <CheckFetch />
    }

    return (
        <div className={rootstyle.wrapper}>
            <NavBar />
            <UkrainianWar />
            <div className={rootstyle.Container}>
                <BurgerMenu />

                <main className={rootstyle.Main}>
                    {/* bg-[#393e46] */}
                    <div className="">
                        <div className="flex justify-between w-full h-full bg-gray-700 rounded-t-lg">
                            {/* Блок для команди 1 */}
                            <div
                                className="relative w-[40%] h-[260px] flex justify-center items-center px-5 rounded-tl-lg"
                                style={{
                                    backgroundImage: `linear-gradient(to right, rgba(57, 62, 70, 0.8), rgba(57, 62, 70, 0)), url(/${match.Team1Country})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'left',
                                }}
                            >
                                <img
                                    draggable="false"
                                    className="h-[100px] w-[100px] object-contain mx-[10%]"
                                    src={'/' + match.Team1Logo}
                                    alt={match.Team1Name}
                                />
                                <div className="flex items-center justify-center bg-gray-700 bg-opacity-60 rounded-full mr-5 w-[40%]">
                                    <p className="text-center font-semibold text-white text-[22px]">
                                        {match.Team1Name}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-between font-bold text-white text-[22px] mt-2 h-[80%]">
                                    <div className="mt-4 p-2 rounded-full bg-gray-700 bg-opacity-60 w-12 h-12 flex justify-center items-center">
                                        <p>{match.Team1Coef}</p>
                                    </div>
                                    <div className="mt-4 p-2 rounded-full bg-gray-700 bg-opacity-60 w-12 h-12 flex justify-center items-center">
                                        {match.Team1Score > match.Team2Score ? (
                                            <p className="text-green-700">
                                                {match.Team1Score}
                                            </p>
                                        ) : (
                                            <p className="text-red-700">
                                                {match.Team1Score}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Блок для відображення результату матчу */}
                            <div className="flex flex-col items-center justify-center w-[20%] h-[260px] text-white text-[18px]">
                                <p className="font-semibold text-center">
                                    {formatDate(match.VsDate)}
                                </p>
                                <p className="font-bold">Vs</p>
                                <p className="font-bold text-[24px]">
                                    {extractHoursAndMinutes(match.time)}
                                </p>
                            </div>

                            {/* Блок для команди 2 */}
                            <div
                                className="relative w-[40%] h-[260px] flex flex-row-reverse justify-center items-center px-5 rounded-tr-lg"
                                style={{
                                    backgroundImage: `linear-gradient(to left, rgba(57, 62, 70, 0.8), rgba(57, 62, 70, 0)), url(/${match.Team2Country})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right',
                                }}
                            >
                                <img
                                    draggable="false"
                                    className="h-[100px] w-[100px] object-contain mx-[10%]"
                                    src={'/' + match.Team2Logo}
                                    alt={match.Team2Name}
                                />
                                <div className="flex items-center justify-center bg-gray-700 bg-opacity-60 rounded-full ml-5 w-[40%]">
                                    <p className="text-center font-semibold text-white text-[22px]">
                                        {match.Team2Name}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-between font-bold text-white text-[22px] mt-2 h-[80%]">
                                    <div className="mt-4 p-2 rounded-full bg-gray-700 bg-opacity-60 w-12 h-12 flex justify-center items-center">
                                        <p>{match.Team2Coef}</p>
                                    </div>
                                    <div className="mt-4 p-2 rounded-full bg-gray-700 bg-opacity-60 w-12 h-12 flex justify-center items-center">
                                        {match.Team2Score > match.Team1Score ? (
                                            <p className="text-green-700">
                                                {match.Team2Score}
                                            </p>
                                        ) : (
                                            <p className="text-red-700">
                                                {match.Team2Score}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Заголовок для статистики команд по картах */}
                        <div className="flex w-full bg-gray-700 text-white justify-between rounded-b-lg">
                            <div className="flex w-[40%] justify-center">
                                <Link
                                    to={`/Stake?MatchId=${idMatch}&TeamId=${match.Team1ID}`}
                                >
                                    <div className="flex align-center rounded-2xl bg-amber-500 px-[20px] py-[10px] my-3 hover:bg-amber-400 text-white duration-300 ">
                                        Зробити ставку із коефіцієнтом
                                    </div>
                                </Link>
                            </div>
                            <div className="flex w-[40%] justify-center">
                                <Link
                                    to={`/Stake?MatchId=${idMatch}&TeamId=${match.Team2ID}`}
                                >
                                    <div className="flex align-center rounded-2xl bg-amber-500 px-[20px] py-[10px] my-3 hover:bg-amber-400 text-white duration-300  ">
                                        Зробити ставку із коефіцієнтом
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-center my-4">
                            <Map className="text-black" />
                            <h3 className="text-black text-lg ml-2">Карти</h3>
                        </div>

                        {/* Блок для відображення таблиць карт */}
                        <div className="flex flex-wrap justify-between w-full">
                            {/* Map 1 */}
                            <div className="w-full sm:w-1/3 p-2">
                                <table className="w-full text-center bg-gray-800 rounded-lg overflow-hidden">
                                    <caption className="text-white bg-gray-600 content-center p-2 font-bold">
                                        <p>[MapName]</p>
                                    </caption>
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="p-2 text-white w-[45%]">
                                                {match.Team1Name}
                                            </th>
                                            <th className="p-2 text-white"></th>
                                            <th className="p-2 text-white w-[45%]">
                                                {match.Team2Name}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                Kills
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                Deaths
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                10K
                                            </td>
                                            <td className="p-2 text-white">
                                                Gold
                                            </td>
                                            <td className="p-2 text-white">
                                                10K
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                            <td className="p-2 text-white">
                                                Score
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Map 2 */}
                            <div className="w-full sm:w-1/3 p-2">
                                <table className="w-full text-center bg-gray-800 rounded-lg overflow-hidden">
                                    <caption className="text-white bg-gray-600 content-center p-2 font-bold">
                                        <p>[MapName]</p>
                                    </caption>
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="p-2 text-white w-[45%]">
                                                {match.Team1Name}
                                            </th>
                                            <th className="p-2 text-white"></th>
                                            <th className="p-2 text-white w-[45%]">
                                                {match.Team2Name}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                Kills
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                Deaths
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                10K
                                            </td>
                                            <td className="p-2 text-white">
                                                Gold
                                            </td>
                                            <td className="p-2 text-white">
                                                10K
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                            <td className="p-2 text-white">
                                                Score
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Map 3 */}
                            <div className="w-full sm:w-1/3 p-2">
                                <table className="w-full text-center bg-gray-800 rounded-lg overflow-hidden">
                                    <caption className="text-white bg-gray-600 content-center p-2 font-bold">
                                        <p>[MapName]</p>
                                    </caption>
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="p-2 text-white w-[45%]">
                                                {match.Team1Name}
                                            </th>
                                            <th className="p-2 text-white"></th>
                                            <th className="p-2 text-white w-[45%]">
                                                {match.Team2Name}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                Kills
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                Deaths
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                10K
                                            </td>
                                            <td className="p-2 text-white">
                                                Gold
                                            </td>
                                            <td className="p-2 text-white">
                                                10K
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                            <td className="p-2 text-white">
                                                Score
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Заголовок для статистики гравців*/}
                        <div className="flex items-center my-4 justify-center">
                            <Map className="text-black" />
                            <h3 className="text-black text-lg ml-2 ">
                                Статистика Гравців
                            </h3>
                        </div>

                        {/* Блок для відображення таблиць статистики гравців */}
                        <div className="flex flex-wrap justify-between w-full">
                            {/* Team 1 */}
                            <div className="w-full sm:w-1/2 p-2">
                                <table className="w-full text-center bg-gray-800 rounded-lg overflow-hidden">
                                    <caption className="text-white p-2 font-bold bg-gray-600">
                                        <p>{match.Team1Name}</p>
                                    </caption>
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="p-2 text-white">
                                                Name
                                            </th>
                                            <th className="p-2 text-white">
                                                Kill
                                            </th>
                                            <th className="p-2 text-white">
                                                Death
                                            </th>
                                            <th className="p-2 text-white">
                                                Assists
                                            </th>
                                            <th className="p-2 text-white">
                                                Gold
                                            </th>
                                            <th className="p-2 text-white">
                                                Score
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Team 2 */}
                            <div className="w-full sm:w-1/2 p-2">
                                <table className="w-full text-center bg-gray-800 rounded-lg overflow-hidden">
                                    <caption className="text-white p-2 font-bold bg-gray-600">
                                        <p>{match.Team1Name}</p>
                                    </caption>
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="p-2 text-white">
                                                Name
                                            </th>
                                            <th className="p-2 text-white">
                                                Kill
                                            </th>
                                            <th className="p-2 text-white">
                                                Death
                                            </th>
                                            <th className="p-2 text-white">
                                                Assists
                                            </th>
                                            <th className="p-2 text-white">
                                                Gold
                                            </th>
                                            <th className="p-2 text-white">
                                                Score
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between w-full">
                            {/* Team 1 */}
                            <div className="w-full sm:w-1/2 p-2">
                                <table className="w-full text-center bg-gray-800 rounded-lg overflow-hidden">
                                    <caption className="text-white p-2 font-bold bg-gray-600">
                                        <p>{match.Team1Name}</p>
                                    </caption>
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="p-2 text-white">
                                                Name
                                            </th>
                                            <th className="p-2 text-white">
                                                Kill
                                            </th>
                                            <th className="p-2 text-white">
                                                Death
                                            </th>
                                            <th className="p-2 text-white">
                                                Assists
                                            </th>
                                            <th className="p-2 text-white">
                                                Gold
                                            </th>
                                            <th className="p-2 text-white">
                                                Score
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Team 2 */}
                            <div className="w-full sm:w-1/2 p-2">
                                <table className="w-full text-center bg-gray-800 rounded-lg overflow-hidden">
                                    <caption className="text-white p-2 font-bold bg-gray-600">
                                        <p>{match.Team1Name}</p>
                                    </caption>
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="p-2 text-white">
                                                Name
                                            </th>
                                            <th className="p-2 text-white">
                                                Kill
                                            </th>
                                            <th className="p-2 text-white">
                                                Death
                                            </th>
                                            <th className="p-2 text-white">
                                                Assists
                                            </th>
                                            <th className="p-2 text-white">
                                                Gold
                                            </th>
                                            <th className="p-2 text-white">
                                                Score
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between w-full">
                            {/* Team 1 */}
                            <div className="w-full sm:w-1/2 p-2">
                                <table className="w-full text-center bg-gray-800 rounded-lg overflow-hidden">
                                    <caption className="text-white p-2 font-bold bg-gray-600">
                                        <p>{match.Team1Name}</p>
                                    </caption>
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="p-2 text-white">
                                                Name
                                            </th>
                                            <th className="p-2 text-white">
                                                Kill
                                            </th>
                                            <th className="p-2 text-white">
                                                Death
                                            </th>
                                            <th className="p-2 text-white">
                                                Assists
                                            </th>
                                            <th className="p-2 text-white">
                                                Gold
                                            </th>
                                            <th className="p-2 text-white">
                                                Score
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Team 2 */}
                            <div className="w-full sm:w-1/2 p-2">
                                <table className="w-full text-center bg-gray-800 rounded-lg overflow-hidden">
                                    <caption className="text-white p-2 font-bold bg-gray-600">
                                        <p>{match.Team1Name}</p>
                                    </caption>
                                    <thead>
                                        <tr className="bg-gray-700">
                                            <th className="p-2 text-white">
                                                Name
                                            </th>
                                            <th className="p-2 text-white">
                                                Kill
                                            </th>
                                            <th className="p-2 text-white">
                                                Death
                                            </th>
                                            <th className="p-2 text-white">
                                                Assists
                                            </th>
                                            <th className="p-2 text-white">
                                                Gold
                                            </th>
                                            <th className="p-2 text-white">
                                                Score
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 text-white">
                                                s1mple
                                            </td>
                                            <td className="p-2 text-white">
                                                100
                                            </td>
                                            <td className="p-2 text-white">
                                                10
                                            </td>
                                            <td className="p-2 text-white">
                                                15
                                            </td>
                                            <td className="p-2 text-white">
                                                15K
                                            </td>
                                            <td className="p-2 text-white">
                                                [score]
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <MatchComments id={idMatch} />
                </main>
            </div>
            <Footer />
        </div>
    )
}
