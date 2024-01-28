<template>
  <div class="image-slider bg-[#02195F] py-[20px] md:pb-[40px]">
    <div class="scrolling-container flex items-center md:w-[5000px] w-[1594px] gap-[10px] md:gap-[20px]">
      <div class="md:w-[180px] w-[68px] h-[48px] md:h-[150px]">
        <img src="../assets/h1.jpg" alt="image">
      </div>
      <div class="md:w-[180px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h2.jpg" alt="image">
      </div>
      <div class="md:w-[180px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h3.jpg" alt="image">
      </div>
      <div class="md:w-[280px] md:h-[150px] w-[88px] h-[48px]">
        <img src="../assets/h4.jpg" alt="image">
      </div>
      <div class="md:w-[180px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h5.jpg" alt="image">
      </div>
      <div class="md:w-[180px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h6.jpg" alt="image">
      </div>
      <div class="md:w-[250px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h7.jpg" alt="image">
      </div>
      <div class="md:w-[180px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h8.jpg" alt="image">
      </div>
      <div class="md:w-[300px] md:h-[150px] w-[98px] h-[48px]">
        <img src="../assets/h9.jpg" alt="image">
      </div>
      <div class="md:w-[420px] md:h-[150px] w-[148px] h-[48px]">
        <img src="../assets/h10.jpg" alt="image">
      </div>
      <div class="md:w-[180px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h11.jpg" alt="image">
      </div>
      <div class="md:w-[180px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h12.jpg" alt="image">
      </div>
      <div class="md:w-[375px] md:h-[150px] w-[118px] h-[48px]">
        <img src="../assets/h13.jpg" alt="image">
      </div>
      <div class="md:w-[160px] md:h-[150px] w-[58px] h-[48px]">
        <img src="../assets/h14.jpg" alt="image">
      </div>
      <div class="md:w-[300px] md:h-[150px] w-[88px] h-[48px]">
        <img src="../assets/h15.jpg" alt="image">
      </div>
      <div class="md:w-[160px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h16.jpg" alt="image">
      </div>
      <div class="md:w-[180px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h17.jpg" alt="image">
      </div>
      <div class="md:w-[180px] md:h-[150px] w-[68px] h-[48px]">
        <img src="../assets/h18.jpg" alt="image">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    
  },
};
</script>
<style scoped>
.scrolling-container {
        overflow: hidden;
        animation: scrollAnimation 50s linear infinite;
    }
    @media screen and (max-width: 768px) {
        .scrolling-container {
        overflow: hidden;
        animation: scrollAnimation 80s linear infinite;
    }
    @keyframes scrollAnimation{
        0%{
            transform: translateX(100%);
        }
        100%{
            transform: translateX(-100%);
        }
    }
    }
    @keyframes scrollAnimation{
        0%{
            transform: translateX(40%);
        }
        100%{
            transform: translateX(-100%);
        }
    }
    img{
        object-fit: cover;
    }
</style>
