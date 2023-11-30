import {  AppDispatch, RootStore } from "@/redux/store";
import { useCallback, useEffect, useRef } from "react";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export const useBusOnChangePath:() => void = () => {
  // 避免重复渲染
  const state = useRef<string[]>([]);
  const navigate = useNavigate();

  const changeRoute = useCallback((params: string[]) => {
    // 解决路由重定向路由跳转异步问题
    // setTimeout(()=>{
      if (state.current.join("/") === params.join("/")) {
        if (params.length) {
          return;
        }
        navigate("/home",{replace:true});
      } else {
        state.current = params;
        // console.log(2,{params});
        navigate(`/${params.join("/")}`,{replace:true});
      }
  // })
  }, []);

  useEffect(() => {
    // console.log('ReactMicro2执行')
    window.$wujie?.bus.$on("ReactMicro2Change", changeRoute);
    window.$wujie?.bus.$emit('ReactMicro2Mount', 'ReactMicro2',true)
    // return () => {
    //   console.log(222)
    //   window.$wujie.bus.$emit('ReactMicro2Mount', 'ReactMicro2',false)}
  }, []);
};