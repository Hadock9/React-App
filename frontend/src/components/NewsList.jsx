import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import useFetchGet from '../hooks/fetch/useFetchGet'
import { NewsDate } from '../js/TimeValidation'
import MyLoader from './Loader'

const NewsList = ({ value }) => {
    const { Data, isLoading, failedToFetch } = useFetchGet({
        url: 'http://localhost:4000/api/news/news_list',
    })

    const filterNews = Data.filter((News) => {
        return News.title.toLowerCase().includes(value.toLowerCase())
    })

    if (isLoading) {
        return <MyLoader />
    }

    const Variants = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0 },
    }

    return (
        <>
            {failedToFetch ? (
                <p>Не вдалося завантажити новини. Спробуйте ще раз пізніше.</p>
            ) : (
                filterNews.map((OneNews) => (
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={Variants}
                        className="flex   h-[120px] my-5"
                        key={OneNews.id}
                    >
                        <img
                            src={OneNews.image_url}
                            className="w-[210px] h-32 rounded-md"
                            alt=""
                        />

                        <div className="ml-5">
                            <div className="flex">
                                <Link
                                    to={
                                        '/Home/' +
                                        OneNews.gameName
                                            .replaceAll(' ', '_')
                                            .replaceAll('-', '_') +
                                        `/Matches?game_id=${OneNews.gameId}`
                                    }
                                    className="text-xs"
                                >
                                    {OneNews.gameName}
                                </Link>
                                <span className="ml-3 w-px h-4 bg-gray-400 mr-4"></span>
                                <p className="mr-4 text-gray-400 text-xs">
                                    {NewsDate(OneNews.publish_date)}
                                </p>
                                <Eye className="text-gray-400 h-4 " />
                                <p className="text-gray-600 text-xs  ">
                                    {OneNews.views}
                                </p>
                            </div>
                            <div className="my-3">
                                <Link
                                    to={`${OneNews.gameName.replace(
                                        /[\s-]/g,
                                        '_'
                                    )}?OneNews=${OneNews.id}`}
                                    className="text-base underline"
                                >
                                    {OneNews.title}
                                </Link>
                                <p className="text-sm mt-4">
                                    {OneNews.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))
            )}
        </>
    )
}

export default NewsList
