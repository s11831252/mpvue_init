<template>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>公司名称</th>
                    <th>手机号码</th>
                    <th>员工总数</th>
                    <th>新入职员工数</th>
                    <th>财务状况</th>
                    <th>可能获得的补贴</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="index">
                    <td class="dotted">{{item.corpName}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.total}}</td>
                    <td>{{item.newTotal}}</td>
                    <td>{{item.fdInfo}}</td>
                    <td>{{item.subsidy}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    async mounted(){
        var rep =  await this.$XiaoguiAPI.XiaoGui_Get();
        if(rep)
        {
            this.list=rep;
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    padding: 0.3rem;
}
table{
border-collapse: collapse;
border-top:0.02rem solid #000;
border-bottom: 0.02rem solid #000;
font-size: 0.3rem;

td,th {
border-bottom: 0.02rem solid #000000;
border-right: 0.02rem solid #000000;
    padding: 0.05rem;
    text-align: center;
}
td:first-child,th:first-child
{
    border-left: 0.02rem solid #000000;
}
th{
    background-color: #3F3F3F;
    color: #fff;
}
tr:nth-child(odd){
    background-color: #F5F5F5;
}
tr:nth-child(even){
    background-color: #fff;
}

}


</style>