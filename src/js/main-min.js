"use strict";Vue.directive("click-outside",{bind:function e(){var t=this;this.event=function(e){t.vm.$emit(t.expression,e)},this.el.addEventListener("click",this.stopProp),document.body.addEventListener("click",this.event)},unbind:function e(){this.el.removeEventListener("click",this.stopProp),document.body.removeEventListener("click",this.event)},stopProp:function e(t){t.stopPropagation()}}),new Vue({el:"#app",data:{visible:!1,home:!0,show:!1,active:!1,subNavActive:!1,safNavShow:!1,repNavUl:!1,admNavShow:!1,rotateDropDown:!1},methods:{},events:{closeEvent:function e(){console.log("close event called")}}});