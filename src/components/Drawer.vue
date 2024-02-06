<template>
    <div>
        <div @click="closeDrawer" class="bg-black fixed left-0 top-0 w-full h-full z-30 bg-opacity-70"></div>
        <div class="bg-white  fixed  z-40 p-8 rounded md:w-[620px] w-[330px] top-[30%] md:left-[30%] left-[30px]">
            <button @click="closeDrawer" class="absolute top-5 right-5">
                <i class="fas fa-times text-white text-xl absolute right-[-40px] top-[-50px] xl:right-[-50px] xl:top-[-50px] hover:-translate-y-1 transition"></i>
            </button>
            <h2 class="text-center font-bold md:text-2xl mt-2">Telefon raqamingizni qoldiring</h2>
            <p class="text-center text-slate-500 md:text-xl text-sm mb-4">Biz siz bilan albatta bog'lanamiz</p>
            <DrawerForm/>
        </div>
    </div>
</template>
<script setup>
import { inject, ref } from "vue";
import DrawerForm from './DrawerForm.vue'

    const {closeDrawer} = inject('drawer')

    

    
</script>