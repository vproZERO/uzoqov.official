<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          v-model="name"
          name="name"
          id="name"
          class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_first_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >First name</label
        >
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          v-model="tel"
          name="tel"
          id="tel"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"

          required
        />
        <label
          for="floating_phone"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Phone number (99-999-99-99)</label
        >
      </div>
      <button
        @click="submitData"
        class="text-white bg-[#007BFF] w-full px-5 py-2 flex items-center justify-center text-white rounded-lg xl:mt-14 mt-10 hover:-translate-y-1 transition hover:bg-opacity-95 active:bg-opacity-50"
      >
        Ariza yuborish
      </button>
    </form>
  </div>
</template>
<script>

import axios from 'axios'
import Swal from 'sweetalert2';
export default {
    data : () => {
        return {
            name: "",
            tel: "",
            validationErrors: {},
            isSubmitting: false,

            telegramBotToken: '6759172233:AAGRTTni5aSpI5flaMzPhlJMZUvq_BGqYeE',
            chatId: 410846910,
        }
    },


    // https://api.telegram.org/bot6759172233:AAGRTTni5aSpI5flaMzPhlJMZUvq_BGqYeE/sendMessage?chat_id=&text=salom Abdulloh akaniki 
    methods: {
        submitForm() {
            const fullMessage = `Full name: ${this.name}
                                 \n Tel: ${this.tel}
                                 `
            axios.post(`https://api.telegram.org/bot${this.telegramBotToken}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`, {
                name: this.name,
                tel: this.tel,
                chatId: this.chatId,
                telegramBotToken: this.telegramBotToken
            })
            .then(response => {
                console.log(response.data);
                
            })
            .catch(error => {
                console.log(error);
                
            })
        },
            submitData(){
                console.log( name.value , tel.value);
                Swal.fire({
                    icon: 'success',
                    title: 'Ariza yuborildi',
                    timer: 1500,
                    showConfirmButton: false
                })

                closeDrawer()
            }
    },
}
</script>
