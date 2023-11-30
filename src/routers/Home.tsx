import { RoutesType } from "."
import { model1Route } from "./routeModel/model1"
import { model2Route } from "./routeModel/model2"
import { model3Route } from "./routeModel/model3"
export const HomeRoutes: RoutesType[] =[
    {
        name: '主页1',
        path: '/',
        element:  'MyLayout',
        children: [
            {
                name: '主页2',
                path: '/',
                redirect: 'home',
            },
            ...model1Route,
            ...model2Route,
            ...model3Route,

        ]
    },
]



