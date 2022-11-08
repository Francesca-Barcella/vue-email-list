//alert('funziono')

/************************************************************ 

Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
************************************************************/

const { createApp } = Vue

createApp({
    data() {
        return {
            //mail: null,
            //creao un array vuoto in cui pushare i 10 indirizzi random
            mails: []
        }
    },

    mounted() {
        /* axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response.data.response)
                this.mail = response.data.response
            }) */
            
            //creare un ciclo for che cicli 10 volte per creare 10 mail random
            for (let i = 0; i <= 10; i++) {
                axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response.data.response)
                //this.mails = response.data.response
                //pushare le mail generate dentro l'array vuoto mails []
                this.mails.push(response.data.response)

            })
                
            }
    }



}).mount('#app')