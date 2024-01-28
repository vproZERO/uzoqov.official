<template>
    <div class="bg-[#02195F] py-[20px]">
        <h2 class="text-center text-white text-lg font-semibold mb-[16px]">My Podcast</h2>
        <div v-for="podcast in mypodcasts" :key="podcast.id" :data-aos="podcast.id === 1 || podcast.id === 3 ? 'fade-right' : 'fade-left'" data-aos-duration="1500" class="mb-[15px] md:w-[620px] w-[360px] mx-auto h-[90px] rounded-[10px] flex items-center justify-between overflow-hidden bg-gradient-to-r from-[#033F9C] to-[#0AD4DE]">
            <h2 class="ml-[25px] text-white font-medium">{{ podcast.name }}</h2>
            <div class=" border-[2px] border-white rotate-[20deg]">
                <img class=" w-[100px] h-[105px]" :src="podcast.img" :alt="podcast.name">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mypodcasts: [
                {id: 1,name: 'Watch on YouTube' , img: 'https://set.page/wp-content/uploads/sites/6356/2023/03/PodcastArtwork.png'},
                {id: 2,name: 'Listen on Spotify' , img: 'https://set.page/wp-content/uploads/sites/6356/2023/03/Spotify_App_Logo.svg_.png'},
                {id: 3,name: 'Listen on Apple Podcasts' , img: 'https://set.page/wp-content/uploads/sites/6356/2023/03/Screen-Shot-2023-03-05-at-11.15.38-PM.png'},
                {id: 4,name: 'Opt ' , img: 'https://set.page/wp-content/uploads/sites/6356/2023/03/IMG_1568.png'},
            ]
        }
    },
   
}
</script>
<style scoped>
</style>