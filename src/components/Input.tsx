interface InputProps {
    value: string;
    onChange: (value: string) => void;
}

export function Input({ value, onChange }: InputProps) {
    return (
        <input 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="max-w-[638px] w-[100%] bg-[#262626] p-2.5 rounded-lg focus:border-transparent
            text-[#F2F2F2] placeholder:text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5E60CE]" 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
        />
    )
}