<template>
  <section class="shop-item" @click="toShopDetail">
    <div class="flex">
      <div class="left backgroundimg" :style="{backgroundImage:'url('+ IMAGESDOMAIN + merchant.shop_avatar +')'}"></div>
      <div class="right flex justify_between">
        <div class="flex index-line1 justify_between align_center">
          <div class="flex">
            <span class="tag">品牌</span>
            <p class="elli">{{ merchant.name }}</p>
          </div>
          <div>
            <span>···</span>
          </div>
        </div>
        <div class="flex index-line2">
          <Star :size="24" :score="merchant.score" />
          <span class="ml5">{{ merchant.score }}</span>
          <span class="ml5">月售{{ merchant.mon_sale }}单</span>
        </div>
        <div class="flex index-line3 justify_between">
          <div class="money-limit">
            <span>￥{{ merchant.send_price }}元起送</span>
            <span class="line">配送费¥{{ merchant.ship_price }}</span>
          </div>
          <div class="distance-time">
            <span>>99km</span>
            <span class="line">{{ merchant.need_time }}分钟</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-tag">
      <!-- <div class="type flex wrap">
        <div v-for="(item, index) in 5" :key="index" class="item">盖浇饭</div>
      </div> -->
      <div class="active-list flex justify_between">
        <div class="active" :style="{height: showAllActive ? 'auto' : '13px'}">
          <div v-for="(item, index) in active" :key="index" class="item">
            <span v-if="item == 1" :style="{backgroundColor: activeColor[0]}" class="tag">减</span>
            <span v-if="item == 2" :style="{backgroundColor: activeColor[1]}" class="tag">特</span>
            <span v-if="item == 3" :style="{backgroundColor: activeColor[2]}" class="tag">首</span>
            <span v-if="item == 4" :style="{backgroundColor: activeColor[2]}" class="tag">票</span>
            <span class="desc">满{{ merchant.top_up }}减{{ merchant.minus }}</span>
          </div>
        </div>
        <div class="more-active" @click.stop="showAllActive=!showAllActive">
          4个活动
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Star from '@/views/shopDetail/components/star'
export default {
  components: {
    Star
  },
  props: {
    merchant: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      active: ['1', '2', '3', '4'],
      activeColor: ['rgb(240, 115, 115)', 'rgb(241, 136, 79)', 'rgb(112, 188, 70)', 'rgb(153, 153, 153)'],
      showAllActive: false
    }
  },
  methods: {
    toShopDetail() {
      this.$router.push({ path: '../shop/index.html', query: { merchantId: this.merchant.id }})
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-item {
  padding: 0.266667rem 0.4rem;
  background-color: #ffffff;
  border-bottom: 0.5px solid #f5f5f5;
}
.left {
  width: 64px;
  height: 64px;
  margin-right: 10px;
}
.right {
  flex: 1;
  flex-direction: column;
  .index-line1 {
    font-size: 14px;
    color: #333;
    p {
      width: 200px;
      font-weight: 700;
    }
    .tag {
      display: inline-block;
      color: #6f3f15;
      height: 14px;
      line-height: 16px;
      margin-right:3px;
      padding: 0 2px;
      font-weight: 700;
      font-size: 10px;
      background-color: #fff100;
    }
  }
  .index-line3 {
    .distance-time {
      color: #999;
    }
  }
}
.line::before {
  margin: 0 6px;
  color: #ddd;
  content: '|';
}
.shop-tag {
  margin-top: 10px;
  padding-left: 75px;
  .type {
    color: rgb(102, 102, 102);
    font-size: 10px;
    .item {
      border: 1px solid rgb(221, 221, 221);
      padding: 1px 2px;
      margin-right: 5px;
    }
  }
  .active-list {
    margin-top: 10px;
    .active {
      overflow: hidden;
      .item {
        color: #ffffff;
        margin-bottom: 5px;
        .desc {
          margin-left: 5px;
          color: #666;
        }
        .tag {
          display: inline-block;
          padding: 1px;
        }
      }
    }
    .more-active {
      color: #999;
    }
  }
}
</style>
