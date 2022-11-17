/*
* @Author: aFei
* @Date: 2020-11-26 11:16:18
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-11-17 12:14:46
*/
import vueDiyRightmenu from './vueDiyRightmenu';

const comment = {
    install(Vue) {
        Vue.component('vueDiyRightmenu', vueDiyRightmenu);
    },
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment);
}

export default comment;
