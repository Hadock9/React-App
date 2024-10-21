import { Search } from 'lucide-react'

//передаєм значення вище
export function MySearch({ onChange }) {
    //Кожен раз при зміні HandleNameChange оновлюєм знаення
    const HandleNameChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div className="flex justify-center w-auto m-[15px]">
            <form action="">
                <div className="flex items-center rounded-3xl p-[14px] bg-[#f2f2f2]  hover:shadow-lg duration-1000 hover:bg-white duration-1000 ">
                    <span class="material-symbols-outlined text-gray-400">
                        <Search />
                    </span>
                    <input
                        type="text"
                        placeholder="Пошук"
                        name="Search"
                        className="ml-[14px] text-base border-0 outline-none bg-transparent	 w-[60px] focus:w-[350px]  duration-700  placeholder:text-gray-400"
                        //При зміні беремо створюємо функцію HandleNameChange
                        onChange={HandleNameChange}
                    />
                </div>
            </form>
        </div>
    )
}
