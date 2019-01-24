<!--账户设置 -->
<template>
  <div class="myPurchase-wrapper"
       v-infinite-scroll="loadMore"
       infinite-scroll-disabled="isDisableScroll"
       infinite-scroll-immediate-check="true"
       infinite-scroll-distance="10">
    <x-header :left-options="{backText: ''}"
              title="账户设置"></x-header>
    <div class="Purchase-content">
      <div class="Purchase-p">
        <div class="Purchase-list">
          <div class="Purchase-item-list"
               v-for="(items, _index) in PurchaseData"
               :key="_index">
            <div class="Purchase-item-list-l">
              <img src="../../public/images/Purchase-icon.png"
                   class="Purchase-icon">
              <div class="Purchase-text">{{items.sourcetype}}</div>
            </div>
            <div class="Purchase-money">{{Number(items.balance)/100}}元<br>
              <span class="Purchase-date">{{items.date}}</span>
            </div>
          </div>
        </div>
      </div>
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
import https from '../https.js'
import {XHeader,LoadMore } from 'vux'
export default {
	components:{
    XHeader,
    LoadMore
	},
	data () {
		return {
      page: 1, // 分页页数
			matchtime: '', // 入参日期
			isDisableScroll: false, // 是否禁用滚动分页
			isCompleted: false, // 是否继续加载
			loading: false,
			noData: false,
			PurchaseData: []
		}
  },
  methods:{
    // 加载更多
		loadMore () {
			if (this.isCompleted) return
			this.isDisableScroll = true
			let page = ++this.page
			this.getList(page,'loadMore')
    },
    //请求账户详情列表（分页）
    getList(page,type){
      https.fetchPost('/user/blance.jsp',{page} ).then((data) => {
        console.log("ugc",data.data)
        //分页拼接
        this.isDisableScroll = false
				if (type === 'init') {
          this.PurchaseData = data.data.list || []
          
				} else {
          this.loading = true
          this.PurchaseData = this.PurchaseData.concat(data.data.list) || []
				}
				for (var j =0;j<data.data.list.length;j++){
          data.data.list[j].showInfoItem=false
					 switch(data.data.list[j].paysource){
						case '0001':
							data.data.list[j].sourcetype='内参'
						break;
						case '0002':
							data.data.list[j].sourcetype='预测'
						break;
						case '0003':
							data.data.list[j].sourcetype='充值'
						break;
						case '0004':
							data.data.list[j].sourcetype='内参包月'
						break;
						case '0005':
							data.data.list[j].sourcetype='预测包月'
						break;
						case '0090':
							data.data.list[j].sourcetype='签到'
						break;
						case '0097':
							data.data.list[j].sourcetype='卖出预测提现预先扣除'
						break;
						case '0099':
							data.data.list[j].sourcetype='不中退款'
						break;
						case '0098':
							data.data.list[j].sourcetype='提现'
						break;
						case '0006':
							data.data.list[j].sourcetype='购买比分'
						break;
						case '0007':
							data.data.list[j].sourcetype='购买半全场'
						break;
          }
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
<style lang="scss" scope>
.myPurchase-wrapper {
  width: 100%;
  // height: 100%;
  background: #f2f5f8;
  margin-top: 46px;
  .vux-header {
    background: #ffffff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
}

.Purchase-content {
  width: 100%;
  // height: 100%;
}

.Purchase-p {
  // padding: 0 22px;
}
.Purchase-date {
  color: #b4cae5;
  font-size: 14px;
  padding: 22px 0 10px 22px;
  font-family: PingFangSC-Regular;
}

.Purchase-item-list {
  background: #fff;
  height: 64px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1px;
}
.Purchase-item-list-l {
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  .Purchase-icon {
    width: 18px;
    height: 18px;
    display: inline-block;
  }
  .Purchase-text {
    display: inline-block;
    flex: 1;
    padding-left: 8px;
    color: #313233;
    font-size: 18px;
  }
}

.Purchase-money {
  color: #ff455b;
  font-size: 18px;
  text-align: right;
}
</style>
<style>
.myPurchase-wrapper .vux-header .vux-header-title {
  color: #313233;
}
</style>


