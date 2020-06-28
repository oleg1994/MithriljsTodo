import m from 'mithril'
import todoCrud from '../../../firebaseSide/Queries/todoCrud'

const TaskForm = () => {
    const saveTask = ()=>{
        todoCrud.saveTask()
    }
    return {
        onupdate: function() {
        },
        oninit: function (vnode) {},
        view: (vnode) => m(".saveTask", [
            m("input[type=text][placeholder=Task]", { class: 'saveTask__input', onchange:(e)=> {e.preventDefault(),todoCrud.targetValue = e.target.value}, value:todoCrud.targetValue}),
            m("button", { class: "saveTask__button", onclick: saveTask  }, 'SUBMIT')
        ])
    }
}

export default TaskForm
