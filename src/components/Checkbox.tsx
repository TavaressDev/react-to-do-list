import {Check, Circle } from "phosphor-react";
interface CheckBoxProps {
    isChecked: boolean;
    onChange: () => void;  
}

export function Checkbox({ isChecked, onChange }: CheckBoxProps) {
    return (
        <button 
            onClick={onChange} 
            className="focus:outline-none" 
            type="button"  
        >
            {isChecked ? (
                <div className="bg-[#5E60CE] p-1 rounded-full hover:bg-[#8284FA]">
                    <Check color="#FFFFFF" size={20}></Check>
                </div>
            ) : (
                <Circle 
                    className="text-[#4EA8DE] hover:text-[#1E6F9F]" 
                    size={32}
                />
            )}
        </button>
    );
}