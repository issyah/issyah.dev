<template>
    <div @mousemove="getMouseEvent">
        <div class="relative">
            <div class="container text-center md:min-h-screen p-4 md:flex justify-between mx-auto">
                <div class="md:w-7/12 text-center md:text-left md:ml-10 p-4 p-4 self-center md:order-last">
                    <h1 class="font-semibold tracking-normal text-left inline-block relative header-name">Issyah Ismail</h1>
                    <div class="text-left">
                        <h1 class="text-3xl md:text-6xl font-light">UI / UX</h1>
                        <h1 class="md:text-6xl text-3xl font-light"><span class="text-red-500">Front-End</span> Developer</h1>
                        <social-icons></social-icons>
                    </div>
                </div>
                <div class="mx-auto md:w-5/12 relative self-center mt-10">
                    <card
                    @toggle-bg="setBackground($event)"
                    :image-url="require('~/assets/images/dp2.jpg')"
                    :image-url-hover="require('~/assets/images/dp.jpg')"
                    :mouse-x="mouseX"
                    :mouse-y="mouseY"
                    >
                    </card>
                </div>
            </div>
        </div>

        <div id="readme"></div>
        <div class="container p-4 mx-auto relative md:min-h-screen">
            <death-star
                class="hidden md:block"
                :scroll="scroll"></death-star>
            <div class="md:flex justify-between">
                <div class="w-full md:w-1/2">
                    <div :style="{transform: setParallexDepth(0.1, 'readme')}" class="md:bg-transparent mt-4" ref="readme">
                        <div class="text-left" v-scroll-reveal>
                            <h1 class="text-4xl mt-10 md:text-6xl font-bold inline-block leading-tight">
                                <span class="text-red-500">
                                    <svg class="h-8 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="currentColor" d="M6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm9 2.41V7h2.59L15 4.41zM18 9h-3a2 2 0 0 1-2-2V4H6v16h12V9zm-2 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-5-4a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1z"/></svg>
                                </span>
                                Readme.md
                            </h1>
                        </div>
                        <div class="md:text-xl leading-relaxed relative mt-16 tracking-widest" v-scroll-reveal>
                            <div>
                                <p>I am a full-time front-end magician (a.k.a developer) working at SendForensics, based in Singapore. I am passionate about building user interfaces and front-end components that just work intuitively. With a little over 5 years of experience, I’ve grown to understand the fundamentals of designing and creating awesome user interfaces.  </p>
                                <p class="mt-5">
                                    During my free time, I love exploring and learning new front-end frameworks. As a hobby, I do side-projects for small companies that want to create their first online presence. Did I mentioned I love Star Wars?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 ml-auto tracking-wide relative">
                    <div class="mt-5 relative">
                        <!-- <div class="absolute inset-0 -ml-10 mr-10 rounded-lg bg-gray-800 hidden md:block" :style="{
                            transform : setParallexDepth(0.1, 'skillset')
                        }"></div> -->
                        <div class="relative p-4 shadow-2xl rounded-lg" ref="skillset" :style="
                            {
                                transform : setParallexDepth(0.2, 'skillset')
                            }
                        ">
                            <h3 class="text-2xl font-bold inline-block relative">
                                Current Skillset:
                            </h3>
                            <ul class="skills-list font-semibold">
                                <li v-scroll-reveal>
                                    <span>UI/UX Design</span>
                                </li>
                                <li v-scroll-reveal>
                                    <span>Responsive Web Design</span>
                                </li>
                                <li v-scroll-reveal>
                                    <span>Front-End Development</span>
                                </li>
                                <li v-scroll-reveal>
                                    <span>Data Visualisation</span>
                                </li>
                            </ul>
                            <h3 class="text-2xl font-bold inline-block relative mt-5" >
                                Language Proficiency:
                            </h3>
                            <labels
                                :labels="[
                                    '.js',
                                    '.vue',
                                    '.html',
                                    '.css',
                                    '.sass',
                                    '.php'
                                ]"></labels>

                            <h3 class="text-2xl font-bold block relative mt-5">
                                Need more geeky stuff?
                            </h3>
                            <nuxt-link to="/workstation" class="md:inline-block text-center block mt-5  px-5 py-1 text-xl border-white rounded-full border hover:bg-red-500 hover:border-red-500 items-center self-center">
                                Tools I love
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="works"></div>
        <div class="container md:min-h-screen p-4 mx-auto relative">
            <div class="md:text-right">
                <h1 class="text-4xl my-10 md:text-6xl font-bold inline-block leading-tight">
                    <svg class="inline-block h-8 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" class="heroicon-ui" d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4z"/></svg>
                    Recent Works
                </h1>
            </div>
            <div class="md:flex md:justify-between mt-10">
                <div class="md:w-7/12 relative p-5">
                    <a href="https://zyne.asia" target="_blank">
                        <img src="~/assets/works/zyneasia.jpg" class="w-full rounded-lg" alt="Zyne Asia" v-scroll-reveal>
                    </a>
                    <h3 class="absolute left-0 bottom-0 bg-gray-100 text-gray-900 md:text-5xl block font-bold md:-mr-10 md:mb-10 shadow-xl py-4 px-8 md:hover:opacity-100 rounded-lg" ref="obvy">
                        <a href="https://zyne.asia" target="_blank">zyne.asia</a>
                    </h3>
                </div>
            </div>
            <div class="md:flex md:justify-between mt-10">
                <div class="md:w-6/12">

                </div>
                <div class="md:w-7/12 relative p-5">
                    <a href="http://suzukisingapore.com.sg" target="_blank">
                        <img src="~/assets/works/suzukisingapore.jpg" class="w-full rounded-lg" alt="Suzuki Singapore Website Design" v-scroll-reveal>
                    </a>
                    <h3 class="absolute left-0 md:left-auto md:right-0 bottom-0 bg-gray-100 text-gray-900 md:text-5xl block font-bold md:-mr-10 md:mb-10 shadow-xl py-4 px-8 md:hover:opacity-100  rounded-lg"  ref="suzukisingapore">
                        <a href="http://suzukisingapore.com.sg" target="_blank">SUZUKISINGAPORE.SG</a>
                    </h3>
                </div>
            </div>
            <div class="md:flex md:justify-between mt-10">
                <div class="md:w-7/12 relative p-5">
                    <a href="http://obvy.sg" target="_blank">
                        <img src="~/assets/works/obvy.jpg" class="w-full rounded-lg" alt="Obvy Website Design" v-scroll-reveal>
                    </a>
                    <h3 class="absolute left-0 bottom-0 bg-gray-100 text-gray-900 md:text-5xl block font-bold md:-mr-10 md:mb-10 shadow-xl py-4 px-8 md:hover:opacity-100 rounded-lg" ref="obvy">
                        <a href="http://obvy.sg" target="_blank">obvy.sg</a>
                    </h3>
                </div>
            </div>
            <div class="md:flex mt-10">
                <div class="md:w-6/12">

                </div>
                <div class="md:w-7/12 relative p-5">
                    <a href="http://harummanis.sg">
                        <img src="~/assets/works/harummanis.jpg" class="w-full rounded-lg" alt="Harummanis Website Design" v-scroll-reveal>
                    </a>
                    <h3 class="absolute left-0 md:left-auto md:right-0 bottom-0 bg-gray-100 text-gray-900 md:text-5xl block font-bold md:-mr-10 md:mb-10 shadow-xl py-4 px-8 md:hover:opacity-100  rounded-lg" ref="harummanis">
                        <a href="http://harummanis.sg" target="_blank">harummanis.sg</a>
                    </h3>
                </div>
            </div>
            <div class="md:flex  mt-10">
                <div class="md:w-7/12 relative p-5">
                    <a href="https://sg.polycourses.com" target="_blank">
                        <img src="~/assets/works/polycourses.jpg" class="w-full rounded-lg" alt="Polycourses Issyah Ismail" v-scroll-reveal>
                    </a>
                    <h3 class="absolute left-0 bottom-0 bg-gray-100 text-gray-900 md:text-5xl block font-bold md:-mr-10 md:mb-10 shadow-xl py-4 px-8 md:hover:opacity-100 rounded-lg"  ref="polycourses">
                        <a href="https://sg.polycourses.com" target="_blank">sg.polycourses.com</a>
                    </h3>
                </div>
            </div>
        </div>

        <div class="container md:min-h-screen p-4 mx-auto md:flex">
            <div class="md:self-center">
                <h1 class="text-5xl my-10 md:text-6xl font-bold inline-block  leading-tight" v-scroll-reveal>
                    <svg class="h-8 inline text-red-600" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" ><path fill="currentColor" d="M512 32H112c-8.8 0-16 7.2-16 16v256c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80v-16h32c70.6 0 128-57.4 128-128S582.6 32 512 32zm-80 272c0 17.6-14.4 32-32 32H176c-17.6 0-32-14.4-32-32V80h288v224zm80-64h-32V80h32c44.1 0 80 35.9 80 80s-35.9 80-80 80zm55.8 240H40.2c-37.3 0-50.2-48-32-48h591.7c18.1 0 5.2 48-32.1 48z" class=""></path></svg>
                    Coffee Talk?
                </h1>
                <div class="md:w-1/2">
                    <p class="text-4xl font-bold tracking-wide">
                        Have an <span class="text-red-600">idea</span> but can't digitalise it? I'd be <span class="text-red-600">happy</span> to help!
                    </p>
                    <a href="mailto:issyah89@gmail.com" class="bg-green-500 text-center md:text-4xl px-8 py-4 rounded-full my-10 block md:inline-block hover:bg-green-800">Let's have coffee!</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Card from '~/components/card.vue';
