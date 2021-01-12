Vue.createApp({
    data: () => ({
        title: 'Я есть грут',
        myHtml: '<h1>Vue 3 app</h1>',
        person: {firstName: 'Рома', lastName: 'Гагарин', age: '29'},
        items: [1,2,3,4,5,6]
    }),
    methods: {
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')