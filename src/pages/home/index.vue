<template>
  <div class="container">
    <div class="banner top">
      <img src="../../../static/images/corp.png">
    </div>
    <div class="form">
      <div class="form-line">
        <span class="red">*</span>
        <label>公司名称：</label>
        <div class="inputbox">
          <i class="icon">&#xe600;</i>
          <input placeholder="请输入您的公司名称" v-model="body.corpName" />
        </div>
      </div>
      <div class="form-line">
        <span class="red">*</span>
        <label>手机号码：</label>
        <div class="inputbox">
          <i class="icon">&#xe638;</i>
          <input maxlength="11" type="number" placeholder="请输入您的手机号码" v-model="body.phone"  />
        </div>
      </div>
      <div class="form-line inline-box">
        <span class="red">*</span>
        <label>请填写：</label>
        <div class="inputbox">
          <label>2019年员工总数：</label>
          <input maxlength="100000" type="number" placeholder="员工总人数" v-model.number="body.total" />
        </div>
        <div class="inputbox">
          <label>2019年新入职员工人数：</label>
        <input maxlength="10000" type="number" placeholder="新入职人数" v-model.number="body.newTotal" />
        </div>
        <div class="inputbox">
          <label>2019年公司财务状况：</label>
          <select v-model.number="body.fd">
              <option v-for="(item,index) in fdArr" :key="index" :value="index">{{item}}</option>
          </select>
        </div>
        <div id="result" class="result" v-show="body.subsidy">
          <p>贵公司可能获得的社保补贴预计：</p>
          <div><span class="red">{{body.subsidy}}</span>元</div>
        </div>

      </div>
      <div class="form-line">
          <button v-if="!body.subsidy"  @click="post">提交</button>
          <button v-else @click="reset">重新填写</button>
      </div>
    </div>
    <div class="banner" v-show="body.subsidy">
      <img src="../../../static/images/banner.png">
    </div>
    <div class="contact" v-show="body.subsidy">
      <img src="../../../static/images/qr.jpg">
      <span class="address">
        <P>广西小桂人力资源服务有限公司</P>
        <P>南宁市金浦路7号世纪商都大厦A座1005室</P>
        <P>0771-5717180</P>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      body:{
        corpName:"",
        phone:"",
        total:"",
        newTotal:"",
        fd:0,
        fdInfo:"",
        subsidy:0
      },
      fdArr:["请选择公司财务状况","连续亏损六个月","合计亏损八个月","利润较2018年下降30%","盈利"]
    }
  },
  methods:{
    post(){
      if(!this.body.corpName)
      {
        this.toast("请输入公司名")
        return
      }

      if(!this.body.phone)
      {
        this.toast("请输入联系号码")
        return
      }

      if(!this.body.total)
      {
        this.toast("请输入员工总数")
        return
      }
      if(!this.myIsNaN(this.body.newTotal)||this.body.newTotal<0)
      {
        this.toast("请输入新员工数")
        return
      }
      if(!this.body.fd)
      {
        this.toast("请选择公司财务状况")
        return
      }

      var A=295.2*this.body.total;
      var B=14184*this.body.newTotal;
      var C=0;
      if(this.body.fd>0&&this.body.fd<4)
      {
        C=5097*this.body.total
      }
      this.body.fdInfo=this.fdArr[this.body.fd];
      this.body.subsidy=A+B+C;
      this.$XiaoguiAPI.XiaoGui_post(this.body)
      document.getElementById("result").scrollIntoView();
    },
    reset(){
      Object.assign(this.$data, this.$options.data())
    },
    // true:数值型的，false：非数值型
    myIsNaN(value) {
      return typeof value === 'number' && !isNaN(value);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  font-size: 0.45rem;
  color: #494949;
  .form {
    padding: 0.5rem;
    .form-line {
      margin-bottom: .5rem;
      span.red {
        color: #ff304c;
        margin-right: 0.3rem
      }
      label {
        font-weight: bold;
      }
      .inputbox {
        margin-top: 0.1rem;
        border: 0.02rem solid #dcdcdc;
        border-radius: 0.1rem;
        padding: 0.2rem;
      }
      input {
        font-size: 0.4rem;
        color: #0a0a0a;
        display: inline-block;
        width: 90%;;
      }
      select {
        border: 0;
        background: transparent;
        width: 100%;
      }
      button{
          border: none;
          background: #4d9df4;
          color: #fff;
          width: 100%;
          padding: 0.4rem;
          font-size: 0.5rem;
          border-radius: 0.1rem;
      }
    }
    .form-line.inline-box {
      background-color: #fafafa;
      padding: 0.2rem 0;
      margin-bottom: 0.2rem;
      .inputbox {
          display: flex;
          justify-content:space-between;
          align-items:center;
          border: none;
        label {
          font-size: 0.4rem;
          font-weight: inherit;
          color: #494949;
          padding: 0;
          flex-grow:2;
          // width: 35%;
        }
        input ,select{
          padding: 0 0 0 0.2rem;
          border: 0.02rem solid #dedede;
          border-radius: 0.1rem;
          // width: 65%;
          /* max-height: 0.7rem; */
          font-size: 0.4rem;
          height: 1rem;
          flex-grow:1;
          width:auto;
        }
      }
    }
    .result{
      text-align: center;
      border: 0.02rem solid #dcdcdc;
      border-radius: 0.1rem;
      padding: 0.5rem;
      margin: 0.3rem;
      font-size: 0.4rem;
      background-color: #fff;
      .red{
        font-size:0.7rem;
        font-weight: bold;
      }
      p{
          margin-bottom: 0.3rem;
      }
    }

  }
  .banner{
    margin-top: 0.5;
    text-align: center;
    img{
      width: 100%;
    }
  }
  .banner.top
  {
    img{
      width: 25%;
    }
    // background-color: #99c6ff;
  }
  .contact{
    display: flex;
    align-items:center;
    img{
      width: 3rem;
      height: 3rem;
    }
    .address{
      width: 75%;
      font-size: 0.4rem;
      p{
        padding-bottom: 0.3rem;
      }
    }
  }
}
</style>