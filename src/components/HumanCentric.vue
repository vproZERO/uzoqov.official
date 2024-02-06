<template>
  <div class="bg-[#02195F] the_balolo_container relative pt-[60px] md:py-0">
    <div class="md:w-[620px] md:py-[100px] mx-auto">
      <div
        class="flex items-center md:mx-auto md:ml-[-50px] pt-[40px] aos-init aos-animate"
      >
        <div class="w-[255px] md:mx-auto h-[200px] relative">
          <div>
            <img
              class="absolute md:h-[400px] h-[300px] top-[-60px] left-[-40px] md:top-[-100px] md:left-[-50px]  aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1500"
              src="../assets/4.png"
              alt="img"
            />
          </div>
          <div class="absolute md:top-[130px] top-[110px] left-[20px] md:left-[-10px] aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
            <h2 class="text-white capitalize font-semibold md:font-bold text-xl md:text-2xl ">years of</h2>
          </div>
          <div class="aos-init aos-animate" data-aos="fade-left" data-aos-duration="1500">
            <p
              class="text-[#0AD4DE] absolute top-[-60px] right-[-50px] md:right-[-90px] font-semibold md:font-bold text-xl md:text-2xl"
            >
              Mobilography
            </p>
            <p
              class="text-red-500 absolute top-[-25px] md:right-[-140px] right-[-80px] font-semibold text-xl  md:font-bold md:text-2xl"
            >
              Cantientmaker
            </p>
            <p
              class="text-[#0AD4DE] absolute top-[10px] right-[-80px] md:right-[-150px] font-semibold text-xl md:font-bold md:text-2xl"
            >
              Videomaker
            </p>
            <p
              class="text-red-500 absolute top-[45px] right-[-90px] md:right-[-180px] font-semibold md:font-bold text-xl md:text-2xl"
            >
              Kopirayter
            </p>

            <p
              class="text-[#0AD4DE] absolute top-[80px] right-[-65px] md:right-[-133px]  font-semibold text-xl md:font-bold md:text-2xl"
            >
              Marketing
            </p>
            <p
              class="text-red-500 absolute top-[110px] right-[-10px] md:right-[-50px]  font-semibold text-xl md:font-bold md:text-2xl"
            >
              Montaj
            </p>
            <p
              class="text-[#0AD4DE] absolute top-[140px] right-[30px] md:right-[15px] font-semibold text-xl md:font-bold md:text-2xl"
            >
              SMM
            </p>
          </div>
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
.the_balolo_container {
  background-image: url("../assets/photo_2024-01-28_10-16-30.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.the_balolo_top {
  background: linear-gradient(to top, transparent, #02195f);
}
.the_balolo_bottom {
  background: linear-gradient(to bottom, transparent, #02195f);
}
img {
  object-fit: cover;
}
</style>
