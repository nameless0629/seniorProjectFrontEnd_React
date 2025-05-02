import {useState} from "react";
import { SlArrowRight , SlArrowDown  } from "react-icons/sl";

function SidebarItem({title , contents}) {
    const [isOpen , toggleOpen] = useState(false);

    return (
        <div className="ml-2">
            <div className="flex items-center border-black border-b-1 w-[90%] h-[75px]">
                {isOpen ? <SlArrowDown color="#FFFFFF" size="20"/> : <SlArrowRight color="#FFFFFF" size="20"/>}
                <p className="ml-2 cursor-pointer text-3xl font-bold text-white" onClick={() => toggleOpen(!isOpen)}>{title}</p>
            </div>
            {isOpen && (
                <ul className="mb-3 border-black pb-3 border-b-1 w-[90%]">
                    {Object.entries(contents).map(([content , func]) => {
                        return (
                            <li className="mt-5 ml-7 cursor-pointer font-bold text-white text-1xl w-[90%]" onClick={func} >{content}</li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default SidebarItem;