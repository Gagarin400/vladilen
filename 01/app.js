const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заявки',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 3']
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue.length !== 0) {
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(i) {
            this.notes.splice(i, 1)
        },
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
            console.log('value', value)
        }
    }
}

Vue.createApp(App).mount('#app')