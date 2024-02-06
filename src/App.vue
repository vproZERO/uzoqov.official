<template>
  <div class="container overflow-hidden">
    <Header/>
    <About/>
    <MyBrands/>
    <MyWork/>
    <HumanCentric/>
    <FilmMakers/>
    <TheBalolo/>
    <Podcast/>
    <VisitMy @open-drawer="openDrawer"/>
    <Footer/>
    <Drawer v-if="drawer"/>
  </div>
</template>
<script setup>
import About from './components/About.vue';
import Header from './components/Header.vue';
import MyWork from './components/MyWork.vue'
import TheBalolo from './components/TheBalolo.vue'
import HumanCentric from './components/HumanCentric.vue'
import FilmMakers from './components/FilmMakers.vue'
import VisitMy from './components/VisitMy.vue'
import Podcast from './components/Podcast.vue'
import MyBrands from './components/MyBrands.vue';
import Footer from './components/Footer.vue';
import Drawer from './components/Drawer.vue'

import { provide, ref } from 'vue'

const drawer = ref(false)

const openDrawer = () => {
  drawer.value = true
}
const closeDrawer = () => {
  drawer.value = false
}

provide('drawer', {
  closeDrawer,
  openDrawer,
  
})


</script>
<style lang="">
  
</style>