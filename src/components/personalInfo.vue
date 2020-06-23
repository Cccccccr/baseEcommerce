<template>
  <div>
    <div style="margin-left: 55px; margin-top: 20px;">
      <el-page-header @back="goBack" content="个人中心">
      </el-page-header>
    </div>
    <div style="width: 200px; display: inline-block; float: left; margin-top: 40px;">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        v-model="menuItemIndex"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>基本信息</span>
          </template>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">动态</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-collection-tag"></i>
          <span slot="title">收藏</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="context_box">
      <div v-if="menuItemIndex === 1">
        <div class="context_box_header">基本信息<span style="font-size: 15px">（用户ID:329184565）</span></div>
        <div class="divider"></div>
        <div class="msg_common">
          <div class="msg_key">我的昵称</div>
          <div class="msg_value">Atlue</div>
        </div>
        <div class="msg_common">
          <div class="msg_key">性别</div>
          <div class="msg_value">男</div>
        </div>
        <div class="msg_common">
          <div class="msg_key">我的简介</div>
          <div class="msg_value">为什么你坐在那里，看上去像一个没写地址的信封。</div>
        </div>
        <div class="msg_common">
          <div class="msg_key">电话</div>
          <div class="msg_value">152-xxxx-4243</div>
        </div>
        <div class="msg_common">
          <div class="msg_key">身份认证</div>
          <div class="msg_value">
            <i v-if="!approveStatus" style="color: #25bb9b; cursor: pointer;" @click="approveClick">暂未认证，点击申请 ></i>
            <span v-if="approveStatus">已完成认证！</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PersonalInfo',
  data () {
    return {
      menuItemIndex: 1
    }
  },
  computed: {
    ...mapState(['approveStatus'])
  },
  created () {
  },
  methods: {
    handleOpen () {},
    handleClose () {},
    goBack () {
      this.$router.back(-1)
    },
    approveClick () {
      if (!this.approveStatus) {
        this.$message({
          type: 'success',
          duration: 2000,
          message: '认证成功！'
        })
        this.$store.dispatch('setApprove', true)
      }
    }
  }
}
</script>

<style scoped>
.context_box {
  position: relative;
  display: inline-block;
  width: 750px;
  min-height: 600px;
  margin-left: 50px;
  margin-top: 40px;
  /* background-color: blanchedalmond; */
}
.context_box::after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  z-index: -1;
  border: 1px solid #ccc;
  transform-origin: 0 0;
  transform: scale(0.5);
}
.context_box_header {
  /* float: left; */
  font-size: 20px;
  margin-top: 20px;
  text-align: left;
  margin-left: 25px;
}
.divider {
  margin-top: 5px;
  height: 1px;
  background-color: #ccc;
  transform: translateY(.5);
  width: 700px;
  margin-left: 25px;
}
.msg_common {
  margin: 30px 0px 0px 25px;
  display: flex;
  /* justify-content: center; */
  line-height: 20px;
}
.msg_key {
  width: 120px;
  text-align: right;
}
.msg_value {
  margin-left: 10px;
}
</style>
