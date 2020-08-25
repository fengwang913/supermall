<template>
    <div id="home">
        <div class="home-nav">
            <nav-bar>
            <div slot="center">
                购物街
            </div>
        </nav-bar>
        </div>
        <home-swiper :banners='banners'></home-swiper>
        <recommend-view :recommends='recommends'></recommend-view>
      
       
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import RecommendView from './childComps/RecommendView'
import {getHomeMultidata} from 'network/home'

export default {
    name:'home',
    data() {
        return {
            banners:[],
            recommends:[]
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        RecommendView


    },
    created(){
        //  1.请求多个数据
        getHomeMultidata().then(res =>{
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            console.log('111',this.recommends)
        })
    }
}
</script>

<style scoped>
.home-nav{
    background-color: var(--color-tint);
    color: white;
}
</style>