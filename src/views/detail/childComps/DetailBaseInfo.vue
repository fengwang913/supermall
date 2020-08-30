<template>
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
        <div class="info-title">
            {{goods.title}}
        </div>
        <div class="info-price">
            <span class="info-oldprice"> {{goods.oldPrice}} </span>
            <span class="info-discount"> {{goods.discount}} </span>  
        </div>
         <div class="info-columns">
             <span class="left"> {{goods.columns[0]}}  </span>
             <span class="center"> {{goods.columns[1]}} </span>
             <span class="right"> {{goods.services[goods.services.length-1].name}}</span>
        </div>

        <div class="info-services">
            <div class="services-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
             </div>
        </div>
        
      
      
        
    </div>
    
</template>

<script>
export default {
    name:'DetailBaseInfo',
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
 
}
</script>

<style scoped>
.base-info{
    margin-top: 15px;
    padding: 5px 8px  10px 8px;
    border-bottom: 5px solid #f2f5f8 ;
}

.info-title{
    color: black;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
}

.info-price{
    margin-top:15px;
 
}
.info-discount{
    padding: 2px 5px;
    border-radius: 8px;
    font-size:12px;
    background-color:var(--color-high-text);
    color: #fff;
    margin-left: 5px;

    position: relative;
    top: -8px;
}
.info-columns{
    display: flex;
    padding: 10px 00px 10px 0px;
    border-bottom: 1px solid #f2f5f8;
    /* text-align: center; */
}
.left{
    flex:1
}
.center{
    flex:1;
    text-align: center;
}
.right{
    flex: 1;
    text-align: right;
}
.info-services{
    display: flex;
}
.services-item{
    flex:1;
    font-size:13px;
    margin-top: 10px;
    color: black;
}
.services-item img{
    margin-top: 10px;
    width:15px;
    height: 15px;
    margin-bottom: -3px;
}
.info-oldprice{
    text-decoration: line-through;
    
}
</style>