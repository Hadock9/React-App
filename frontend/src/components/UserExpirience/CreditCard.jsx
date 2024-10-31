import Mybutton from '../../UI/Mybutton'
import { useEffect, useState } from 'react'
import TextError from '../../UI/TextError'

import {
    validateCardName,
    validateCreditCard,
    validateExpDate,
    validateCVV,
} from '../../js/FormValidation.js'

export function CreditCard() {
    const [Card, setCard] = useState('')
    const [Name, setName] = useState('')
    const [ExpDate, setExpDate] = useState('')
    const [CVV, setCVV] = useState('')

    const [CardDirty, setCardDirty] = useState(false)
    const [NameDirty, setNameDirty] = useState(false)
    const [ExpDateDirty, setExpDateDirty] = useState(false)
    const [CVVDirty, setCVVDirty] = useState(false)

    const [CardError, setCardError] = useState(
        'Номер карти не може бути пустим'
    )
    const [NameError, setNameError] = useState(
        "Ім'я власника не може бути пустим"
    )
    const [ExpDateError, setExpDateError] = useState(
        'Поле з датою не може бути пустим'
    )
    const [CVVError, setCVVError] = useState('CVV номер не може бути пустим')

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'Card':
                setCardDirty(true)
                break
            case 'Name':
                setNameDirty(true)
                break
            case 'ExpDate':
                setExpDateDirty(true)
                break
            case 'CVV':
                setCVVDirty(true)
                break
            default:
                break
        }
    }

    const CardHandler = (e) => {
        setCard(e.target.value)
        setCardError(validateCreditCard(e.target.value))
    }
    const NameHandler = (e) => {
        setName(e.target.value)
        setNameError(validateCardName(e.target.value))
    }
    const ExpDateHandler = (e) => {
        setExpDate(e.target.value)
        setExpDateError(validateExpDate(e.target.value))
    }
    const CVVHandler = (e) => {
        setCVV(e.target.value)
        setCVVError(validateCVV(e.target.value))
    }
    return (
        <div className=" ">
            {/*  */}
            <TextError TextDirty={CardDirty} TextError={CardError} />
            <TextError TextDirty={NameDirty} TextError={NameError} />
            <TextError TextDirty={ExpDateDirty} TextError={ExpDateError} />
            <TextError TextDirty={CVVDirty} TextError={CVVError} />

            <div className="absolute -z-10"></div>
            {/* left-[250px] */}
            <div className="absolute rounded-full bg-gradient-to-br from-red-500 bg-red-950 opacity-80 h-[240px] w-[240px] left-[55%] top-[10%]"></div>
            {/* top-[120px] left-[-50px] */}
            <div className="absolute rounded-full bg-gradient-to-br from-red-500 bg-red-950 opacity-80 h-[300px] w-[300px] left-[35%] top-[20%]"></div>
            <div className=" flex flex-col items-center">
                <div className=" flex flex-col h-[280px] w-[420px] rounded-2xl bg-black bg-opacity-10 backdrop-blur-lg border border-black border-opacity-10 shadow-lg p-5">
                    <div className="flex justify-end">
                        <img
                            className="h-20 w-48 mb-5"
                            src="https://pngimg.com/uploads/visa/visa_PNG4.png"
                            alt="Visa Logo"
                        />
                        <img
                            className="h-20 w-32 mb-5"
                            src="https://pngimg.com/uploads/mastercard/mastercard_PNG8.png"
                            alt="Visa Logo"
                        />
                    </div>

                    <label className="text-white text-xs font-light mb-1">
                        Card Number
                    </label>
                    <input
                        className="w-full h-12 text-white placeholder-white text-xl bg-transparent placeholder-gray-400 border-b border-white focus:outline-none mb-8"
                        placeholder="1234 1234 1234 1234"
                        type="telephone"
                        name="Card"
                        value={Card}
                        onBlur={blurHandler}
                        onChange={CardHandler}
                        maxLength="16"
                        required
                    />

                    <div className="container2 flex justify-between">
                        <div className="flex flex-col mr-5 w-1/3">
                            <label className="text-white text-xs font-light mb-1">
                                Card Holder
                            </label>
                            <input
                                className="text-white placeholder-white bg-transparent placeholder-gray-400 border-b border-white focus:outline-none"
                                placeholder="JOHN DOE"
                                type="text"
                                name="Name"
                                value={Name}
                                onBlur={blurHandler}
                                onChange={NameHandler}
                                required
                            />
                        </div>

                        <div className="flex flex-col mr-5 w-1/4">
                            <label className="text-white text-xs font-light mb-1">
                                Exp. Date
                            </label>
                            <input
                                className="text-white placeholder-white bg-transparent placeholder-gray-400 border-b border-white focus:outline-none"
                                placeholder="10/25"
                                type="text"
                                name="ExpDate"
                                value={ExpDate}
                                onBlur={blurHandler}
                                onChange={ExpDateHandler}
                                maxLength="5"
                                required
                            />
                        </div>

                        <div className="flex flex-col w-1/4">
                            <label className="text-white text-xs font-light mb-1">
                                CCV
                            </label>
                            <input
                                className="text-white placeholder-white bg-transparent placeholder-gray-400 border-b border-white focus:outline-none"
                                placeholder="123"
                                type="text"
                                maxLength="3"
                                name="CVV"
                                value={CVV}
                                onBlur={blurHandler}
                                onChange={CVVHandler}
                                required
                            />
                        </div>
                    </div>
                </div>
                <Mybutton>Submit</Mybutton>
            </div>
        </div>
    )
}
