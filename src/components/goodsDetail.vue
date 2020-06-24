<template>
  <div>
    <div style="margin-left: 55px; margin-top: 20px;">
      <el-page-header @back="goBack" content="商品详情">
      </el-page-header>
    </div>
    <div class="goods_box">
      <div class="goods_picture_box">
        <img src="" alt="">
        <span style="font-size: 25px; top: 150px; position: relative;">{{goodData.name}}</span>
      </div>
      <div class="goods_detail_msg">
        <h1 style="font-size: 16px;">特大颗粒越南腰果盐焗坚果炒货炭烧腰果散装称斤带皮腰果仁500g</h1>
        <p style="font-size: 14px; color: #FF0036; text-align: left; margin-left: 14px;">正宗越南腰果 6月新货 特大颗粒 型号180w</p>
        <div class="price_box">
          <div class="flex_common" style="line-height: 18px; top: 8px; position: relative;">
            <div style="color: #999; font-size: 12px;">价格<span style="text-decoration:line-through; margin-left: 30px;">￥79.00-485.00</span></div>
          </div>
          <div class="flex_common" style="line-height: 32px; top: 10px; position: relative;">
            <div style="color: #999; font-size: 12px;">促销价 <span style="margin-left: 13px; color: #ff0036; font-size: 16px; font-weight: 600;">￥<span style="font-size: 28px;">27.50-228.00</span></span></div>
          </div>
        </div>
        <div class="btn_box">
          <div class="bug_box" @click="bugClick">
            <div style="margin-top: 8px; cursor: pointer;">立即购买</div>
          </div>
          <div class="add_box" @click="addClick">
            <div style="margin-top: 8px; cursor: pointer;">加入购物车</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_box">
      <div class="bottom_header">
        <ul>
          <li :class="{unselect: select !== 1, selected: select === 1}" @click="selectClick(1)">
            <div>商品详情</div>
          </li>
          <li :class="{unselect: select !== 2, selected: select === 2}" @click="selectClick(2)">全部评价</li>
        </ul>
      </div>
      <div class="goods_top_box" v-if="select === 1">
        <div class="goods_top_inner">
          <div class="goods_img_box">
            <span style="position: relative; top: 35%;">{{goodData.name}}</span>
          </div>
          <div class="info_box">
            <p style="font-size: 12px;"  align="left">
              该商品参与了防熬夜猝死计划，卖家承诺每笔成交将为<strong style="color: red;">007程序员</strong>的晚年捐赠<strong style="color: red;">0.02元</strong>。该商品已累积捐赠<strong style="color: red;">16491笔</strong>。
            </p>
          </div>
        </div>
        <p style="font-size: 12px; margin-top: 8px;" align="left">商品具有生产许可证编号，符合食品质量安全准入标准</p>
        <div class="attributes_list">
          <div class="goods_name">
            <span>品牌名称：不会真的有人11点前回去吧</span>
          </div>
          <p style="font-size: 14px; margin: 5px 20px; line-height: 22px;" align="left"><em>产品参数</em>  :</p>
          <ul style="margin: 0 20px 18px;">
            <li class="attr_item_style" v-for="item in attrList" :key="item.name">
              {{item.name}}: {{item.value}}
            </li>
          </ul>
        </div>
      </div>
      <div class="goods_top_box" v-if="select === 2">
        <div class="goods_top_inner">
          <div class="rate_box">
            <h4 style="font-size: 12px; color: #ccc; line-height: 14px; margin-top: 12px;">与描述相符</h4>
            <strong style="font-size: 32px; line-height: 32px; color: #f60;">4.7</strong>
            <el-rate
              v-model="rateValue"
              disabled
              text-color="#ff9900">
            </el-rate>
          </div>
          <div class="middle_line"></div>
          <div class="rate_tag_list">
            <span v-for="item in tagsList" class="tag_item" :key="item.name"><a href="" class="">{{item.name}}</a></span>
          </div>
        </div>
        <div style="width: 100%">
          <table>
            <tbody class="tbody">
              <tr v-for="item in commentList" :key="item.message + item.time">
                <td class="tm-col-master" style="text-align: left">
                  {{item.message}}
                </td>
                <td class="col-meta">
                  {{item.time}}
                </td>
                <td class="col-author">
                  {{item.userName}}(匿名)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsDetail',
  data () {
    return {
      goodData: {},
      select: 1,
      attrList: [
        {name: '生产许可证编号', value: 'SC11844011103626'},
        {name: '产品标准号', value: 'GB/T22165'},
        {name: '厂名', value: '广州市果靓食品有限公司'},
        {name: '厂址', value: '广州市白云区松洲街槎溪南路9号之一406房'},
        {name: '厂家联系方式', value: '020xxxx8741'},
        {name: '配料表', value: '腰果，食用盐'},
        {name: '储藏方法', value: '阴凉干燥处'},
        {name: '保质期', value: '360 天'},
        {name: '品牌', value: '可以不加班但没必要'},
        {name: '系列', value: '腰果500g'},
        {name: '包装种类', value: '袋装'},
        {name: '产地', value: '中国大陆'},
        {name: '省份', value: '广东省'},
        {name: '城市', value: '广州市'},
        {name: '是否含糖', value: '无糖'},
        {name: '包装方式', value: '包装'},
        {name: '是否新货', value: '是'},
        {name: '食品口味', value: '盐焗味A+特大颗腰果（100g*3袋） 盐焗味A+特大颗腰果500g一斤装 盐焗味A+特大颗500g*2袋（净2斤） 净含量 A+特大颗粒（100g*3袋）300g 净含量 A+特大颗粒（500g*1袋）1斤 净含量 A+特大颗粒（500g*2袋）2斤 净含量 A+特大颗粒（500g*5袋）5斤'},
        {name: '净含量', value: '500g'}
      ],
      rateValue: 4.7,
      tagsList: [
        {name: '口感味道很好（1249）'},
        {name: '个头正好（573）'},
        {name: '性价比高（294）'},
        {name: '果粒饱满（221）'}
      ],
      commentList: [
        {message: '吃了给人一种力量充沛的感觉，搬砖都更加的起劲了', time: '6.23', userName: '忘**啊'},
        {message: '真的太棒了！吃了连续一星期加班到4点都不累呢', time: '6.23', userName: '那***吧'},
        {message: '上面的兄弟说的是对的，我已经一个月在公司没回家了', time: '6.24', userName: '他****了'}
      ]
    }
  },
  created () {
    this.goodData = this.$route.query.goodData
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    bugClick () {
      this.$message({
        message: '可以买但没必要',
        type: 'info',
        duration: 2000
      })
    },
    addClick () {
      this.$message({
        message: '已加入购物车！',
        type: 'success',
        duration: 2000
      })
    },
    selectClick (value) {
      this.select = value
    }
  }
}
</script>

