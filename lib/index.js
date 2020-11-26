/*
* @Author: aFei
* @Date: 2020-11-26 11:16:18
*/
/*
 * @LastEditors: afei
 * @LastEditTime: 2020-11-26 11:22:02
*/
import vueDiyRightMenu from './vueDiyRightMenu';

const comment = {
    install(Vue) {
        Vue.component('vueDiyRightMenu', vueDiyRightMenu);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}

export default comment;
