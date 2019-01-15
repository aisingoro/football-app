<!--我的购买 -->
<template>
	<div class="myPurchase-wrapper">
		<div class="Purchase-content">
			<div class="Purchase-p">
				<div class="Purchase-list">
					<div class="Purchase-item">
						<div class="Purchase-date">2018-01-08</div>
						<div class="Purchase-item-list">
							<div class="Purchase-item-list-l">
								<img src="../../public/images/Purchase-icon.png" class="Purchase-icon">
								<div class="Purchase-text">购买内参</div>
							</div>
							<div class="Purchase-money">5元</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {

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

	}
	.Purchase-item-list-l {
		width:100%;
		display: flex;
		align-items: center;
		flex:1;
		.Purchase-icon {
			width:18px;
			height: 18px;
			background: #B4CAE5;
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

	}
</style>

