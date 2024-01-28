<template>
  <div class="bg-[#161616] the_balolo_container relative py-[60px] md:h-[600px] md:py-0">
    <video autoplay muted loop>
      <source src="../video/video1.mp4" type="video/mp4" />
      Ваш браузер не поддерживает тег video.
    </video>
    <div class="md:py-[100px] md:px-[20px] md:w-[620px] mx-auto  md:mt-[150px] w-[360px] z-50">
      <div>

          <h2
          class="mb-[8px] text-white text-[22px] font-semibold text-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          The BALOLO Setup Cockpit
        </h2>
        <h3
          class="text-white text-center text-[14px] font-normal mb-[24px] aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Use code 'LANDONBTW'
        </h3>
        <div
          class="aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <a
            href="https://www.balolo.de/en"
            target="_blank"
            class="py-[13px] bg-gradient-to-r cursor-pointer w-[150px] block hover:-translate-y-1 transition mx-auto from-[#373737] to-[#0E0E0E]"
          >
            <span class="text-white font-semibold text-center block"
              >View Products</span
            >
          </a>
        </div>
      </div>
    </div>
    <div
      class="the_balolo_top md:h-[102px] h-[50px] absolute top-0 left-0 right-0 z-30"
    ></div>
    <div
      class="the_balolo_bottom md:h-[102px] h-[50px] absolute bottom-0 left-0 right-0 z-30"
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
  width: 100%;/* или любая другая высота, которую вы хотите использовать */
  overflow: hidden;
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
