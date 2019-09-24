<template>
    <div>
        <div class="container p-4 mx-auto pb-8">
            <div class="mt-10 md:w-full lg:w-1/2">
                <h1 class="text-5xl font-bold">Workstation</h1>
                <p class="text-xl">Check out what I am stacking! The most important one that is.</p>
                <h1 class="text-4xl font-medium inline-block leading-tight mt-8">
                    <span class="text-red-500">
                        <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current inline-block h-8"><path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path></svg>
                    </span>
                    Hardware
                </h1>
                <p>
                    <hardware-list
                    :hardware-list="[
                        {
                            header: 'Laptop',
                            title: '15&quot; Macbook Pro (2015) 2.2Ghz Intel core i7 16 GB Ram',
                            description: 'The senior workhorse. Still packs a punch even after 4 years. Who needs dongle when you have all the ports!',
                        },
                        {
                            header: 'Mouse',
                            title: 'Logitech MX Master',
                            description: 'The mouse badass mouse ever. Side-scroll wheel. What?!'
                        },
                        {
                            header: 'Keyboard',
                            title: 'Leopold FC660C Topre Keyboard',
                            description: 'The most satisfying keyboard I have ever typed with. Expensive? Yes. Worth it? Definitely. Topre > Cherry MX > Apple Keyboard. Fight me. '
                        },
                    ]"></hardware-list>
                </p>
                <h1  class="text-4xl font-medium inline-block leading-tight mt-8">
                    <span class="text-red-500">
                        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="fill-current inline-block h-8">
    						<g id="Page-1" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
    							<g id="icon-shape">
    								<path d="M0,2.99508929 C0,1.8932319 0.898212381,1 1.99079514,1 L18.0092049,1 C19.1086907,1 20,1.8926228 20,2.99508929 L20,17.0049107 C20,18.1067681 19.1017876,19 18.0092049,19 L1.99079514,19 C0.891309342,19 0,18.1073772 0,17.0049107 L0,2.99508929 Z M2,5 L18,5 L18,17 L2,17 L2,5 Z" id="Combined-Shape"></path>
    							</g>
    						</g>
						</svg>
                    </span>
                    Software
                </h1>
                <hardware-list
                    :hardware-list="[
                        {
                            img: 'https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-logo-112585a3112ec646fa9e426f835b1626094f57354fd7dd059a8f455881654ad2.svg',
                            header: 'IDE',
                            title: 'Github\'s Atom',
                            description: 'Love Atom to bits. Customisable plugins and themes. I have a terminal + github all integrated within atom so pushing codes live is a breeze. It would be the perfect IDE if it had Intellisense (I\'m looking at you Visual Studio Code).'
                        },
                        {
                            img: 'https://desktop.github.com/images/desktop-icon.svg',
                            header: 'GIT',
                            title: 'Github Desktop',
                            description: 'What a world it would be without git. I wouldn\'t bore you the details about what git is (for the uninitiated, just google git) but this is my go-to gui for checking changes of other developer wizards. I would usually pull and push directly inside Atom itself.'
                        },
                        {
                            img: 'https://www.google.com/chrome/static/images/chrome-logo.svg',
                            header: 'Browser',
                            title: 'Google Chrome',
                            description: 'My go-to development browser. Add Vue\'s devtool on Google Chrome for Vue.js application and you are all set!'
                        },
                        {
                            img: 'https://blisk.io/Images/blisk-logo.svg',
                            header: 'Browser',
                            title: 'Blisk',
                            description: '&quot;What? 2 browser? You must be joking.&quot; Yup. Best browser to test responsiveness of a website.'
                        }
                    ]"></hardware-list>

                    <h1 class="text-4xl font-medium inline-block leading-tight mt-8">
                        <span class="text-red-500">
                            <svg width="32.57142857142856" height="24" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="fill-current inline-block h-8"><path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fill-rule="evenodd"></path></svg>
                        </span>
                        Development Tools
                    </h1>
                    <hardware-list
                        :hardware-list="[
                        {
                            img: require('~/assets/images/vue.png'),
                            header: 'Javascript framework',
                            title: 'Vue.js / Nuxt.js',
                            description: 'Vue is my go-to framework for building user-interface and front-end wizardry. I\'ve worked with other frameworks like jQuery, Angular 1.0 and React but I got stuck with Vue because it is just so easy to get started with. It does not have a huge learning curve like React and Angular 2.0 and I personally would recommend you to try it! Once you the gist of it, proceed to nuxt! This site is built using Nuxt.js'
                        },
                        {
                            img: require('~/assets/icons/bootstrap.svg'),
                            header: 'CSS Framework',
                            title: 'Bootstrap 3/4',
                            description: 'For fast building of websites, this is my go to CSS Framework. It is responsive out of the box and it comes with fundamentals UI components to get started with. Specifically, I would use BootstrapVue to compile it together with Vue.'
                        },
                        {
                            img: require('~/assets/icons/tailwind.svg'),
                            header: 'CSS Framework',
                            title: 'Tailwind CSS (new)',
                            description: 'This is a new framework I love working on right now. It has no components, no forms and no UI. So what\'s good about it? Everything! It is a utility based framework which means you don\'t have to write a single CSS class with it. You can build your components however you want. You don\'t have to overwrite existing components cause, it doesn\'t have any. This site is built with Tailwind CSS.',
                        },
                        {
                            img: 'https://laravel.com/img/logomark.min.svg',
                            header: 'PHP Framework',
                            title: 'Laravel',
                            description: 'For building full-scale web application, this is the chosen one. It has a really powerful templating engine called blade. As a bonus, it has vue installed out of the box! Wee.'
                        }
                        ]"></hardware-list>
            </div>
        </div>
    </div>
</template>
<script>
    import HardwareList from '~/components/hardware_list.vue'
    export default {
        transition: 'fade',
        components:{
            HardwareList
        },
        head(){
            return {
                title: 'Issyah Ismail - Workstation',
            }
        }
    }
</script>
