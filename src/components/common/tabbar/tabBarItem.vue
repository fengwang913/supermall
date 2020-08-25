<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
         <div v-else>
            <slot name="item-icon-active"></slot>
        </div>  
        <div :style="activeStyle" >
            <slot name="item-text"></slot>
        </div>
        <!-- <div :class="{active:isActive}" >
            <slot name="item-text"></slot>
        </div> -->

           <!-- <slot v-if="!isActive" name="item-icon"></slot>
            <slot v-else name="item-icon-active"></slot> -->
            <!-- <slot></slot>
            <slot></slot> -->
          <!-- <img src="../../assets/img/tabbar/home.jpeg">
          <div>
            首页
        </div> -->
    </div>
  
   
 

    
</template>

<script>
export default {
    name:'TabBarItem',
    data() {
        return {
            // isActive:true,
        }
    },
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods: {
        itemClick(){
            console.log('111')
            this.$router.push(this.path)
        }
    },
}
</script>

<style scoped>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
} 
.active{
    color:red;
}

</style>