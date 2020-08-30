<template>
<!-- ref 绑定子组件 -->
    <div class="wrapper" ref="wrapper">
        <div class="content"> 
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    data(){
        return{
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        //  1 创建btscroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:true,
            pullUpLoad:this.pullUpLoad


        })
        // 2 监听滚动的位置
        this.scroll.on('scroll',(position) =>{
            // console.log(position)
            this.$emit('scroll',position)
        })
        console.log('1111111',this.scroll)

        // 刷新  解决上拉加载不完全的bug
        // this.scroll.refresh()

        // 3 监听上拉事件  监听滚动到底部
        if(this.probeType ===2 || this.probeType ===3){
            this.scroll.on('pullingUp',()=>{
            console.log('监听滚动到底部')
            this.$emit('pullingUp')
        })
        }
        

        // this.scroll.scrollTo(x,y)
        
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll &&  this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            
             this.scroll && this.scroll.refresh()
             console.log('-------')
        },
        getScrollY(){
           return this.scroll ? this.scroll.y : 0
        },
    }
}
</script>