import { motion } from 'framer-motion'
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
import TextError from '../../UI/TextError'

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
                    <div className='h-[85vh] flex justify-center items-center relative'>
                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: 'easeIn', duration: 0.9 }}
                            className='absolute rounded-full bg-gradient-to-br from-primary to-red-950 opacity-80 h-[120px] w-[120px]'
                            style={{ left: '22%', top: '35%' }}
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: 'easeIn', duration: 0.8 }}
                            className='absolute rounded-full bg-gradient-to-br from-primary to-red-950 opacity-80 h-[260px] w-[260px]'
                            style={{ left: '48%', top: '60%' }}
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: 'easeIn', duration: 1.2 }}
                            className='absolute rounded-full bg-gradient-to-br from-primary to-red-950 opacity-80 h-[360px] w-[360px]'
                            style={{ left: '40%', top: '8%' }}
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: 'easeIn', duration: 1.5 }}
                            className='absolute rounded-full bg-gradient-to-br from-primary to-red-950 opacity-80 h-[75px] w-[75px]'
                            style={{ left: '65%', top: '50%' }}
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: 'easeIn', duration: 0.5 }}
                            className='absolute rounded-full bg-gradient-to-br from-primary to-red-950 opacity-80 h-[180px] w-[180px]'
                            style={{ left: '27%', top: '60%' }}
                        ></motion.div>

                        <div className='flex flex-col absolute left-[77%]'>
                            <TextError TextDirty={First_NameDirty} TextError={First_NameError} />
                            <TextError TextDirty={Last_NameDirty} TextError={Last_NameError} />
                            <TextError
                                TextDirty={Date_of_birthDirty}
                                TextError={Date_of_birthError}
                            />
                            <TextError TextDirty={PhoneDirty} TextError={PhoneError} />
                            <TextError TextDirty={CountryDirty} TextError={CountryError} />
                        </div>
                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: 'easeIn', duration: 0.8 }}
                            className='w-full flex  justify-center'
                        >
                            <form className='flex w-[50%] justify-center rounded-2xl bg-gray-700 bg-opacity-10 backdrop-blur-lg border border-black border-opacity-10 shadow-lg p-5'>
                                <div className='flex flex-col w-full items-center'>
                                    <div className='h-[96px] w-[96px] flex justify-center items-center bg-white rounded-[50%]'>
                                        {/* Зображення профілю */}
                                        {formData.pictureSrc ? (
                                            <img
                                                className='max-w-full h-auto rounded-full'
                                                src={formData.pictureSrc}
                                                alt=''
                                            />
                                        ) : (
                                            <UserRound />
                                        )}
                                    </div>
                                    <div className='flex w-full'>
                                        <div className='flex grow basis-0 flex-col p-5'>
                                            <label className='text-black text-xs font-light'>
                                                Ім'я
                                            </label>
                                            <div className='flex '>
                                                <input
                                                    className='w-full pl-2 h-10 text-black text-lg bg-gray-500 bg-opacity-50 placeholder-gray-200 border-b border-black focus:outline-none mb-4'
                                                    type='text'
                                                    name='firstName'
                                                    value={formData.firstName}
                                                    onBlur={setFirst_NameDirty}
                                                    onChange={First_NameHandler}
                                                    placeholder=' '
                                                    required
                                                />
                                            </div>
                                            <label className='text-black text-xs font-light'>
                                                Дата народження
                                            </label>
                                            <div className='flex '>
                                                <input
                                                    className='w-full pl-2 h-10 text-black text-lg bg-gray-500 bg-opacity-50 placeholder-gray-200 border-b border-black focus:outline-none mb-4'
                                                    type='date'
                                                    name='date_of_birth'
                                                    onBlur={setDate_of_birthDirty}
                                                    value={formData.date_of_birth}
                                                    onChange={Date_of_birthHandler}
                                                    placeholder=' '
                                                    required
                                                />
                                            </div>
                                            <label className='text-black text-xs font-light'>
                                                Ел. Пошта
                                            </label>
                                            <div className='flex '>
                                                <input
                                                    className='w-full pl-2 h-10 text-black text-lg bg-gray-500 bg-opacity-50 placeholder-gray-200 border-b border-black focus:outline-none mb-4'
                                                    type='email'
                                                    name='email'
                                                    value={formData.email}
                                                    placeholder=''
                                                    readOnly
                                                />
                                            </div>
                                            <label className='text-black text-xs font-light'>
                                                Номер телефону
                                            </label>
                                            <div className='flex '>
                                                <input
                                                    className='w-full pl-2 h-10 text-black text-lg bg-gray-500 bg-opacity-50 placeholder-gray-200 border-b border-black focus:outline-none mb-4'
                                                    type='tel'
                                                    name='phone'
                                                    value={formData.phone}
                                                    onBlur={setPhoneDirty}
                                                    onChange={PhoneHandler}
                                                    placeholder=''
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='flex grow basis-0 flex-col p-5'>
                                            <label className='text-black text-xs font-light'>
                                                Прізвище
                                            </label>
                                            <div className='flex '>
                                                <input
                                                    className='w-full pl-2 h-10 text-black text-lg bg-gray-500 bg-opacity-50 placeholder-gray-200 border-b border-black focus:outline-none mb-4'
                                                    type='text'
                                                    name='lastName'
                                                    onBeforeInput={setLast_NameDirty}
                                                    value={formData.lastName}
                                                    onChange={Last_NameHandler}
                                                    placeholder=' '
                                                    required
                                                />
                                            </div>
                                            <label className='text-black text-xs font-light'>
                                                Стать
                                            </label>
                                            <div className='flex '>
                                                <select
                                                    className='w-full pl-2 h-10 text-black text-lg bg-gray-500 bg-opacity-50 placeholder-gray-200 border-b border-black focus:outline-none mb-4'
                                                    name='gender'
                                                    value={formData.gender}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value=''>Виберіть стать</option>
                                                    <option value='Чоловіча'>Чоловіча</option>
                                                    <option value='Жіноча'>Жіноча</option>
                                                    <option value='Інша'>Інша</option>
                                                </select>
                                            </div>
                                            <label className='text-black text-xs font-light'>
                                                Дата реєстрації
                                            </label>
                                            <div className='flex '>
                                                <input
                                                    className='w-full pl-2 h-10 text-black text-lg bg-gray-500 bg-opacity-50 placeholder-gray-200 border-b border-black focus:outline-none mb-4'
                                                    type='text'
                                                    name='created_at'
                                                    value={formData.created_at}
                                                    onChange={handleChange}
                                                    readOnly
                                                />
                                            </div>
                                            <label className='text-black text-xs font-light'>
                                                Країна
                                            </label>
                                            <div className='flex '>
                                                <div className='w-full pl-2 h-10 text-black text-lg bg-gray-500 bg-opacity-50 placeholder-gray-200 border-b border-black focus:outline-none mb-4'>
                                                    <CountrySelector
                                                        value={formData.country}
                                                        onChange={CountryHandler}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-5 w-full'>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            initial={{ scale: 1 }}
                                            type='submit'
                                            disabled={!FormValid}
                                            className={` w-full py-3 bg-primary text-white border-none cursor-pointer rounded-md transition-all duration-300
									disabled:bg-gray-300 disabled:cursor-not-allowed`}
                                        >
                                            Зберегти зміни {/* Кнопка для збереження змін */}
                                        </motion.button>{' '}
                                    </div>
                                </div>
                            </form>
                        </motion.div>
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
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
    }),
    option: (provided) => ({
        ...provided,
        padding: 0,
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'black',
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
            className='border-none'
        />
    )
}
