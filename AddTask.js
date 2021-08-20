import { useState } from "react"
import Button from './Button.js'

const AddTask = ({ onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className="form-control">
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input
                    type="text"
                    placeholder="Add Day and Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Set Reminder?</label>
                <input
                    type="checkbox"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <Button
                onClick={(e) => {
                    e.preventDefault() //não deixa dar reload
                    setText('') //clear fields
                    setDay('') //clear fields
                    setReminder(false) //don't uncheck but do the job 
                    onAdd({ text, day, reminder })
                    {console.log(e)}
                }}
                className='bnt'
                text='Add Task' />
        </form>
    )
}

export default AddTask