import SocialIcons from '~/components/social_icons.vue';
import Labels from '~/components/labels.vue';
import DeathStar from '~/components/death_star.vue';
export default {
    head(){
        return{
            title: 'Issyah Ismail - Front End Developer',
            meta:[
                {hid: 'description', name: 'description', content: 'Issyah Ismail. UI/UX Front End Developer based in Singapore'},

            ]
        }
    },
    transition: 'slide',
    layout: 'default',
    components: {
        Card,
        SocialIcons,
        Labels,
        DeathStar
    },
    data: () => ({
        mouseX: '',
        mouseY: '',
        scroll: '',
        background80: '',
    }),
    computed: {
        getTransforms() {
            return `translate(${this.mouseX*0.01}px, ${this.mouseY*0.01}px)`
        },
        parallex() {
            if (window.outerWidth >= 768) {
                return `translateY(-${this.scroll* 0.1}px)`
            }
        },
    },
    methods: {
        getMouseEvent(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        },
        handleScroll() {
            this.scroll = window.scrollY;
        },
        setBackground(e) {
            this.background80 = (!e) ? 'bg-80' : ''
        },
        setParallexDepth(factor, e) {
            let dom = this.$refs[e];
            if (dom) {
                let offsetHeight = dom.offsetHeight + dom.offsetTop;
                if (this.scroll > offsetHeight && window.outerWidth >= 768) {
                    let diff = this.scroll - offsetHeight;
                    return `translateY(-${diff * factor}px)`;
                } else if (this.scroll < offsetHeight && window.outerWidth >= 768) {
                    let diff = offsetHeight - this.scroll;
                    return `translateY(${diff*factor}px)`;
                }
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>
