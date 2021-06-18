import Head from "next/head";
import "../styles/globals.css"
import {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps): JSX.Element {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width initial-scale=1 shrink-to-fit=yes"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta content="bfu4" property="og:author"/>
                <meta name="theme-color" content="#77d8ae"/>
                <link rel="icon" href="https://sleeepy.ninja/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
