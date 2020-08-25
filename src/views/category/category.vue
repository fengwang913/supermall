<template>
    <div class="wapper" ref="aaaaa">
        <ul class="content">
            <botton>按钮</botton>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
             <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
             <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
            <li>分类列表</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'category',
    data(){
        return{
            scroll:null
        }
    },
    //  组件创建完后调用created
    created(){
        // new BScroll(document.querySelector('.content'))
        // this.scroll =new BScroll('.wqapper',{

        // })
    },
    mounted(){
        console.log(this.$refs.aaaaa)
        console.log(document.querySelector('.wapper'))
        // this.scroll =new BScroll('.wapper',{

        //  })
         this.scroll = new BScroll(document.querySelector('.wapper'),{
             probeType:3,
             pullUpLoad:true

         })
        this.scroll.on('scroll',(position) => {
            //  console.log(position)
         })
        this.scroll.on('pullingUp',() => {
             console.log('上拉加载更多')
         })

    }
}
</script>

<style scoped>
.wapper{
    height: 150px;
    background-color: red;
    overflow: hidden;

    }
/* .content{
    height: 200px;
    background-color: red; */

    /* overflow: hidden; */
    /* overflow-y: scroll; */
/* } */
</style>