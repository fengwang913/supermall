<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item.index" class="cecommend-item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.cecommend-item{
    flex: 1;
}
.cecommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    
   
}

</style>