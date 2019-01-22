<template>
  <div class="ugc-list"
       v-infinite-scroll="loadMore"
       infinite-scroll-disabled="isDisableScroll"
       infinite-scroll-immediate-check="true"
       infinite-scroll-distance="10">
    <x-header :left-options="{backText: ''}"
              title="成为专家"></x-header>
    <div class="ugc-list-item"
         v-for="(item,index) in ugcList"
         :key="index"
         @click="getUgcInfo(item.expertid)">
      <img :src="item.expertpic" />
      <div>
        <p>{{item.expertname}}</p>
        <p>近期10中8 盈利{{item.fprofitrate}}</p>
      </div>
      <span class="more">></span>
    </div>
    <load-more tip="正在加载"
               :show-loading="true"
               v-show="loading"></load-more>
    <load-more v-show="noData"
               :show-loading="false"
               tip="暂无更多数据"
               background-color="#fbf9fe"></load-more>
  </div>
</template>

<script>
import { XHeader,LoadMore } from 'vux'
import https from '../https.js'

export default {
  components: {
    XHeader,
    LoadMore
  },
  data(){
    return{
      ugcList:[],
      page: 1, // 分页页数
			matchtime: '', // 入参日期
			isDisableScroll: false, // 是否禁用滚动分页
			isCompleted: false, // 是否继续加载
			loading: false,
			noData: false
    }
  },
  methods:{
    getUgcInfo(index){
      this.$router.push({path:'/ugc-info', query: {ugcId:index}})
    },
    // 加载更多
		loadMore () {
			if (this.isCompleted) return
			this.isDisableScroll = true
			let page = ++this.page
			this.getList(page,'loadMore')
		},
    //请求专家列表（分页）
    getList(page,type){
      https.fetchPost('/expert/expertlist.jsp',{page,type:this.$route.query.ugcId} ).then((data) => {
        console.log("ugc",data.data)
        //分页拼接
        this.isDisableScroll = false
				if (type === 'init') {
          this.ugcList = data.data.list || []
          console.log('ugcList1',this.ugcList)
          
				} else {
          this.loading = true
          console.log('ugcList2',type,this.ugcList)
          
          this.ugcList = this.ugcList.concat(data.data.list) || []
          console.log('ugcList3',type,this.ugcList)
				}
				for (var i =0;i<data.data.list.length;i++){
          data.data.list[i].showInfoItem=false
				}
				if (!data.data.list.length) {
					this.isCompleted = true
					this.loading = false
					this.noData = true
				}
      }).catch(err=>{
				this.isDisableScroll = false
            console.log(err)
        }
      )
    }
  },
  mounted(){
    this.getList(this.page,  'init')
    
  }
}
</script>

<style lang="scss" scoped>
.ugc-list {
  width: 100%;
  // height: 100%;
  background: #f2f5f8;
  .vux-header {
    background: #ffffff;
  }
  .ugc-list-item {
    width: 91.5%;
    height: 80px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    border: 1px solid rgba(239, 242, 244, 1);
    margin: 0 auto;
    margin-top: 16px;
    position: relative;
    img {
      float: left;
      width: 48px;
      height: 48px;
      margin: 16px;
    }
    & > div {
      p {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        &:first-child {
          margin-top: 22px;
          font-size: 16px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
      }
    }
    .more {
      position: absolute;
      right: 30px;
      top: 50%;
      margin-top: -11px;
    }
  }
}
</style>
<style>
.ugc-list .vux-header .vux-header-title {
  color: #313233;
}
</style>

