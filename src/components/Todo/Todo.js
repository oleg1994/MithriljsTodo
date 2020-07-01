import m from "mithril"
import './Todo.scss'
import Task from '../Task/Task'
import SaveTask from '../SaveTask/SaveTask'
import todoCrud from '../../../firebaseSide/Queries/todoCrud'


function Todo() {
  return {
    onupdate: function () {

    },
    oninit: () => {
      todoCrud.loadList()
    },
    view: () => m(".todo",
      m('h1', 'Very basic Todo'),
      m(SaveTask),
      m('div',{class:'todo__tasks'},[
      (todoCrud.list && todoCrud.list.map((task, index) => {
        return m(Task, { task: task })
      })),
    ])
    )
  }
}
export default Todo