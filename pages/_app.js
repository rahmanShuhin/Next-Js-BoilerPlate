import "../styles/App.css";
import Layout from "../Layout/Layout";
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps}></Component>
        </Layout>
    );
}

export default MyApp;
