/** unocss属性化css添加的ts类型 */
import {
  AttributifyAttributes,
  AttributifyNames,
} from "@unocss/preset-attributify";

// 添加属性化前缀
type Prefix = "u-";

declare module "react" {
  interface HTMLAttributes<T>
    extends AttributifyAttributes,
      Partial<Record<AttributifyNames<Prefix>, string>> {}
}

declare global {
  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean;
    // 子应用公共加载路径
    __WUJIE_PUBLIC_PATH__: string;
    // 原生的querySelector
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__: typeof Document.prototype.querySelector;
    // 原生的querySelectorAll
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__: typeof Document.prototype.querySelectorAll;
    // 原生的window对象
    __WUJIE_RAW_WINDOW__: Window;
    // 子应用沙盒实例
    __WUJIE: WuJie;
    // 子应用mount函数
    __WUJIE_MOUNT: () => void;
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void;
    // 注入对象
    $wujie: {
      bus: EventBus;
      shadowRoot?: ShadowRoot;
      props?: {
        [key: string]: any;
        addNavList: (params: any) => void;
      };
      location?: Object;
    };
  }
}

// declare module '@/redux/store'
