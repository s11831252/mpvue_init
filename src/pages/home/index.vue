<template>
  <div class="container">
    <form>
      <div class="form-line">
        <span class="red">*</span>
        <label>1. 公司简称：</label>
        <div class="inputbox">
          <i class="icon">&#xe600;</i>
          <input placeholder="公司简称" />
        </div>
      </div>
      <div class="form-line">
        <span class="red">*</span>
        <label>2. 请输入您的手机号码：</label>
        <div class="inputbox">
          <i class="icon">&#xe638;</i>
          <input maxlength="11" placeholder="手机号码" />
        </div>
      </div>
      <div class="form-line">
        <span class="red">*</span>
        <label>3. 所属行业：</label>
        <div class="inputbox">
          <select>
            <optgroup label="IT">
              <option>软硬件服务商/电子商务/因特网运营</option>
            </optgroup>
            <optgroup label="建筑业">
              <option>房地产</option>
              <option>施工单位</option>
              <option>设计公司</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div class="form-line inline-box">
        <span class="red">*</span>
        <label>4. 请填写：</label>
        <div class="inputbox">
          <label>公司人数</label>
          <input maxlength="100000" type="number" placeholder="公司人数" />
        </div>
        <div class="inputbox">
          <label>新入职人数</label>
        <input maxlength="10000" type="number" placeholder="新入职人数" />
        </div>
        <div class="inputbox">
          <label>职业资格人数</label>
        <input maxlength="10000" type="number" placeholder="职业资格人数" />
        </div>
      </div>
      <div class="form-line">
          <button type="submit">提交</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.container {
  font-size: 0.45rem;
  padding: 0.5rem;
  color: #494949;
  form {
    .form-line {
      margin-bottom: 1.3rem;
      span.red {
        color: #ff304c;
      }
      label {
        font-weight: bold;
      }
      .inputbox {
        margin-top: 0.5rem;
        border: 0.02rem solid #dcdcdc;
        border-radius: 0.1rem;
        padding: 0.2rem;
      }
      input {
        font-size: 0.4rem;
        color: #0a0a0a;
      }
      select {
        border: 0;
        background: transparent;
        width: 100%;
      }
      button[type="submit"]{
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
      .inputbox {
          display: flex;
          justify-content:space-between;
        label {
          font-weight: inherit;
          color: #494949;
          padding: 0.2rem;
          width: 35%;
        }
        input {
            padding: 0.2rem;
            border: 0.02rem solid #dedede;
            border-radius: 0.1rem;
            width: 65%;
        }
      }
    }
  }
}
</style>