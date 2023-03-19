<template>
    <section class="">
        <Header/>
        <router-view></router-view>
        <Footer/>
    </section>
   
</template>
  
<script setup>
    import Footer from './components/Navbar/Footer.vue';
    import Header from './components/Navbar/Header.vue';
</script>
