<template>
  <div class="main_layout">
    <div class="titleBar">
      <span class="main_titleText">首页</span>
      <span class="main_icon_div" v-on:click="open_UserInfo">
        <img class="main_title_userIcon" src="../image/home_user_icon.png">
      </span>
    </div>

    <div class="top_banner">
      <img src="../image/main_top_banner.png">
    </div>

    <!--房屋市场-->
    <div class="main_content">
      <div class="house_market" v-on:click="house_Market_OnClick">
        <span>房屋市场</span>
        <span> <img src="../image/arrow_right_bold.png"></span>
      </div>
      <div class="house_security" v-on:click="house_security_onClick">
        <span>租房保障</span>
        <span> <img src="../image/arrow_right_bold.png"></span>
      </div>

      <!--底部图片-->
      <div class="main_bottom">
        <img src="../image/main_bottom_text.png">
      </div>
    </div>
  </div>
</template>

<script src="../js/main.js" type="text/javascript"></script>
<style scoped src="../css/main.css" rel="stylesheet" type="text/css"></style>
