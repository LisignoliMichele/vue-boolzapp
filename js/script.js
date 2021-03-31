var app = new Vue(
   {
      el: "#app",
      data:{
         contacts: [
            {
                name: 'Marco',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [{
                    date: '10/01/20 15.30',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                },
                    {
                        date: '10/01/20 15.50',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/20 16.15',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [{
                    date: '20/03/20 16.30',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/20 16.30',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/20 16.35',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [{
                    date: '28/03/20 10.10',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/20 10.20',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/20 16.15',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_9.jpg',
                visible: true,
                messages: [{
                    date: '10/01/20 15.30',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/20 15.50',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
         ],
         enterText:'',
         contactIndex: 0,
         search: '',
         show: '',
      },
      methods:{
        answer: function(){
            this.contacts[this.contactIndex].messages.push({
                date: dayjs().format('DD/MM/YY HH.MM'),
                message: "ok",
                status: 'recieved'
                });
        },
        printMessage: function(){
            if (this.enterText !== ''){
                this.contacts[this.contactIndex].messages.push({
                    date: dayjs().format('DD/MM/YY HH.MM'),
                    message: this.enterText,
                    status: 'sent'
                    });
                 this.enterText = '';
                 setTimeout(this.answer, 1000)
            }
        }, 
        toggleShow: function(){
                if (this.show == '' || this.show == 'hide'){
                    this.show = "visible";
                }else if (this.show == "visible"){
                    this.show = "hide";
                }
            },
    },
    computed:{
        filtredContacts: function(){
            return this.contacts.filter((contact) =>{
                return contact.name.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
   }
);