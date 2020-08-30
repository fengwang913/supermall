<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" />
        <scroll class="content" ref="scroll">
            <detail-swiper :topImages='topImages'></detail-swiper>
            <detail-base-info :goods='goods'/>
            <detail-shop-info :shop='shop' />
            <detail-goods-info :detailInfo='detailInfo' />
            <detail-param-info :paramInfo='paramInfo' />
        </scroll>


   
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'


import Scroll from 'components/common/scroll/Scroll'
import { debounce } from 'common/utils.js'
import { itemListenerMixin } from 'common/mixin.js'



import { getDetail,Goods,Shop,GoodsParam } from 'network/detail.js'


export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo
    },
    mixins:[itemListenerMixin],
     data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{}
            
            
        }
    },
    mounted() {
        console.log('mounted')
    },
    created() {
        // 1、 保存传入的id

        console.log('11111',this.$route.params)
        this.iid = this.$route.params.iid
        console.log('22222',this.iid)

        //  2 根据id请求详情数据
        getDetail(this.iid).then(res => {
            console.log('4444',res);
            const data = res.result
            // 1. 获取顶部轮播图
            this.topImages = data.itemInfo.topImages

            //  2.获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            console.log('his.goods',this.goods)
            
            //  3 创建店铺信息
            this.shop = new Shop(data.shopInfo)
            console.log(this.shop)

            //  4 获取店铺信息
            this.detailInfo = data.detailInfo;

            // 5 获取参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        })
    },
   
}
</script>

<style scoped>

#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}

.content{
    height: calc(100vh - 44px);
}
.detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
}

</style>