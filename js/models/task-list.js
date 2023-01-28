export class TaskList {
    constructor() { }
    taskListUncompleted = []
    taskListCompleted = []
    kiemTra(task) {
        const kiemTraUncompleted = this.taskListUncompleted.find(taski => taski.mytask === task.mytask)
        const kiemTraCompleted = this.taskListCompleted.find(taski => taski.mytask === task.mytask)
        if (kiemTraUncompleted !== undefined || kiemTraCompleted !== undefined) {
            return true
        }
    }
    addTask(task) {
        this.taskListUncompleted = [...this.taskListUncompleted, task]
    }
    removeTask(mytask) {
        this.taskListUncompleted = this.taskListUncompleted.filter(task => task.mytask !== mytask)
        this.taskListCompleted = this.taskListCompleted.filter(task => task.mytask !== mytask)
    }
    completedTask(mytask) {
        const taskComleted = this.taskListUncompleted.find(task => task.mytask === mytask)
        const taskUnComleted = this.taskListCompleted.find(task => task.mytask === mytask)
        if (taskComleted !== undefined) {
            this.taskListCompleted = [...this.taskListCompleted, taskComleted]
            this.taskListUncompleted = this.taskListUncompleted.filter(task => task.mytask !== mytask)
        } else {
            this.taskListUncompleted = [...this.taskListUncompleted, taskUnComleted]
            this.taskListCompleted = this.taskListCompleted.filter(task => task.mytask !== mytask)
        }
    }
    sapXepAZUncompleted() {
        const arrUncompleted = [...this.taskListUncompleted]
        arrUncompleted.sort((a, b) => (a.mytask > b.mytask) ? 1 : -1)
        return arrUncompleted
    }
    sapXepAZCompleted() {
        const arrCompleted = [...this.taskListCompleted]
        arrCompleted.sort((a, b) => (a.mytask > b.mytask) ? 1 : -1)
        return arrCompleted
    }
    sapXepZAUncompleted() {
        const arrUncompleted = [...this.taskListUncompleted]
        arrUncompleted.sort((a, b) => (a.mytask > b.mytask) ? -1 : 1)
        return arrUncompleted
    }
    sapXepZACompleted() {
        const arrCompleted = [...this.taskListCompleted]
        arrCompleted.sort((a, b) => (a.mytask > b.mytask) ? -1 : 1)
        return arrCompleted
    }
}