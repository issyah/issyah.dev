<template>
    <div>
        <div class="container p-4 mx-auto md:min-h-screen pb-8">
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
                            description: 'The most satisfying keyboard I have ever typed with. Expensive? Yes. Worth it? Definitely.'
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
                            header: 'IDE',
                            title: 'Github\'s Atom',
                            description: 'Love Atom to bits. Customisable plugins and themes. I have a terminal + github all integrated within atom so pushing codes live is a breeze. It would be the perfect IDE if it had Intellisense (I\'m looking at you Visual Studio Code).'
                        },
                        {
                            header: 'Browser',
                            title: 'Google Chrome',
                            description: 'My go-to development browser. Add Vue\'s devtool on Google Chrome for Vue.js application and you are all set!'
                        },
                        {
                            header: 'Browser',
                            title: 'Blisk',
                            description: '&quot;What? 2 browser? You must be joking.&quot; Yup. Best browser to test responsiveness of a website.'
                        }
                    ]"></hardware-list>

            </div>
        </div>
    </div>
</template>
<script>
    import HardwareList from '~/components/hardware_list.vue'
    export default {
        components:{
            HardwareList
        }
    }
</script>
