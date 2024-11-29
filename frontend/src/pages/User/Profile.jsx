import { color, motion } from 'framer-motion'
import { UkrainianWar } from '../../components/UserExpirience/BlockSaveUkraine'

import { jwtDecode } from 'jwt-decode'
import { UserRound } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import MyLoader from '../../components/Disclaimer/Loader'
import { NotAuthorized } from '../../components/Disclaimer/NotAuthorized'
import NavBar from '../../components/UserExpirience/NavBar'
import { useAuth } from '../../context/AuthContext'
import useFetchGet from '../../hooks/useFetchGet'
import {
    validateDate_of_birth,
    validateLastName,
    validateName,
    validatePhone,
} from '../../js/FormValidation'
import { formatDate } from '../../js/TimeValidation'
import rootstyle from '../../styles/root.module.css'

export function Profile() {
    const navigate = useNavigate()

    const [FormValid, setFormValid] = useState(false)
    const { setIsRegUser, setUser, user, isRegUser } = useAuth()
    const [UserProfile, setUserProfile] = useState(null)
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        date_of_birth: '',
        gender: '',
        email: '',
        documentNumber: '',
        phone: '',
        country: '',
        pictureSrc: '',
    })
    const [AllCountries, setAllCountries] = useState([])
    // api з усіма крїнами світу
    const { Data, isLoading, failedToFetch } = useFetchGet({
        url: 'https://restcountries.com/v3.1/all',
    })
    useEffect(() => {
        if (Data) {
            setAllCountries(Data)
        }
    }, [Data])

    const [First_NameError, setFirst_NameError] = useState('')
    const [Last_NameError, setLast_NameError] = useState('')
    const [Date_of_birthError, setDate_of_birthError] = useState('')
    const [PhoneError, setPhoneError] = useState('')
    const [CountryError, setCountryError] = useState('')

    const [First_NameDirty, setFirst_NameDirty] = useState(false)
    const [Last_NameDirty, setLast_NameDirty] = useState(false)
    const [Date_of_birthDirty, setDate_of_birthDirty] = useState(false)
    const [PhoneDirty, setPhoneDirty] = useState(false)
    const [CountryDirty, setCountryDirty] = useState(false)

    useEffect(() => {
        if (Date_of_birthError || First_NameError || Last_NameError || CountryError || PhoneError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [PhoneError, First_NameError, Last_NameError, CountryError, Date_of_birthError])
    // Обробник зміни вводу для PhoneHandler з валідацією
    const PhoneHandler = (e) => {
        handleChange(e)
        setPhoneError(validatePhone(e.target.value))
    }

    // Обробник зміни вводу для прізвища з валідацією
    const Last_NameHandler = (e) => {
        handleChange(e)
        setLast_NameError(validateLastName(e.target.value))
    }
    // Обробник зміни вводу для Date_of_birthHandler з валідацією
    const Date_of_birthHandler = (e) => {
        handleChange(e)
        console.log(e.target.value)
        setDate_of_birthError(validateDate_of_birth(e.target.value))
    }

    // Обробник зміни вводу для імені з валідацією
    const First_NameHandler = (e) => {
        handleChange(e)

        setFirst_NameError(validateName(e.target.value))
    }

    // Оновлюємо UserProfile, коли user змінюється
    useEffect(() => {
        if (user) {
            setUserProfile(user)
            setFormData({
                id: user.id,
                firstName: user.first_name,
                lastName: user.last_name,
                date_of_birth: formatDate(user.date_of_birth),
                gender: user.gender,
                email: user.email,
                created_at: formatDate(user.created_at),
                phone: user.phone_number,
                country: user.country,
                pictureSrc: user.picture,
            })
        }
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    // Обробник зміни вводу для CountryHandler з валідацією
    const CountryHandler = (options) => {
        setFormData((prevState) => ({
            ...prevState,
            country: options.label,
        }))
    }

    const handleSave = async (e) => {
        e.preventDefault()

        const updatedData = {
            id: formData.id,
            first_name: formData.firstName,
            last_name: formData.lastName,
            date_of_birth: formData.date_of_birth,
            gender: formData.gender,
            phone: formData.phone,
            country: formData.country,
        }

        fetch('http://localhost:4000/api/user/updateProfile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(updatedData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.log('Error:', data.error)
                    alert(data.error)
                    return
                }
                console.log('Login successful:', data)
                localStorage.setItem('token', data.token)
                console.log('Оновлення даних пройшло успішно:', data.message)
                const decoded = jwtDecode(data.token)
                setIsRegUser(true)
                setUser(decoded)
                navigate(0)
            })
            .catch((error) => {
                console.error('Error during login:', error)
            })
    }

    if (!isRegUser) {
        return <NotAuthorized />
    }

    if (!UserProfile) {
        return <div>Завантаження даних профілю...</div>
    }
    if (isLoading) {
        return <MyLoader />
    }

    return (
        <div className={rootstyle.wrapper}>
            <NavBar />
            <UkrainianWar />
            <div className={rootstyle.Container}>
                <main className={rootstyle.Main}>
                    <div className="h-[85vh] flex justify-center items-center mt-16">
                        <form
                            onSubmit={handleSave}
                            className="flex w-[90%] sm:w-[70%] lg:w-[50%] justify-center rounded-2xl bg-gray-700 border border-black border-opacity-10 shadow-lg mt-16"
                        >
                            <div className="flex flex-col w-full items-center">
                                <div className="flex flex-col sm:flex-row w-full">
                                    <div className="flex grow justify-center items-center p-5">
                                        <div className="h-[96px] w-[96px] flex justify-center items-center bg-white rounded-full">
                                            {/* Зображення профілю */}
                                            {formData.pictureSrc ? (
                                                <img
                                                    className="max-w-full h-auto rounded-full"
                                                    src={`http://localhost:4000${formData.pictureSrc}`} 
                                                    alt=""
                                                />
                                            ) : (
                                                <UserRound width={46} height={46} />
                                            )}

                                            <div>{/* Зображення профілю */}</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col grow-[3] justify-center p-5">
                                        <label className="text-white text-xs font-light">ID</label>
                                        <input
                                            className="w-full pl-2 h-10 text-white bg-gray-500 placeholder-gray-200 border-b border-white focus:outline-none mb-4 rounded-lg"
                                            type="text"
                                            value={formData.id}
                                            readOnly
                                        />
                                        <div className="flex flex-col">
                                            {First_NameDirty && First_NameError && (
                                                <motion.div
                                                    initial={{ x: -100, scale: 0 }}
                                                    animate={{ x: 0, scale: 1 }}
                                                    transition={{
                                                        ease: "easeIn",
                                                        duration: 0.5,
                                                    }}
                                                    className="inline-block p-2 mb-2 text-xs text-red-600 bg-red-100 border border-red-300 rounded-md"
                                                >
                                                    {First_NameError}
                                                </motion.div>
                                            )}
                                            {Last_NameDirty && Last_NameError && (
                                                <motion.div
                                                    initial={{ x: -100, scale: 0 }}
                                                    animate={{ x: 0, scale: 1 }}
                                                    transition={{
                                                        ease: "easeIn",
                                                        duration: 0.5,
                                                    }}
                                                    className="inline-block p-2 mb-2 text-xs text-red-600 bg-red-100 border border-red-300 rounded-md"
                                                >
                                                    {Last_NameError}
                                                </motion.div>
                                            )}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-5">
                                            <div className="flex grow flex-col">
                                                <label className="text-white text-xs font-light">Ім'я</label>
                                                <input
                                                    className="w-full pl-2 h-10 text-white bg-gray-500 placeholder-gray-200 border-b border-white focus:outline-none mb-4 rounded-lg"
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onBlur={setFirst_NameDirty}
                                                    onChange={First_NameHandler}
                                                    placeholder=" "
                                                    required
                                                />
                                            </div>
                                            <div className="flex grow flex-col">
                                                <label className="text-white text-xs font-light">Прізвище</label>
                                                <input
                                                    className="w-full pl-2 h-10 text-white bg-gray-500 placeholder-gray-200 border-b border-white focus:outline-none mb-4 rounded-lg"
                                                    type="text"
                                                    name="lastName"
                                                    onBeforeInput={setLast_NameDirty}
                                                    value={formData.lastName}
                                                    onChange={Last_NameHandler}
                                                    placeholder=" "
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-5">
                                    <hr className="border-gray-500 rounded-lg border-2 w-full" />
                                </div>

                                <div className="flex flex-col w-full p-5">
                                    {Date_of_birthDirty && Date_of_birthError && (
                                        <motion.div
                                            initial={{ x: -100, scale: 0 }}
                                            animate={{ x: 0, scale: 1 }}
                                            transition={{ ease: "easeIn", duration: 0.5 }}
                                            className="inline-block p-2 mb-2 text-xs text-red-600 bg-red-100 border border-red-300 rounded-md"
                                        >
                                            {Date_of_birthError}
                                        </motion.div>
                                    )}

                                    <div className="flex flex-col sm:flex-row w-full gap-5">
                                        <div className="flex grow flex-col">
                                            <label className="text-white text-xs font-light">Дата народження</label>
                                            <input
                                                className="w-full pl-2 h-10 text-white bg-gray-500 placeholder-gray-200 border-b border-white focus:outline-none mb-4 rounded-lg"
                                                type="date"
                                                name="date_of_birth"
                                                onBlur={setDate_of_birthDirty}
                                                value={formData.date_of_birth}
                                                onChange={Date_of_birthHandler}
                                                placeholder=" "
                                                required
                                            />
                                        </div>
                                        <div className="flex grow flex-col">
                                            <label className="text-white text-xs font-light">Стать</label>
                                            <select
                                                className="w-full pl-2 h-10 text-white bg-gray-500 placeholder-gray-200 border-b border-white focus:outline-none mb-4 rounded-lg"
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Виберіть стать</option>
                                                <option value="Чоловіча">Чоловіча</option>
                                                <option value="Жіноча">Жіноча</option>
                                                <option value="Інша">Інша</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row w-full gap-5">
                                        <div className="flex grow flex-col">
                                            <label className="text-white text-xs font-light">Ел. Пошта</label>
                                            <input
                                                className="w-full pl-2 h-10 text-white bg-gray-500 placeholder-gray-200 border-b border-white focus:outline-none mb-4 rounded-lg"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                placeholder=""
                                                readOnly
                                            />
                                        </div>
                                        <div className="flex grow flex-col">
                                            <label className="text-white text-xs font-light">Дата реєстрації</label>
                                            <input
                                                className="w-full pl-2 h-10 text-white bg-gray-500 placeholder-gray-200 border-b border-white focus:outline-none mb-4 rounded-lg"
                                                type="text"
                                                name="created_at"
                                                value={formData.created_at}
                                                onChange={handleChange}
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    {PhoneDirty && PhoneError && (
                                        <motion.div
                                            initial={{ x: -100, scale: 0 }}
                                            animate={{ x: 0, scale: 1 }}
                                            transition={{ ease: "easeIn", duration: 0.5 }}
                                            className="inline-block p-2 mb-2 text-xs text-red-600 bg-red-100 border border-red-300 rounded-md"
                                        >
                                            {PhoneError}
                                        </motion.div>
                                    )}
                                    {CountryDirty && CountryError && (
                                        <motion.div
                                            initial={{ x: -100, scale: 0 }}
                                            animate={{ x: 0, scale: 1 }}
                                            transition={{ ease: "easeIn", duration: 0.5 }}
                                            className="inline-block p-2 mb-2 text-xs text-red-600 bg-red-100 border border-red-300 rounded-md"
                                        >
                                            {CountryError}
                                        </motion.div>
                                    )}

                                    <div className="flex flex-col sm:flex-row w-full gap-5">
                                        <div className="flex grow flex-col">
                                            <label className="text-white text-xs font-light">Номер телефону</label>
                                            <input
                                                className="w-full pl-2 h-10 text-white bg-gray-500 placeholder-gray-200 border-b border-white focus:outline-none mb-4 rounded-lg"
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onBlur={setPhoneDirty}
                                                onChange={PhoneHandler}
                                                placeholder=" "
                                                required
                                            />
                                        </div>
                                        <div className="flex grow flex-col">
                                            <label className="text-white text-xs font-light">Країна</label>
                                            <CountrySelector
                                                value={formData.country}
                                                onChange={CountryHandler}
                                            />
                                        </div>
                                    </div>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ scale: 1 }}
                                        type="submit"
                                        disabled={!FormValid}
                                        className="w-full h-[44px] bg-primary text-white border-none cursor-pointer rounded-md transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                                    >
                                        Зберегти зміни {/* Кнопка для збереження змін */}
                                    </motion.button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )

}

export default Profile

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: 'rgb(107 114 128)',
        border: 'none',
        borderBottom: 'solid white 1px',
    }),
    option: (provided) => ({
        ...provided,
        padding: 8,
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'rgb(55 65 81)',
    }),
}

function CountrySelector({ value, onChange }) {
    const options = useMemo(() => countryList().getData(), [])

    return (
        <Select
            options={options}
            value={options.find((option) => option.label === value)}
            onChange={onChange}
            styles={customStyles}
        />
    )
}
