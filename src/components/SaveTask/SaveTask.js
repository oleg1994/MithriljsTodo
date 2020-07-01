import m from 'mithril'
import './style.scss'
import todoCrud from '../../../firebaseSide/Queries/todoCrud'

const SaveTask = (vnode) => {
    const saveTask = ()=>{
       let input = document.getElementsByClassName('saveTask__input')[0]
       console.log(input.value)
       if(input.value){
        todoCrud.saveTask()
        vnode.state.error = null
       }else{
           vnode.state.error = 'empty input'
       }
    }
    return {
        onupdate: function() {
        },
        oninit: function (vnode) {},
        view: (vnode) => m(".saveTask", [
            m("input[type=text][placeholder=Task]", { class: 'saveTask__input', onchange:(e)=> {e.preventDefault(),todoCrud.targetValue = e.target.value}, value:todoCrud.targetValue}),
            m("div", { class: "saveTask__button", onclick: saveTask  }, 'SUBMIT'),
            m('div',{ class: "saveTask__error",  },vnode.state.error)
        ])
    }
}

export default SaveTask
