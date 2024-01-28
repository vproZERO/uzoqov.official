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
    <VisitMy/>
    <Footer/>
  </div>
</template>
<script>
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
export default {
  components:{
    Header,
    About,
    MyWork,
    TheBalolo,
    HumanCentric,
    FilmMakers,
    VisitMy,
    Podcast,
    MyBrands,
    Footer
  }
}
</script>
<style lang="">
  
</style>