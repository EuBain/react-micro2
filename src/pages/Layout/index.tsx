import { Layout, Spin, theme } from "antd"
import MyHeader from "./component/MyHeader"
import Navigate from "./component/Navigate"
import Container from "./component/Container"
import { Suspense } from "react"


const MyLayout = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <>
            <Layout u-h='100vh' u-min-w='xl' >
                {/* <MyHeader />
                <Layout> */}
                    {/* <Navigate  background={colorBgContainer} /> */}
                    {/* <Layout style={{ padding: '0 24px 24px' }}> */}
                            <Container background={colorBgContainer}/>
                    {/* </Layout> */}
                {/* </Layout> */}
            </Layout>
        </>
    )
}

export default MyLayout;