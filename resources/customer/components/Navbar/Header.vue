<script setup>

</script>
<template>
    <header class="bg-white flex justify-between  items-center py-5 px-6 lg:px-16">
        <div>
            <img src="img/logo.svg" class="h-[33px] w-auto" alt="">
        </div>
        <div>
            <ul class="hidden lg:flex  gap-10 font-medium">
                <li>
                    <a href="" class="nav-link active">Home</a>
                </li>
                <li>
                    <a href="" class="nav-link">Products</a>
                </li>
                <li>
                    <a href="" class="nav-link">Our works</a>
                </li>
                <li>
                    <a href="" class="nav-link">Students</a>
                </li>
                <li>
                    <a href="" class="nav-link">Our Blog</a>
                </li>
                <li>
                    <a href="" class="nav-link">Contact us</a>
                </li>
            </ul>
        </div>
        <div class="lg:hidden">
            <button class="text-primary-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>   
            </button>           
        </div>
        <div class="hidden lg:block">
            <div class="bg-secondary h-8 w-8 flex justify-center items-center rounded-full">
                <img src="/img/moon.svg" alt="">
            </div>
        </div>
    </header>
  
</template>

