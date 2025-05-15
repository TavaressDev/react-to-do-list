import { useState } from 'react'
import rocket from './assets/rocket.svg'
import clipboard from './assets/Clipboard.svg'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Input } from './components/Input'
import './global.css'
import { Task } from './components/Task'

function App() {
  const [taskText, setTaskText] = useState<string>("")
  const [tasks, setTasks] = useState<{text: string, isChecked: boolean}[]>([])

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (taskText.trim()) {
      setTasks([...tasks, {text: taskText, isChecked: false}])
      setTaskText("")
    }
  }

  const toggleTaskCheck = (index: number) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].isChecked = !updatedTasks[index].isChecked
    setTasks(updatedTasks)
  }

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isChecked).length

  return (
    <div className='relative min-h-screen'>
      <div className='h-[25vh] w-[100vw] bg-[#0D0D0D] flex justify-center items-center'>
        <div className='flex justify-center items-center gap-3'>
          <img src={rocket} alt="" />
          <h1 className='text-[#4EA8DE] text-4xl'>TO<span className='text-[#5E60CE]'>DO</span></h1>
        </div>
      </div>

      <form 
        onSubmit={handleAddTask}
        className='flex justify-center absolute top-[25vh] gap-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4'
      >
        <Input value={taskText} onChange={setTaskText}/>
        <Button type="submit" isDelete={false}>Criar</Button>
      </form>

      <div className='h-[75vh] w-[100vw] bg-[#1A1A1A] flex flex-col items-center p-20 pt-28'>
        <div className='flex items-center justify-between w-full max-w-[716px] mb-6'>
          <p className='text-[#4EA8DE]'>
            Tarefas criadas <span className='w-25 h-19 rounded-[50%] px-2 py-0.5 bg-[#333333] text-[white]' >{totalTasks}</span>
          </p>
          <p className='text-[#8284FA]'>
            Concluídas <span className='w-25 h-19 rounded-[50%] px-2 py-0.5 bg-[#333333] text-[white]'> {completedTasks}</span>
          </p>
        </div>

        <div className='w-full max-w-[736px] space-y-2'>
          {totalTasks > 0 ? (
            tasks.map((task, index) => (
              <Task key={index}>
                <div className="flex items-start gap-3 w-full">
                  <Checkbox 
                    isChecked={task.isChecked} 
                    onChange={() => toggleTaskCheck(index)} 
                  />
                  <p className={`text-[#F2F2F2] flex-1 break-all whitespace-normal text-justify ${
                    task.isChecked ? 'line-through text-[#808080]' : ''
                  }`}>
                    {task.text}
                  </p>
                  <Button 
                    isDelete={true}
                    onClick={() => deleteTask(index)}
                  />
                </div>
              </Task>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 border-t border-[#333333] rounded-lg">
              <img src={clipboard} alt="Clipboard" className="mb-4" />
              <p className="text-[#808080] font-bold">Você ainda não tem tarefas cadastradas</p>
              <p className="text-[#808080]">Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App