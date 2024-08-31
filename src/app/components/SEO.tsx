import Head from "next/head";

export default function SEO(props: any) {
    console.log(props)
    return (
        <Head>
            <title>{props.pageTitle}</title>
            <meta name="description" content={props.pageDescription} />
        </Head>
    )
};