<style scoped>
.goods_box {
  margin-top: 40px;
  width: 800px;
  margin-left: 100px;
  display: flex;
}
.goods_picture_box {
  height: 400px;
  width: 300px;
  border: 1px solid #ccc;
  text-align: center;
}
.goods_detail_msg {
  height: 400px;
  width: 500px;
}
.price_box {
  width: 510px;
  height: 70px;
  background-color: #e9e9e9;
  margin: 16px 0 0 14px;
}
.flex_common {
  display: flex;
  align-items: center;
  margin-left: 8px;
}
.btn_box{
  position: relative;
  display: flex;
  margin-top: 234px;
  margin-left: 120px;
}
.bug_box{
  height: 40px;
  width: 180px;
  border: 1px solid #ff0036;
  background-color: #ffeded;
}
.add_box{
  height: 40px;
  width: 180px;
  background-color: #ff0036;
  color: #fff;
  border: 1px solid #ff0036;
  margin-left: 16px;
}
.bottom_box{
  position: relative;
  left: 100px;
  top: 40px;
}
.bottom_header{
  height: 50px;
  width: 790px;
  border: 1px solid #dfdfdf;
  position: relative;
}
.bottom_header li{
  line-height: 48px;
  cursor: pointer;
  list-style: none;
  display: inline;
  position: relative;
}
.unselect {
  float: left;
  margin-left: -1px;
  height: 50px;
  line-height: 48px;
  cursor: pointer;
  width: 90px;
  border-top: 2px;
}
.selected {
  float: left;
  border-top: 2px solid #FF0036;
  height: 50px;
  line-height: 47px;
  margin: -1px 0 0 -1px;
  z-index: 1;
  padding: 0;
  width: 90px;
  border-left: 1px solid #cfbfb1;
  border-right: 1px solid #cfbfb1;
}
.selected::after {
  content: ' ';
  display: block;
  border-width: 5px;
  border-style: solid;
  border-color: #FF0036 transparent transparent;
  width: 0;
  height: 0;
  font-family: arial;
  position: absolute;
  top: -1px;
  left: 50%;
  margin-left: -5px;
}
.goods_top_box {
  width: 790px;
  height: 120px;
  border: 1px solid #dfdfdf;
}
.goods_top_inner {
  padding: 15px;
  height: 90px;
  color: #333;
}
.goods_img_box {
  float: left;
  width: 120px;
  height: 90px;
  overflow: hidden;
  margin-right: 20px;
  text-align: center;
  background-color: #ccc;
}
.info_box {
  float: left;
  height: 90px;
  overflow: hidden;
  width: 80%;
}
.attributes_list {
  margin-top: 8px;
  width: 790px;
  min-height: 300px;
  border: 1px solid #ccc;
}
.goods_name {
  line-height: 30px;
  font-size: 14px;
  margin: 8px 20px 10px;
  text-align: left;
}
.attr_item_style {
  display: inline;
  float: left;
  width: 220px;
  height: 18px;
  overflow: hidden;
  margin: 10px 15px 0 0;
  line-height: 18px;
  vertical-align: top;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666;
  font-size: 14px;
  text-align: left;
}
.rate_box {
  float: left;
  width: 120px;
  height: 90px;
  overflow: hidden;
  margin-right: 20px;
  text-align: center;
}
.middle_line {
  float: left;
  position: relative;
  top: 15%;
  height: 70%;
  width: 1px;
  background-color: #ccc;
  transform: scaleX(.5);
}
.rate_tag_list {
  position: relative;
  float: left;
  width: 555px;
  margin-left: 20px;
  margin-top: 10px;
}
.tag_item {
  float: left;
  height: 22px;
  margin: 7px 6px 6px;
}
.tag_item:hover {
  background-color: #ffe2e2;
}
.tag_item a {
  color: #ff0036;
  border-color: #ffd7dd;
  position: relative;
  float: left;
  border-radius: 2px;
  line-height: 18px;
  padding: 1px 10px;
  background: #fff;
  box-shadow: 2px 2px 1px #f2f2f2;
  border: 1px solid #ffd7dd;
  white-space: nowrap;
  text-decoration:none;
}
.tbody {
  font-size: 14px;
}
.tbody td{
  padding: 16px 7px;
  border-bottom: 1px solid #e3e3e3;
}
.tm-col-master {
  width: 494px;
  padding-right: 30px;
}
.col-meta {
  width: 135px;
  color: #999;
}
.col-author {
  padding-right: 0;
  width: 95px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
