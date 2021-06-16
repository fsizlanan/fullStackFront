import Vue from "vue"
import Store from "../store/index"
import App from "../App.vue"
import VueSocketIo from "vue-socket.io"

Vue.use(new VueSocketIo({
    debug : true,
    connection : 'http://127.168.0.1:8080',
    vuex : {
        store,
        actionPrefix : 'SOCKET_',
        mutationPrefix : 'SOCKET_'
    },
    options : {path:"/"}
}))
