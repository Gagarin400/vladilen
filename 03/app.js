const h = Vue.h
const app = Vue.createApp({
    data: () => ({
        title: 'Vue3',
    }),
    // template: `
    //     <div class="card center">
    //         <h1>{{ title }}</h1>
    //         <button @click="title = 'мазафака'">тыц</button>
    //     </div>
    // `
    methods: {
        changeName() {
            this.title = "новое имя"
        }
    },
    render() {
        return h('div', {
            class: "card center"
        }, [
            h('h1', {}, this.title),
            h('button', {
                class: 'btn', 
                onClick: this.changeName }
                , 'сменить имя')
        ])
    }
})
app.mount('#app')