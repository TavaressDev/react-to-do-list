import { Trash } from "phosphor-react";

interface ButtonProps {
    isDelete: boolean;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export function Button({ isDelete, children, type = "button", onClick }: ButtonProps) {
    return (
        <>
            {isDelete ? (
                <button 
                    onClick={onClick}
                    className="text-[#808080] p-1.5 hover:text-[#E25858] hover:bg-[#333333] rounded cursor-pointer"
                    type={type}
                >
                    <Trash size={20} />
                </button>
            ) : (
                <button 
                    className='p-2.5 text-[white] font-bold bg-[#1E6F9F] cursor-pointer hover:bg-[#4EA8DE] rounded-lg flex items-center gap-2'
                    type={type}
                >
                    {children}
                </button>
            )}
        </>
    );
}