import m from "mithril";
import Todo from './components/Todo/Todo'
import './index.scss'
const root = document.body;

//Removes default prefix of !# at url
m.route.prefix = ''

//Routing
m.route(root, "/", {
    "/": Todo,
})
