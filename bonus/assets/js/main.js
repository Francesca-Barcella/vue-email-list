//alert('funziono')

/************************************************************ 
BONUS
Far comparire gli indirizzi email solamente quando sono stati tutti generati.


BOOLTIP #1
Avete dubbi sul bonus?
Avete notato che le mail vengono mostrate non sempre tutte insieme, ma sembra che ci siano degli intervalli fra alcune?
!!!
Pensate a quale condizione vi può assicurare che il vostro array abbia al suo interno tutti i dati necessari
!!!
A quel punto pensate bene a dove potete usare quella condizione per far vedere in pagina le mail solo quando sono tutte presenti :grande_sorriso:
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
        /*  axios
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

    /*  
    !!!
     Pensate a quale condizione vi può assicurare che il vostro array abbia al suo interno tutti i dati necessari
     - aver finito il ciclo v-for
     - deve stampare dopo aver generato tutte le mail
     - v-if - stampa se ha generato le 10 mail!
     !!!
     A quel punto pensate bene a dove potete usare quella condizione per far vedere in pagina le mail solo quando sono tutte presenti :grande_sorriso:
      */

}).mount('#app')