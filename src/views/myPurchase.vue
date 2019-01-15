<!--我的购买 -->
<template>
	<div class="myPurchase-wrapper">
		<div class="Purchase-content">
			<div class="Purchase-p">
				<div class="Purchase-list">
					<div class="Purchase-item" v-for="(item, index) in PurchaseData" :key="index">
						<div class="Purchase-date">{{item.date}}</div>
						<div class="Purchase-item-list" v-for="(items, _index) in item.purchaseList" :key="_index">
							<div class="Purchase-item-list-l">
								<img src="../../public/images/Purchase-icon.png" class="Purchase-icon">
								<div class="Purchase-text">{{items.purchaseText}}</div>
							</div>
							<div class="Purchase-money">{{items.purchaseMoney}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
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
	}
}
</script>
<style lang="scss" scope>
	.myPurchase-wrapper {
		width: 100%;
		height: 100%;
		background: #F2F5F8;
	}

	.Purchase-content {
		width:100%;
		height: 100%;
	}

	.Purchase-p {
		// padding: 0 22px;
	}
	.Purchase-date {
		color:#B4CAE5;
		font-size:14px;
		padding: 22px 0 22px 22px;
	}

	.Purchase-item-list {
		background: #fff;
		height: 64px;
		padding: 0 22px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2px;

	}
	.Purchase-item-list-l {
		width:100%;
		display: flex;
		align-items: center;
		flex:1;
		.Purchase-icon {
			width:18px;
			height: 18px;
			display: inline-block;
		}
		.Purchase-text {
			display: inline-block;
			flex:1;
			padding-left: 8px;
			color:#313233;
			font-size: 18px;
		}
	}

	.Purchase-money {
		color: #FF455B;
		font-size: 18px;
	}
</style>

