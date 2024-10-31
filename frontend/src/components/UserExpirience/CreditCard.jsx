import Mybutton from '../../UI/Mybutton'

export function CreditCard() {
    return (
        <div className=" ">
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
                        type="text"
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
