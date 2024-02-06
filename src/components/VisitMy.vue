<template>
    <div class="bg-[#02195F] the_balolo_container relative  py-[60px] md:py-0">
        <div class="md:py-[100px] md:px-[20px] md:w-[620px] mx-auto w-[360px]">
            <h2 class="mb-[8px] text-white text-[22px] font-semibold text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">Visit My Website</h2>
            <h3 class="text-white text-center text-[14px] font-normal mb-[24px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">My Story, Products, Mentorship</h3>
            <button @click="() => emit('openDrawer')"  class="py-[13px] w-[150px] bg-gradient-to-r cursor-pointer  block hover:-translate-y-1 transition mx-auto from-[#033F9C]  to-[#0AD4DE] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
                <span class="text-white font-semibold text-center block">contact me</span>
            </button>
        </div>
        <div class="the_balolo_top md:h-[102px] h-[50px] absolute top-0 left-0 right-0 "></div>
        <div class="the_balolo_bottom md:h-[102px] h-[50px] absolute bottom-0 left-0 right-0 "></div>
    </div>
</template>
<script setup>
    const emit = defineEmits(['openDrawer'])
</script>
<style scoped>
    .the_balolo_container{
        background-image: url('../assets/photo_2024-01-28_10-16-27.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-position-y: 40%;
    }
    .the_balolo_top{
    background: linear-gradient(to top, transparent , #02195F);
    }
    .the_balolo_bottom{
    background: linear-gradient(to bottom, transparent , #02195F);
    }
</style>