/*
* @Author: aFei
* @Date: 2020-11-26 11:16:18
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-11-17 12:14:11
*/
<template>
  <div
    :class="['vue-diy-rightmenu', cname]"
    @contextmenu.prevent="showMenu($event)"
  >
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
  name: "vueDiyRightmenu",
  props: {
    cname: {
      // 额外class
      type: String,
      default: "",
    },
    hideOnClick: {
      // 点击后是否隐藏
      type: Boolean,
      default: true,
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
    hideMenu(event) {
      if (
        this.hideOnClick ||
        this.closest(event.target, ".menu-content") === null
      ) {
        this.show = false;
      }
    },
    defaultEdit() {
      this.$emit("defaultEdit", this.dom);
    },
    defaultDelete() {
      this.$emit("defaultDelete", this.dom);
    },
  },
  watch: {
    show(value) {
      if (value) {
        document.body.addEventListener("click", this.hideMenu);
      } else {
        document.body.removeEventListener("click", this.hideMenu);
      }
    },
  },
  beforeDestroy() {
    let it = this;
    document.body.removeEventListener("click", it.hideMenu);
  },
};
</script>

<!--基础样式-->
<style scoped>
@import "style/vueDiyRightmenu.css";
</style>
