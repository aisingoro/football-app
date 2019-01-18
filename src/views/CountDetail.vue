<!--我的购买 -->
<template>
  <div class="myPurchase-wrapper">
    <x-header :left-options="{backText: ''}"
              title="账户详情"></x-header>
    <div class="Purchase-content">
      <div class="Purchase-p">
        <div class="Purchase-list">
          <div class="Purchase-item"
               v-for="(item, index) in PurchaseData"
               :key="index">
            <div class="Purchase-date">{{item.createtime}}</div>
            <div class="Purchase-item-list"
                 v-for="(items, _index) in item.purchaseList"
                 :key="_index">
              <div class="Purchase-item-list-l">
                <img src="../../public/images/Purchase-icon.png"
                     class="Purchase-icon">
                <div class="Purchase-text">{{items.rechargetype}}</div>
              </div>
              <div class="Purchase-money">{{items.rechargeamount}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import https from '../https.js'
import {XHeader } from 'vux'
export default {
	components:{
		XHeader
	},
	data () {
		return {
			PurchaseData: [
				{
					date: '2018-01-08',
					purchaseList: [
						{
							purchaseText: '购买内参',
							purchaseMoney: '5元'
						}
					]
				},
				{
					date: '2018-01-08',
					purchaseList: [
						{
							purchaseText: '购买内参',
							purchaseMoney: '5元'
						},
						{
							purchaseText: '购买内参',
							purchaseMoney: '5元'
						}
					]
				},
				{
					date: '2018-01-08',
					purchaseList: [
						{
							purchaseText: '购买内参',
							purchaseMoney: '5元'
						},
						{
							purchaseText: '购买内参',
							purchaseMoney: '5元'
						}
					]
				}
			]
		}
	},
	mounted(){
		https.fetchPost('/user/rechargelist.jsp',{} ).then((data) => {
			console.log(data.data)
			this.PurchaseData = data.data.list

		}).catch(err=>{
					console.log(err)
			}
		)
	}
}
</script>
<style lang="scss" scope>
.myPurchase-wrapper {
  width: 100%;
  height: 100%;
  background: #f2f5f8;
  .vux-header {
    background: #ffffff;
  }
}

.Purchase-content {
  width: 100%;
  height: 100%;
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
}
</style>
<style>
.myPurchase-wrapper .vux-header .vux-header-title {
  color: #313233;
}
</style>


