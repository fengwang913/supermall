import { debounce } from './utils.js'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener:null
        }
    },
    mounted() {
        let NewRefresh = debounce(this.$refs.scroll.refresh,100)
        this.itemImgListener = () =>{
            NewRefresh()
        }
        this.$bus.$on('itemImgLoad',this.itemImgListener)
        console.log('11111111我是混入中的内容')
    },
}