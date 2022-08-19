<template>
	<div class="fx-select-container">
		<input type="text" :placeholder="placeholder" class="select-input">
		<button class="add-btn">追加</button>
	</div>
</template>

<script setup>
const props = defineProps({
	placeholder: String
})

const emit = defineEmits(['change'])
</script>

<style lang="stylus" scoped>
.fx-select-container {
	.select-input {
		padding 0 10px
		margin-right 10px
		width 200px
		height 32px
		line-height 32px
		border 1px solid #DCDFE6
		border-radius 4px
		color #606266
		cursor pointer
		&:hover {
			border-color #C0C4CC
		}
		&:focus {
			border-color #409EFF
		}
		&::placeholder {
			color #86909c	
		}
	}
	.add-btn{
		padding 8px 15px
    color: #fff
		border: 1px solid #DCDFE6;
		border-color #409EFF
		background-color #409EFF
		font-size 12px
    border-radius 3px;
		&:hover {
			border-color #66b1ff
			background-color #66b1ff
		}
	}
}
</style>