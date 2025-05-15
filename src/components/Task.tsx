interface TaskProps {
    children: React.ReactNode;
  }
  
  export function Task(props: TaskProps) {
    return (
      <div className="w-full max-w-[736px] min-h-[72px] bg-[#262626] flex items-start p-4 gap-3 rounded-lg mb-3 border border-[#333333]">
        {props.children}
      </div>
    );
  }