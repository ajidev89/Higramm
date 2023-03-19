<script setup>
import 'animate.css';
import { ref } from "vue";


let showStudent = ref(true)

const toogleShowStudent = (value) => {

    showStudent.value = value
}

</script>

<template>
    <section v-show="showStudent" class="pt-16 animate__animated animate__fadeIn animate__faster px-6 lg:px-16 grid lg:grid-cols-[53%_44%] place-content-center gap-8">
        <div class="">
            <div class="flex gap-6 mb-8">
                <button @click="toogleShowStudent(true)" :class="{'btn-active':showStudent,'btn-inactive':!showStudent }">
                    Learn with Us
                </button>
                <button  @click="toogleShowStudent(false)" :class="{'btn-active':!showStudent,'btn-inactive':showStudent }">
                    Work with us
                </button>
            </div>
            <h1 class="text-3xl lg:text-5xl font-bold mb-4">
                <span class="text-primary-green">
                        Unlock
                </span> Your Design 
                <span class="text-primary-pink">
                    Superpowers
                </span>       
            </h1>
            <p class="text-sm font-light mb-8">
                Welcome to our design tutor website, where we're dedicated to helping you <br> unlock your full potential as a web designer.
            </p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <div class="flex justify-between">
                        <div>
                            <img src="/img/reading.svg" class="h-[30px] w-[30px]" alt="">
                        </div>
                        <div>
                            <div class="badge-green">
                                Coming soon
                            </div>
                        </div>
                    </div>
                    <div class="my-4 font-semibold">
                        Courses
                    </div>
                    <p class="text-sm font-light mb-4 text-justify">
                        Whether you're just starting out or looking to take your skills to the next level, our team of expert tutors are here to provide you with the guidance, knowledge, and inspiration you need to become a true web hero.
                    </p>

                    <a href="" class="active text-sm flex gap-2 items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>  
                    </a>
                </div>
                <div>
                    <div class="flex justify-between">
                        <div>
                            <img src="/img/student.svg" class="h-[30px] w-[30px]" alt="">
                        </div>
                        <div>
                            <div class="badge-green">
                                Coming soon
                            </div>
                        </div>
                    </div>
                    <div class="my-4 font-semibold">
                        Bootcamps
                    </div>
                    <p class="text-sm font-light mb-4 text-justify">
                        Whether you're just starting out or looking to take your skills to the next level, our team of expert tutors are here to provide you with the guidance, knowledge, and inspiration you need to become a true web hero.
                    </p>

                    <a href="" class="active text-sm flex gap-2 items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>  
                    </a>
                </div>
            </div>
        </div>
        <div class="">
            <div class="lg:h-full h-96 relative">
                <div class="h-full flex justify-center items-center bg-overlay-section w-auto  rounded-xl ">
                    <div>
                        <a href="">
                            <img src="/img/play.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="absolute bottom-0 p-6 left-0 w-full text-gray-100 z-20">
                    <h1 class="text-2xl lg:text-3xl font-semibold mb-3">
                        Higrammdesign <br>
                        for 
                        <span class="text-secondary">
                            Students
                        </span> 
                    </h1> 
                    <p class="text-xs font-light">
                        Whether you're just starting out or looking to take your skills to the next level, our team of expert tutors are here to provide you with the guidance, knowledge, and inspiration you need to become a true web hero.
                    </p>
                </div>
            </div>

        </div>
    </section>
    <section v-show="!showStudent" class="pt-16 animate__animated animate__fadeIn animate__faster px-6 lg:px-16 grid lg:grid-cols-[53%_44%] place-content-center gap-8">
        <div class="">
            <div class="flex gap-6 mb-8">
                <button @click="toogleShowStudent(true)" :class="{'btn-active':showStudent,'btn-inactive':!showStudent }">
                    Learn with Us
                </button>
                <button  @click="toogleShowStudent(false)" :class="{'btn-active':!showStudent,'btn-inactive':showStudent }">
                    Work with us
                </button>
            </div>
            <h1 class="text-3xl lg:text-5xl font-bold mb-4">
                <span class="text-primary-green">
                    Unleash
                </span> Your Digital 
                <span class="text-primary-pink">
                    Superpowers
                </span>       
            </h1>
            <p class="text-sm font-light mb-8">
                Welcome to our design agency, where we help businesses like yours become <br> web heroes.
            </p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <div class="flex justify-between">
                        <div>
                            <img src="/img/work.svg" class="h-[30px] w-[30px]" alt="">
                        </div>
                        <div>
                            <div class="badge-green">
                                Coming soon
                            </div>
                        </div>
                    </div>
                    <div class="my-4 font-semibold">
                        Work with Us
                    </div>
                    <p class="text-sm font-light mb-4 text-justify">
                        Whether you're just starting out or looking to take your skills to the next level, our team of expert tutors are here to provide you with the guidance, knowledge, and inspiration you need to become a true web hero.
                    </p>

                    <a href="" class="active text-sm flex gap-2 items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>  
                    </a>
                </div>
                <div>
                    <div class="flex justify-between">
                        <div>
                            <img src="/img/chat.svg" class="h-[30px] w-[30px]" alt="">
                        </div>
                        <div>
                            <div class="badge-green">
                                Coming soon
                            </div>
                        </div>
                    </div>
                    <div class="my-4 font-semibold">
                        Contact us
                    </div>
                    <p class="text-sm font-light mb-4 text-justify">
                        Whether you're just starting out or looking to take your skills to the next level, our team of expert tutors are here to provide you with the guidance, knowledge, and inspiration you need to become a true web hero.
                    </p>

                    <a href="" class="active text-sm flex gap-2 items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>  
                    </a>
                </div>
            </div>
        </div>
        <div class="">
            <div class="lg:h-full h-96 relative">
                <div class="h-full flex justify-center items-center bg-overlay-section w-auto  rounded-xl ">
                    <div>
                        <a href="">
                            <img src="/img/play.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="absolute bottom-0 p-6 left-0 w-full text-gray-100 z-20">
                    <h1 class="text-2xl lg:text-3xl font-semibold mb-3">
                        Higrammdesign <br>
                        for 
                        <span class="text-secondary">
                            Business
                        </span> 
                    </h1> 
                    <p class="text-xs font-light">
                        Whether you're just starting out or looking to take your skills to the next level, our team of expert tutors are here to provide you with the guidance, knowledge, and inspiration you need to become a true web hero.
                    </p>
                </div>
            </div>

        </div>
    </section>
</template>
