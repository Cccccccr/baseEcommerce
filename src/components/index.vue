<template>
  <div>
    <div style="height: 50px; position: relative;">
      <div style="position: relative; float: right; display: flex; align-items: center; height: 100%;">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <span style="margin-left: 3px;" class="goPersonalInfo" @click="goPersonelInfo">前往个人中心</span>
      </div>
    </div>
    <div class="header">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in tabsList" :label="item.lable" :name="item.name" :key="item.lable"></el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="activeName === 'home'">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in pictureList" :key="item.name" style="background-color: #ccc;">
          <img src="item.url" alt="">
          <div class="pictureStyle" @click="goGoodsDetail(item)">{{item.name}}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="goodsMain">
      <div v-for="(item, index) in goodsList" :key="item.name + index" class="goodsBox" @click="goGoodsDetail(item)">
        <div class="goods_picture_box">
          <div style="position: relative; top: 40%; transform: translateY(-50%)">{{item.name}}</div>
        </div>
        <div class="goods_price">价格：￥{{item.price}}</div>
      </div>
    </div>
    <div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      activeName: 'home',
      tabsList: [
        {lable: '主页', name: 'home'},
        {lable: '热门', name: 'hot'},
        {lable: '推荐', name: 'recommend'}
      ],
      pictureList: [
        {url: '', name: '商品1'},
        {url: '', name: '商品2'},
        {url: '', name: '商品3'},
        {url: '', name: '商品4'}
      ],
      goodsList: [
        {name: '商品1', price: 19.99},
        {name: '商品2', price: 266},
        {name: '商品3', price: 9.99},
        {name: '商品4', price: 100},
        {name: '商品5', price: 999},
        {name: '商品6', price: 799},
        {name: '商品7', price: 29.9},
        {name: '商品8', price: 29.9}
      ]
    }
  },
  created () {
    console.log(this.$store)
    this.$store.dispatch('setGoodsCode', '1234')
    // this.$router.push('/personalInfo')
  },
  methods: {
    handleClick () {
      console.log('active name change', this.activeName)
      if (this.activeName === 'hot' || this.activeName === 'recommend') {
        if (this.goodsList.length <= 8) {
          let temp = [
            {name: '商品9', price: 19.99},
            {name: '商品10', price: 266},
            {name: '商品11', price: 9.99},
            {name: '商品12', price: 9.99}
          ]
          this.goodsList = [...this.goodsList, ...temp]
        }
      } else {
        if (this.goodsList.length >= 12) {
          this.goodsList.splice(8, 4)
        }
      }
    },
    goPersonelInfo () {
      this.$router.push('/personalInfo')
    },
    goGoodsDetail (data) {
      console.log(data)
      this.$router.push({
        path: '/goodsDetail',
        query: {
          goodData: data
        }
      })
    }
  }
}
</script>

<style scoped>
.header {
  /* margin-top: 20px; */
}
.pictureStyle{
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 40px;
  cursor: default;
}
.goPersonalInfo{
  margin-left: 3px;
  font-size: 14px;
  cursor: pointer;
}
.goPersonalInfo:hover {
  color: blue;
}
.goodsMain{
  margin-top: 30px;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goodsBox{
  position: relative;
  width: 220px;
  height: 350px;
  /* margin-right: 28px; */
  margin-bottom: 20px;
  border: 1px solid rgba(0,0,0,0.3);
  transition-property: box-shadow;
  transition-duration: 0.35s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
.goodsBox:hover {
  top: -2px;
  box-shadow: 0 -1.5em 1.5em rgba(0,0,0,0.1),
              0 0  0 1px rgb(255,255,255),
              0.3em 0.3em 1em rgba(0,0,0,0.3);;
}
.goods_picture_box {
  position: relative;
  top: 10px;
  width: 200px;
  height: 300px;
  margin-left: 10px;
  text-align: center;
  font-size: 25px;
  background-color: rgb(238, 230, 230);
}
.goods_price{
  position: relative;
  margin-top: 20px;
  float: left;
  margin-left: 10px;
}
</style>
