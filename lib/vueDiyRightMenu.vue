/*
* @Author: aFei
* @Date: 2020-11-26 11:16:18
*/
/*
 * @LastEditors: afei
 * @LastEditTime: 2020-11-26 11:30:11
*/
<template>
  <div class="vue-diy-right-menu" @contextmenu.prevent="showMenu($event)">
    <slot>
      <p class="default-msg-content">触发事件内容区域</p>
    </slot>
    <div class="menu-content" :style="style" v-if="show">
      <slot name="menu">
        <ul class="default-menu-list">
          <li @click="defaultEdit">编辑</li>
          <li @click="defaultDelete">删除</li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "vueDiyRightMenu",
  props: {
    cname: {
      // 额外class
      type: String,
      default: "",
    },
  },
  data() {
    return {
      show: false,
      style: {
        left: "9999px",
        top: "9999px",
      },
      dom: "",
    };
  },
  methods: {
    closest(ele, selector) {
      let matchesSelector =
        ele.matches ||
        ele.webkitMatchesSelector ||
        ele.mozMatchesSelector ||
        ele.msMatchesSelector;
      while (ele) {
        if (matchesSelector.call(ele, selector)) {
          break;
        }
        ele = ele.parentElement;
      }
      return ele;
    },
    showMenu(event) {
      if (this.closest(event.target, ".menu-content") === null) {
        this.style.left = event.clientX + "px";
        this.style.top = event.clientY + "px";
        this.dom = event.target;
        this.show = true;
        this.$emit("clickDom", this.dom);
      }
    },
    hideMenu() {},
    defaultEdit() {
      this.$emit("defaultEdit", this.dom);
    },
    defaultDelete() {
      this.$emit("defaultDelete", this.dom);
    },
  },
};
</script>

<!--基础样式-->
<style scoped>
@import "style/vueDiyRightMenu.css";
</style>
