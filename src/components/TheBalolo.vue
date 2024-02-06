<template>
  <div class="bg-[#161616] the_balolo_container relative py-[60px] md:h-[600px] md:py-0">
    <video autoplay muted loop>
      <source src="../video/video1.mp4" type="video/mp4" />
      Ваш браузер не поддерживает тег video.
    </video>
    <div class="md:py-[100px] relative md:px-[20px] md:w-[420px] mx-auto  md:mt-[150px] w-[360px] ">
      <h2 class="text-white text-center capitalize font-semibold md:font-bold text-xl md:text-2xl md:mb-10 mb-6">Programs that i use</h2>
      <div class="grid grid-cols-3 gap-[10px]">
          <div class="w-[100px] h-[50px] mx-auto aos-init aos-animate " data-aos="fade-up-right" data-aos-duration="1500">
            <img src="../assets/p7.jpg" alt="img">
          </div>
          <div class="w-[100px] h-[50px] aos-init aos-animate  mx-auto" data-aos="fade-up-left" data-aos-duration="1500">
            <img src="../assets/p8.jpg" alt="img">
          </div>
          <div class="w-[100px] h-[50px] aos-init aos-animate  mx-auto" data-aos="fade-up-right" data-aos-duration="1500">
            <img src="../assets/p9.jpg" alt="img">
          </div>
          <div class="w-[100px] h-[50px] aos-init aos-animate  mx-auto" data-aos="fade-up-left" data-aos-duration="1500">
            <img src="../assets/p10.jpg" alt="img">
          </div>
          <div class="w-[100px] h-[50px] aos-init aos-animate  mx-auto" data-aos="fade-up-right" data-aos-duration="1500">
            <img src="../assets/p6.jpg" alt="img">
          </div>
          <div class="w-[100px] h-[50px]] aos-init aos-animate mx-auto" data-aos="fade-up-left" data-aos-duration="1500">
            <img src="../assets/p5.jpg" alt="img">
          </div>
          <div class="w-[100px] h-[50px] aos-init aos-animate  mx-auto" data-aos="fade-up-right" data-aos-duration="1500">
            <img src="../assets/p4.jpg" alt="img">
          </div>
          <div class="w-[100px] h-[50px] aos-init aos-animate mx-auto" data-aos="fade-up-left" data-aos-duration="1500">
            <img src="../assets/p3.jpg" alt="img">
          </div>
          <div class="w-[100px] h-[50px] aos-init aos-animate  mx-auto" data-aos="fade-up-right" data-aos-duration="1500">
            <img src="../assets/p2.jpg" alt="img">
          </div>
          <div class="w-[100px] h-[50px] aos-init aos-animate col-start-2 mx-auto" data-aos="fade-up-left" data-aos-duration="1500">
            <img src="../assets/p1.jpg" alt="img">
          </div>
          
      </div>
    </div>
    <div
      class="the_balolo_top md:h-[102px] h-[50px] absolute top-0 left-0 right-0 z-30"
    ></div>
    <div
      class="the_balolo_bottom md:h-[102px] h-[50px] absolute bottom-[-1px] left-0 right-0 z-30"
    ></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.the_balolo_top {
  background: linear-gradient(to top, transparent, #02195f);
}
.the_balolo_bottom {
  background: linear-gradient(to bottom, transparent, #02195f);
}

.the_balolo_container {
  position: relative;
  height: 100%;
  width: 100%;/* или любая другая высота, которую вы хотите использовать */
}

.the_balolo_container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
