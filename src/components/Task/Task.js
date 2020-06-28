import m from "mithril"
import './Task.scss'
import todoCrud from '../../../firebaseSide/Queries/todoCrud'


const statusMark = '✓'

function Todo() {
    const changeStatus = (event) => {
        todoCrud.selectedTask = event.target.id
        todoCrud.changeStatus()
    }
    const removeTask = (event) => {
        todoCrud.selectedTask = event.target.id
        todoCrud.removeTask()
    }
    return {
        oninit: function (vnode) { },
        view: (vnode) => m(".task", [
            m(".task__status", {id:vnode.attrs.task.id, onclick: (e)=>changeStatus(e) }, (vnode.attrs.task.complete ? '✔' : '✘')),
            m(".task__content", { style: { 'text-decoration': vnode.attrs.task.complete ? 'line-through' : null } }, vnode.attrs.task.title),
            m("button", {id:vnode.attrs.task.id, class: "task__remove",  onclick: (e)=>removeTask(e) }, 'remove')
        ])
    }
}
export default Todo