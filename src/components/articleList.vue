<template>
  <li v-if='mag.author'
      class='list-itme'>
    <a class="wrap-img"><img v-bind:src="mag.author.avatar"></a>
    <p class="list-top"><a class="blue-link">{{mag.author.name}}</a><em>·</em><span class="time">{{mag.create_at}}</span></p>
    <h4 class="title">
            {{mag.id}}
          <router-link :to="{name:'listcon', params: { articleId: mag._id }}" active-class="active">{{mag.title}}{{mag.dataActive}}</router-link>
            </h4>
    <div class="list-footer">
      <a>阅读 3148</a>
      <a>· 评论 34</a>
      <span> · 喜欢 370</span>
      <span> · 打赏 4</span>
    </div>
  </li>
</template>

<script>
import Request from '../request.js'
import Moment from 'moment'
import Bus from '../bus.js'
export default {
  props: ['mag'],
  data() {
    return {
      items: [],
    }
  },
  created: function () {
    Moment.defineLocale('zh-cn', {
      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
      longDateFormat: {
        LT: 'Ah点mm分',
        LTS: 'Ah点m分s秒',
        L: 'YYYY-MM-DD',
        LL: 'YYYY年MMMD日',
        LLL: 'YYYY年MMMD日Ah点mm分',
        LLLL: 'YYYY年MMMD日ddddAh点mm分',
        l: 'YYYY-MM-DD',
        ll: 'YYYY年MMMD日',
        lll: 'YYYY年MMMD日Ah点mm分',
        llll: 'YYYY年MMMD日ddddAh点mm分'
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
          meridiem === '上午') {
          return hour;
        } else if (meridiem === '下午' || meridiem === '晚上') {
          return hour + 12;
        } else {
          // '中午'  
          return hour >= 11 ? hour : hour + 12;
        }
      },
      meridiem: function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
          return '凌晨';
        } else if (hm < 900) {
          return '早上';
        } else if (hm < 1130) {
          return '上午';
        } else if (hm < 1230) {
          return '中午';
        } else if (hm < 1800) {
          return '下午';
        } else {
          return '晚上';
        }
      },
      calendar: {
        sameDay: function () {
          return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
        },
        nextDay: function () {
          return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
        },
        lastDay: function () {
          return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
        },
        nextWeek: function () {
          var startOfWeek, prefix;
          startOfWeek = moment().startOf('week');
          prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
          return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
        },
        lastWeek: function () {
          var startOfWeek, prefix;
          startOfWeek = moment().startOf('week');
          prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]';
          return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
        },
        sameElse: 'LL'
      },
      ordinalParse: /\d{1,2}(日|月|周)/,
      ordinal: function (number, period) {
        switch (period) {
          case 'd':
          case 'D':
          case 'DDD':
            return number + '日';
          case 'M':
            return number + '月';
          case 'w':
          case 'W':
            return number + '周';
          default:
            return number;
        }
      },
      relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
      },
      week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效  
        dow: 1, // Monday is the first day of the week.  
        doy: 4  // The week that contains Jan 4th is the first week of the year.  
      }
    });
    this.mag.create_at = Moment(Date.parse(new Date(this.mag.create_at))).fromNow()

  },
  methods: {

  },
  watch: {
    mag: function () {
      this.mag.create_at = Moment(Date.parse(new Date(this.mag.create_at))).fromNow()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.articleList {
  margin-left: 25.0%;
  height: 100%;
  padding-left: 170px;
  width: 50%;
}

#list-container {
  padding-top: 65px;
  padding-left: 32px;
}

li.list-itme {
  position: relative;
  width: 100%;
  padding-right: 2px;
  padding-bottom: 17px;
  margin: 0 0 17px;
  border-bottom: 1px dashed #d9d9d9;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow: hidden;
  .list-top {
    margin: 8px 0;
    font-size: 13px;
    .time {
      margin-left: 3px;
      color: #717171;
    }
  }
  .title {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
  }
  .list-footer {
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 20px;
    a,
    span {
      color: #999999;
      &:hover {
        color: #717171;
      }
    }
  }
  .wrap-img {
    float: right;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100px;
      width: auto\9;
      border-radius: 4px;
      border: 1px solid #eeeeee;
      box-sizing: border-box;
    }
  }
}

#app.readerNightMode {
  .page-title {
    border-bottom: 2px solid #2f2f2f;
    background: #3f3f3f;
    a {
      &:hover {
        background: #262626;
        color: #b1b1b1;
      }
    }
    input {
      background: #555555;
      border-color: #2f2f2f;
      color: #999999;
    }
  }
  .sort-nav li {
    float: left;
    margin: 10px 15px 5px 0;
    a {
      border: 1px solid #2f2f2f;
      background: #2f2f2f;
      color: #b1b1b1;
      &:hover {
        color: #fff;
      }
    }
    &.active {
      a {
        color: white;
        border-color: #000;
        background: #000;
      }
    }
  }
  .list-itme {
    border-color: #2f2f2f;
    .wrap-img img {
      border-color: #2f2f2f;
    }
  }
}

#app.readerFont {
  .title {
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }
}
</style>
