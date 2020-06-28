import m from "mithril"
import { db } from '../Api/firebase'

//basic get quary 
// db.collection('todos').get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//         Todo.list.push(doc.data())
//         m.redraw();
//     });
// })
// const findTask = (array)=>{
//     return array.find(element => element.id === Todo.selectedTask);
// }



const Todo = {
    targetValue: '',
    list: [],
    selectedTask:'',
    loadList: () => {
        db.collection('todos').orderBy('title').onSnapshot(function (querySnapshot) {
            Todo.list = []
            querySnapshot.forEach(function (doc) {
                Todo.list.push({ ...doc.data(), id: doc.id })
                m.redraw();
            });
        })
    },
    saveTask: () => {
        db.collection("todos").add({
            complete: false,
            date: new Date().toString(),
            title: Todo.targetValue
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    },
    changeStatus: () => {
        let findStatus = Todo.list.find(element => element.id === Todo.selectedTask);
        db.collection('todos').doc(Todo.selectedTask).update({complete:!findStatus.complete})
    },
    removeTask: () => {
        db.collection('todos').doc(Todo.selectedTask).delete()
    }
}
export default Todo;