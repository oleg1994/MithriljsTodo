import m from "mithril"
import './Todo.scss'
import Task from '../Task/Task'
import SaveTask from '../TaskForm/TaskForm'
import todoCrud from '../../../firebaseSide/Queries/todoCrud'


function Todo() {
  return {
    onupdate: function () {

    },
    oninit: () => {
      todoCrud.loadList()
    },
    view: () => m(".todo",
      m(SaveTask),
      (todoCrud.list && todoCrud.list.map((task, index) => {
        return m(Task, { task: task })
      })),
    )
  }
}
export default Todo