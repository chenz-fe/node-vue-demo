<template>
	<div>
		<h2>页面测试</h2>
		<div>
			<el-table :data="tableData" style="width: 80%; margin:auto" border>
				<el-table-column prop="date" label="日期"> </el-table-column>
				<el-table-column prop="name" label="姓名"> </el-table-column>
				<el-table-column prop="address" label="地址"> </el-table-column>
			</el-table>
		</div>
	</div>
</template>
<script>
import { getCaseList } from '@/api/case'
export default {
	data() {
		return {
			tableData: [],
		}
	},
	mounted() {
		this.fetchDate()
	},
	methods: {
		async fetchDate() {
			this.tableData = await getCaseList()
		},
	},
}
</script>
