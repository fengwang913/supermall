<template>
    <div class="tab-control"> 
        <div v-for="(item,index) in titles" 
        :key="index" 
        @click="itemClick(index)"
        :class="{active:index === currentIndex}"
        class="tab-control-item" >
            <span> {{item}} </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            this.$emit('tabClick',index)
        },
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
}

.tab-control-item{
    flex:1;
}

.active{
    color: var(--color-high-text);
   
}

.active span{
     border-bottom: 3px solid var(--color-high-text);
     padding: 5px;

}


</style>