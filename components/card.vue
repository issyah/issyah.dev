<template>
    <div class="w-full md:w-5/6 mx-auto">
        <!-- <div class="relative w-5/6 md:w-full mx-auto rounded-lg overflow-hidden" :style="{transform:getTransformsOffset}"> -->
        <div ref="card">
            <div class="relative w-5/6 md:w-full mx-auto rounded-lg overflow-hidden" data-depth="0.1">
                <img :src="imageUrl" alt="Issyah Ismail" class=" h-full w-full object-cover"/>
                <img :src="imageUrlHover" alt="Issyah Ismail" class="top-0 absolute h-full w-full object-cover transition-opacity" :class="hoverImgOpacity"/>
            </div>
        </div>
        <div class="md:px-3 -mt-12 relative" ref="card2">
            <!-- <div class="p-5 text-left bg-gray-100 rounded-lg shadow-lg" :style="{transform: getTransforms}"> -->
            <div class="p-5 text-left bg-gray-100 rounded-lg shadow-lg" data-depth="0.2">
                <h2 class="text-gray-900 font-normal text-xl">
                    <div class="mt-2">
                        I am mad in love with <span class="text-red-500 inline-block border-red-500 border-b-2 p-1" @mouseover="toggleDp" @mouseout="toggleDp">80s Synthwave music</span> and a huge <span class="text-red-500 border-red-500 border-b-2 inline-block p-1 ">Star Wars</span> nerd.
                    </div>
                    <div class="mt-2">
                        This is my go to playlist:
                        <a href="https://open.spotify.com/playlist/4I0JcQ8JTShz3th9GGNtxJ?si=1OgxiTw-TrC3QF2pwpqkSw" class="text-green-500" target="_blank">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="h-10 inline"><path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" class=""></path></svg>
                        </a>
                    </div>
                </h2>
            </div>
        </div>
    </div>
</template>
<script>
    import parallexjs from 'parallax-js';
    export default ({
        data:() => ({
            x: '',
            y: '',
            hoverImgOpacity: 'opacity-0',
            p2: '',
        }),
        computed:{
            getTransforms(){
                return `translate(${this.x}px, ${this.y}px)`
            },
            getTransformsOffset(){
                return `translate(${-this.x}px, -${-this.y}px)`
            }
        },
        props:{
            mouseX:'',
            mouseY: '',
            imageUrl: '',
            imageUrlHover: '',
        },
        methods:{
            toggleDp(){
                this.hoverImgOpacity = (this.hoverImgOpacity == 'opacity-0') ? 'opacity-100' : 'opacity-0';

                let toggleBackground = (this.hoverImgOpacity == 'opacity-0') ? true : false
                this.$emit('toggle-bg', toggleBackground);
            },
            disableP2(){
                this.p2.disable();
                console.log('mouse over');
            },
            enabledP2(){
                this.p2.enable();
            }
        },
        mounted(){
            this.imgMouseOverUrl = this.imageUrl;
            let parallex = this.$refs.card;
            let parallex2 = this.$refs.card2;
            let p = new parallexjs(parallex,{
                relativeInput: true,
            });
            this.p2 = new parallexjs(parallex2,{
                relativeInput: true,
                pointerEvents: true,
            });
        },
        created(){

        },
        watch:{
            mouseX(value){
                let vx = value * 0.005;
                this.x = -vx;
            },
            mouseY(value){
                let vy = value * 0.005;
                this.y = -vy;
            }
        }
    })
</script>
