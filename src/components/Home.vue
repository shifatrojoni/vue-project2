<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Slider from "./Slider.vue";
import Departments from "./Departments.vue";
import AboutUs from "./AboutUs.vue";
import Doctors from './Doctors.vue';
import Contact from './Contact.vue';

</script>

<template>
  <div class="hero_area">
    <div class="hero_bg_box">
      <img src="/images/hero-bg.png" alt="" />
    </div>

    <!-- header section strats -->
    <Header />
    <!-- end header section -->
    <!-- slider section -->
    <Slider />
    <!-- end slider section -->
  </div>

  <!-- department section -->

  <Department />

  <!-- end department section -->

  <!-- about section -->

  <About />

  <!-- end about section -->

  <!-- doctor section -->

  <Doctors />

  <!-- end doctor section -->

  <!-- contact section -->
  <Contact />
  <!-- end contact section -->

  <!-- client section -->

  <Testimonial />

  <!-- end client section -->

  <!-- footer section -->
  <Footer />
  <!-- footer section -->
</template>

<style></style>