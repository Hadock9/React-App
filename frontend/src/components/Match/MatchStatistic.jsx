import React from 'react'

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function getRndStat() {
    const RndMap = new Map()
    RndMap.set('kills', getRndInteger(20, 100))
    RndMap.set('deaths', getRndInteger(20, 100))
    RndMap.set('assists', getRndInteger(20, 100))
    RndMap.set(
        'score',
        (RndMap.get('kills') / (RndMap.get('deaths') + RndMap.get('assists'))).toFixed(2)
    )
    return RndMap
}

export const MapStat = ({ match }) => {
    const team1 = getRndStat()
    const team2 = getRndStat()

    return (
        <div className='w-full sm:w-1/3 p-2'>
            <table className='w-full text-center bg-gray-800 rounded-lg overflow-hidden'>
                <caption className='text-white bg-gray-600 content-center p-2 font-bold'>
                    <p>Match</p>
                </caption>
                <thead>
                    <tr className='bg-gray-700'>
                        <th className='p-2 text-white w-[45%]'>Team</th>
                        <th className='p-2 text-white'></th>
                        <th className='p-2 text-white w-[45%]'>Team</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2 text-white'>{team1.get('kills')}</td>
                        <td className='p-2 text-white'>Kills</td>
                        <td className='p-2 text-white'>{team2.get('kills')}</td>
                    </tr>
                    <tr>
                        <td className='p-2 text-white'>{team1.get('deaths')}</td>
                        <td className='p-2 text-white'>Deaths</td>
                        <td className='p-2 text-white'>{team2.get('deaths')}</td>
                    </tr>
                    <tr>
                        <td className='p-2 text-white'>{team1.get('assists')}</td>
                        <td className='p-2 text-white'>Assists</td>
                        <td className='p-2 text-white'>{team2.get('assists')}</td>
                    </tr>
                    <tr>
                        <td className='p-2 text-white'>{team1.get('score')}</td>
                        <td className='p-2 text-white'>Score</td>
                        <td className='p-2 text-white'>{team2.get('score')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const PlayerStat = ({ match }) => {
    return (
        <div className='w-full sm:w-1/2 p-2'>
            <table className='w-full text-center bg-gray-800 rounded-lg overflow-hidden'>
                <caption className='text-white p-2 font-bold bg-gray-600'>
                    <p>Team</p>
                </caption>
                <thead>
                    <tr className='bg-gray-700'>
                        <th className='p-2 text-white'>Name</th>
                        <th className='p-2 text-white'>Kill</th>
                        <th className='p-2 text-white'>Death</th>
                        <th className='p-2 text-white'>Assists</th>

                        <th className='p-2 text-white'>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {(() => {
                        let stats = []
                        for (let index = 1; index <= 5; index++) {
                            let map = getRndStat()
                            stats.push(
                                <tr>
                                    <td className='p-2 text-white'>player {index}</td>
                                    <td className='p-2 text-white'>{map.get('kills')}</td>
                                    <td className='p-2 text-white'>{map.get('deaths')}</td>
                                    <td className='p-2 text-white'>{map.get('assists')}</td>
                                    <td className='p-2 text-white'>{map.get('score')}</td>
                                </tr>
                            )
                        }
                        return stats
                    })()}
                </tbody>
            </table>
        </div>
    )
}
