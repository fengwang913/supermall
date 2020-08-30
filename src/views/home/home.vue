<template>
    <div id="home" class="wapper">
        <nav-bar class="home-nav">
            <div slot="center">
                购物街
            </div>
        </nav-bar>

        <tab-control 
            class="tab-control" 
            :titles="['流行','新款','精选']" 
            @tabClick='tabClick'
            ref="tabControl1"
            v-show="isTabFixed"
            ></tab-control>
       
        <scroll 
            class="content" 
            ref="scroll" 
            :probe-type="3"
            @scroll='contentScroll'
            :pull-up-load='true'
            @pullingUp='loadMore'>
             <home-swiper :banners='banners' @swiperImageLoad='swiperImageLoad'></home-swiper>
            <recommend-view :recommends='recommends'></recommend-view>
            <feature-view></feature-view>
            <tab-control class="tab-control" 
            :titles="['流行','新款','精选']" 
            @tabClick='tabClick'
            ref="tabControl2"
            :class="{fixed:isTabFixed}"></tab-control>
            <goods-list :goods = showGoods></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
      
      
    </div>
</template>

<script>
import HomeSwiper from './childComps/homeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/backTop'

import { getHomeMultidata,getHomeGoods } from 'network/home'
import { debounce } from 'common/utils.js'
import { itemListenerMixin } from 'common/mixin.js'

export default {
    name:'home',
    mixins:[itemListenerMixin],
    data() {
        return {
            banners:[],
            recommends:[],
            currentType:'pop',
            isShowBackTop:false,
            tabOffsetTop:0,
            isTabFixed:false,
            saveY:0,
            itemImgListener:null,
            // currentIndex:0,
            goods:{
                'pop':{page:0 ,list:[]},
                'new':{page:0 ,list:[]},
                'sell':{page:0 ,list:[]}
            }
        }
    },
    components:{
        HomeSwiper,
        RecommendView,
        FeatureView,
        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop

    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    destroyed() {
        console.log('home destory')
    },
    activated() {
        
        this.$refs.scroll.scrollTo(0,this.saveY,0)
        this.$refs.scroll.refresh()

        
    },
    deactivated() {
        // 1 保存y值
        this.saveY = this.$refs.scroll.getScrollY()

        // 2 取消
        
    },
    created(){
        //  1.请求多个数据
        this.getHomeMultidata()
        // getHomeMultidata().then(res =>{
        //     this.banners = res.data.banner.list;
        //     this.recommends = res.data.recommend.list;
           
        // })

        // 2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
        // getHomeGoods('pop',1).then(res =>{
        //     console.log('3333',res)
        // })

        // 3 监听item中图片加载完成
        // this.$bus.$on('itemImageLoad',()=>{
        //     console.log('-------');
        //     this.$refs.scroll.refresh()
        // })
    },
    mounted() {
        console.log('mounted')
            // const refresh = debounce(this.$refs.scroll.refresh)

            // this.$bus.$on('itemImageLoad',()=>{
            //     refresh()

            // this.itemImgListener = () =>{

            // }
                // console.log('-----');
            
            // this.$refs.scroll.refresh()
        // })

        //  获取tabControl的tabOffsetTop
        //  所有组件都有一个属性 $el 
        // console.log(this.$refs.tabControl.$el.offsetTop);
    },
    methods:{
        // // 防抖函数
        // debounce(func,dalay){
        //     let timer = null
    
        //     return function(...args){
        //         if(timer) clearTimeout(timer)
        //         timer = setTimeout(() =>{
        //             func.apply(this,args)
        //         },dalay)
        //     }

        // },
        //  事件监听相关的方法
          tabClick(index){
              switch(index){
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType ='sell'
                        break
              }
                this.$refs.tabControl1.currentIndex = index;
                this.$refs.tabControl2.currentIndex = index;

          },
          contentScroll(position){
            //   console.log(position)
            //  1、 判断backtop是否显示
              this.isShowBackTop = (- position.y)>1000

            //   2、决定tabcontrol是否吸顶（position：dixed）
            this.isTabFixed = (-position.y) >this.tabOffsetTop

          },

          backClick(){
            //   console.log('点击')
            //   console.log(this.$refs.scroll.scroll)

            //   this.$refs.scroll.scroll.scrollTo(0,0,500)
            this.$refs.scroll.scrollTo(0,0)
          },
          loadMore(){
              console.log('上拉加载更多')
              this.getHomeGoods(this.currentType)
              this.$refs.scroll.finishPullUp()
          },

          swiperImageLoad(){
               this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;

          },


        //  网络请求相关方法
        getHomeMultidata(){
            getHomeMultidata().then(res =>{
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
           
        })

        },
        getHomeGoods(type){
            const page = this.goods[type].page+1
            getHomeGoods(type,page).then(res =>{
            console.log('3333',res)
            this.goods[type].list.push(...res.data.list) 
            this.goods[type].page += 1
        })
        },

      
       

    }
}
</script>

<style scoped>
#home{
    /* padding-top:44px; */
    height: 100vh;
    position: relative;
}
.home-nav{
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
}
/* .fixed{
    position: fixed;
    left: 0;
    right: 0;
    top:44px;
} */
/* .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;

} */
.tab-control{
    position: relative;
    z-index: 9;
}
.content{
  
    overflow: hidden;
    position:absolute;
    top:44px;
    bottom: 49px;
    right: 0;
    left: 0;
}

/* .content{
    height: calc(100vh - 93px);
    overflow: hidden;
    margin-top: 48px;
} */
</style>