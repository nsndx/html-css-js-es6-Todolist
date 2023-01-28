import { Task } from '../models/task.js'
import { TaskList } from '../models/task-list.js'

const dom = (selector) => document.querySelector(selector)

const taskList = new TaskList()

// render 1 mảng ra giao diện
const render = (arr, selector) => {
    const taskListRender = arr.reduce((value, task) => {
        return value += ` <li>
                        <span>${task.mytask}</span>
                        <div class="buttons">
                            <button class="remove" onclick = "removeTask('${task.mytask}')">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                            <button class="complete" onclick = "completedTask('${task.mytask}')">
                                <i class="far fa-check-circle"></i>
                                <i class="fas fa-check-circle"></i>
                            </button>
                        </div>
                    </li>`
    }, '')
    dom(selector).innerHTML = taskListRender
}

// thêm mới việc cần làm
dom('#addItem').onclick = () => {
    let newTask = dom('#newTask').value
    const task = new Task()
    task.mytask = newTask

    if(taskList.kiemTra(task)){
        dom('#tbTask').innerHTML = '---Công việc đã có---'
        return
    } else{
        dom('#tbTask').innerHTML = ''
    }

    taskList.addTask(task)
    render(taskList.taskListUncompleted, '#todo')
    render(taskList.taskListCompleted, '#completed')

    dom('#newTask').value = ''
}

// xoá việc cần làm
window.removeTask = (mytask) => {
    taskList.removeTask(mytask)
    render(taskList.taskListUncompleted, '#todo')
    render(taskList.taskListCompleted, '#completed')
}

// đánh dấu việc đã làm xong
window.completedTask = (mytask) => {
    taskList.completedTask(mytask)
    render(taskList.taskListUncompleted, '#todo')
    render(taskList.taskListCompleted, '#completed')
}

// sắp xếp từ a -> z
dom('#two').onclick = () => {
    render(taskList.sapXepAZUncompleted(), '#todo')
    render(taskList.sapXepAZCompleted(), '#completed')
}

// sắp xếp từ z -> a
dom('#three').onclick = () => {
    render(taskList.sapXepZAUncompleted(), '#todo')
    render(taskList.sapXepZACompleted(), '#completed')
}

// trở về 
dom('#all').onclick = () => {
    render(taskList.taskListUncompleted, '#todo')
    render(taskList.taskListCompleted, '#completed')
}

dom('#newTask').onkeydown = ()=>{   
        dom('#tbTask').innerHTML = ''    
}
