<!--我的购买 -->
<template>
	<div class="myPurchase-wrapper">
		<x-header :left-options="{backText: ''}"
		          title="我的购买"></x-header>
		<div class="Purchase-content">
			<div class="Purchase-p">
				<div class="Purchase-list">
					<div class="Purchase-item"
					     v-for="(item, index) in PurchaseData"
					     :key="index">
						<div class="Purchase-date">{{item.date}}</div>
						<div class="Purchase-item-list"
						     v-for="(items, _index) in item.purchaseList"
						     :key="_index">
							<div class="Purchase-item-list-l">
								<img src="../../public/images/Purchase-icon.png"
								     class="Purchase-icon">
								<div class="Purchase-text">{{items.buytype}}</div>
							</div>
							<div class="Purchase-money">{{Number(items.rechargeamount)/100}}元</div>
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
			
			for(var i = 0;i<this.PurchaseData.length;i++){
				console.log(this.PurchaseData[i].purchaseList)
				for(var j=0;j<this.PurchaseData[i].purchaseList.length;j++){
					console.log(this.PurchaseData[i].purchaseList[j])
					 switch(this.PurchaseData[i].purchaseList[j].buytype){
						case '0001':
							this.PurchaseData[i].purchaseList[j].buytype='内参'
						break;
						case '0002':
							this.PurchaseData[i].purchaseList[j].buytype='预测'
						break;
						case '0003':
							this.PurchaseData[i].purchaseList[j].buytype='充值'
						break;
						case '0004':
							this.PurchaseData[i].purchaseList[j].buytype='内参包月'
						break;
						case '0005':
							this.PurchaseData[i].purchaseList[j].buytype='预测包月'
						break;
						case '0090':
							this.PurchaseData[i].purchaseList[j].buytype='签到'
						break;
						case '0097':
							this.PurchaseData[i].purchaseList[j].buytype='卖出预测提现预先扣除'
						break;
						case '0099':
							this.PurchaseData[i].purchaseList[j].buytype='不中退款'
						break;
						case '0098':
							this.PurchaseData[i].purchaseList[j].buytype='提现'
						break;
						case '0006':
							this.PurchaseData[i].purchaseList[j].buytype='购买比分'
						break;
						case '0007':
							this.PurchaseData[i].purchaseList[j].buytype='购买半全场'
						break;
					}
				}
			}

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


