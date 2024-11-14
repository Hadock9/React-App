import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Mybutton from '../../UI/Mybutton'
import TextError from '../../UI/TextError'
import { validateAmount } from '../../js/FormValidation'
import { Equal, X } from 'lucide-react'

export default function StakeForm({ MatchGet, amount, handleSubmit, setAmount, userBalance }) {
    const [Match, setMatch] = useState(null)
    const [amountDirty, setAmountDirty] = useState(false)
    const [amountError, setAmountError] = useState('Поле з сумою не може бути пустим')
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (MatchGet) setMatch(MatchGet)
    }, [MatchGet])

    const handleAmount = (e) => {
        setAmount(e.target.value)
        setAmountError(validateAmount(e.target.value, userBalance))
    }

    useEffect(() => {
        setIsDisabled(!!amountError)
    }, [amountError])

    return (
        <div className='flex flex-col w-full'>
            <Toaster position='top-center' reverseOrder={false} />

            {Match ? (
                <div className='flex items-center bg-gray-700 rounded-lg  p-4 justify-around'>
                    <div class='relative'>
                        <img
                            src={Match.TeamCountry}
                            alt='Larger Image'
                            class='h-32 w-52     rounded-lg'
                        />
                        <div class='absolute inset-0 bg-gradient-to-br from-transparent to-gray-700 to-80% opacity-70 rounded-lg'></div>

                        <img
                            src={Match.TeamLogo}
                            alt='Smaller Image'
                            class='absolute inset-0 mt-auto ml-auto mr-[5%] w-24 h-24'
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                        <label className='text-white text-s font-light mb-1'>
                            Ставка на команду
                        </label>
                        <div className='text-white text-lg'>{Match.TeamName}</div>
                    </div>

                    <form onSubmit={handleSubmit} className='flex gap-3'>
                        <div className='flex flex-col items-center'>
                            <label className='text-white text-s font-light mb-1'>Сума ставки</label>
                            <input
                                className='text-end w-32 text-white text-3xl bg-transparent placeholder-gray-400 border-b border-white focus:outline-none'
                                placeholder='0'
                                maxLength={6}
                                name='amount'
                                onBlur={() => setAmountDirty(true)}
                                value={amount}
                                onChange={handleAmount}
                                required
                            />
                        </div>
                        <div className='flex items-end pb-1 text-white'>
                            <X />
                        </div>
                        <div className='flex flex-col items-center'>
                            <label className='text-white text-s font-light mb-1'>Коефіцієнт</label>
                            <div className='text-white text-3xl'>{Match.TeamCoef}</div>
                        </div>
                        <div className='flex text-white items-end pb-1'>
                            <Equal />
                        </div>

                        <div className='flex flex-col items-center'>
                            <label className='text-white text-s font-light mb-1'>
                                Потенційний виграш
                            </label>
                            <div className='text-white text-3xl'>
                                {(amount * Match.TeamCoef).toFixed(2)}₴
                            </div>
                        </div>
                        <div className='flex justify-center w-52'>
                            <Mybutton ondisable={!isDisabled}>Submit</Mybutton>
                        </div>
                    </form>
                </div>
            ) : (
                <div>Завантаження даних про матч...</div>
            )}

            <TextError TextDirty={amountDirty} TextError={amountError} />
        </div>
    )
}
