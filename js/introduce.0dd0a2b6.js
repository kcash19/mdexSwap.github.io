(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["introduce"],{5864:function(t,e,s){},"67df":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main",class:t.chainName},[s("title-banner"),s("div",{staticClass:"introduce"},[s("section",{class:t.bannerName}),s("div",{staticClass:"list"},[s("h1",[t._v(t._s(t.$t("joinmedx")))]),s("p",{domProps:{innerHTML:t._s(t.$t("joinmedxDsc"))}}),s("div",{staticClass:"apply"},[s("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSem595jWpO5_A5fRj9W4-wX_3mg3ypqqNiXcC_yi-tpcbOaqA/viewform",target:"_blank"}},[t._v(t._s(t.$t("joinnow")))])])]),s("div",{staticClass:"list"},[s("h1",[t._v(t._s(t.$t("joinLiquidity")))]),s("p",{domProps:{innerHTML:t._s(t.$t("joinLiquidityDsc"))}}),s("div",{staticClass:"apply"},[s("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSem595jWpO5_A5fRj9W4-wX_3mg3ypqqNiXcC_yi-tpcbOaqA/viewform",target:"_blank"}},[t._v(t._s(t.$t("joinnow")))])])]),s("div",{staticClass:"list"},[s("h1",[t._v(t._s(t.$t("joinunit")))]),s("p",{domProps:{innerHTML:t._s(t.$t("joinunitDsc"))}}),s("div",{staticClass:"apply"},[s("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSem595jWpO5_A5fRj9W4-wX_3mg3ypqqNiXcC_yi-tpcbOaqA/viewform",target:"_blank"}},[t._v(t._s(t.$t("joinnow")))])])])])],1)},i=[],n=s("aa95"),r={name:"introduce",components:{TitleBanner:n["a"]},computed:{bannerName:function(){return"en"===this.$store.state.language?"banner_en":"banner"}}},o=r,c=(s("8560"),s("2877")),l=Object(c["a"])(o,a,i,!1,null,"368cf6ee",null);e["default"]=l.exports},"6eb3":function(t,e,s){"use strict";s("babd")},8560:function(t,e,s){"use strict";s("5864")},aa95:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-banner",class:"/"==t.routerName?t.isImo:t.chainName},[s("div",{directives:[{name:"show",rawName:"v-show",value:"/"==t.routerName,expression:"routerName=='/'"}],staticClass:"heco-home"},[s("h1",{staticClass:"home__banner-title"}),s("p",{staticClass:"home__banner-describe"})]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==t.routerName,expression:"routerName=='/liquidity'"}]},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),s("div",{staticClass:"ban-center"},[s("p",{staticClass:"liquidity-mdx ban-center"},[t._v(" "+t._s(t.$t("MDXtotal"))+" "),s("CountUp",{attrs:{endVal:t.liquidity_mdex||0}}),t._v(" USDT ")],1)])]),s("div",{staticClass:"h5 li-h5title ban-start"},[s("div",{staticClass:"act-title"},[s("p",[t._v(" "+t._s(t.$t("LiquidityMining")))]),s("p")]),s("div",{staticClass:"li-title",on:{click:t.h5_tab_evens}},[s("span",[t._v(" "+t._s(t.$t("TradePool"))+" ")])])]),s("div",{staticClass:"h5 li-banner-total"},[s("div",{staticClass:"banner-tit"},[t._v(" "+t._s(t.$t("TotalLockIn"))+"(USDT) ")]),s("div",{staticClass:"banner-sum"},[s("CountUp",{attrs:{endVal:t.liquidity_mdex||0}})],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==t.routerName,expression:"routerName=='/trading'"}]},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("tradeTitle"))+" ")]),s("div",{staticClass:"new-banner-totals"},[s("div",{staticClass:"new-banner-total-white"},[s("div",{staticClass:"list-white"},[s("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool"))+" ")]),s("span",{staticClass:"list-white-own"},[s("CountUp",{attrs:{endVal:t.trading_totalReward}})],1),s("span",{staticClass:"list-white-one"},[t._v("MDX")])]),s("div",{staticClass:"list-white"},[s("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus"))+" ")]),s("span",{staticClass:"list-white-own"},[s("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}})],1),s("span",{staticClass:"list-white-one"},[t._v("MDX")])])]),s("button",{staticClass:"new-list-white-banner",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])]),s("div",{staticClass:"h5 li-h5title ban-start"},[s("div",{staticClass:"li-title",on:{click:t.h5_tab_li_evens}},[s("span",[t._v(" "+t._s(t.$t("LiquidityMining"))+" ")])]),s("div",{staticClass:"act-title act-mining"},[s("p",[t._v(" "+t._s(t.$t("TradePool")))]),s("p")])]),s("div",{staticClass:"h5 trading-banner"},[s("div",{staticClass:"ban-start trading-ban-list"},[s("div",[s("p",[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool")))]),s("p",[s("CountUp",{attrs:{endVal:t.trading_totalReward}}),s("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)]),s("div",[s("p",[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus")))]),s("p",[s("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}}),s("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)])]),s("div",{staticClass:"ban-center "},[s("button",{staticClass:"new-banner-btn-dra",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==t.routerName,expression:"routerName=='/boardroom'"}]},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("text9"))+" ")]),s("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("text8"))+" ")])]),s("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("Directors"))+" ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/bridge"==t.routerName,expression:"routerName=='/bridge'"}]},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(128==t.chainId?t.$t("MDEForEcoEurrencyTrading1"):56==t.chainId?t.$t("MDEForEcoEurrencyTrading2"):t.$t("MDEForEcoEurrencyTrading3"))+" ")]),s("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),s("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("crossChainBridge"))+" ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"BoardroomPool"==t.getRoute,expression:"'BoardroomPool'==getRoute"}]},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("poolTitle"))+" ")]),s("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(128==t.chainId?t.$t("poolDescribe1"):56==t.chainId?t.$t("poolDescribe2"):t.$t("poolDescribe3"))+" ")])]),s("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("transaction"))+" ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"/introduce"===t.routerName,expression:"routerName==='/introduce'"}]},[s("div",{staticClass:"pc"},[s("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),s("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"===t.$store.state.language?t._e():s("div",[s("h1",{staticClass:"introduce_banner"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),s("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"!==t.$store.state.language?t._e():s("div",[s("p",{staticClass:"text-info"},[t._v(t._s(t.$t("introduceComplete")))])])])])},i=[],n=(s("ac1f"),s("466d"),s("a9e3"),s("b0c0"),s("5319"),{name:"HomeBanner",data:function(){return{userReward:0,onresizeIsPC:!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{getRoute:function(){return this.$route.name},isPC:function(){return this.$store.getters.isPC},routerName:function(){return this.$store.state.routerName},chainName:function(){return this.$store.state.chainName},chainId:function(){return this.$store.getters.chainId},bannerName:function(){var t="en"==this.$store.state.language?" Bsc-home-en":"Bsc-home-zh-CN";return"/"==this.routerName&&"Bsc"==this.chainName?t:this.chainName},isImo:function(){return"en"==this.$store.state.language?" Bsc-home-en":"Bsc-home-zh-CN"}},mounted:function(){var t=this;window.onresize=function(){t.onresizeIsPC=!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},$computed:{bnp:"bnp"},methods:{h5_tab_li_evens:function(){this.$router.replace({path:"/liquidity"})},h5_tab_evens:function(){this.$router.replace({path:"/trading"})},onWithdrawal:function(){this.$emit("on-withdrawal")},goHomeUrl:function(){if("Bsc"==this.chainName&&"/"==this.routerName){var t="zh-CN"==this.$store.state.language?"https://mdexcom.zendesk.com/hc/zh-cn/articles/360059672551":"https://mdexcom.zendesk.com/hc/en-gb/articles/360059671831";window.open(t)}}}}),r=n,o=(s("6eb3"),s("2877")),c=Object(o["a"])(r,a,i,!1,null,"83d808a0",null);e["a"]=c.exports},babd:function(t,e,s){}}]);