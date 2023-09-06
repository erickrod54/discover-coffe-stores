import Document, { Head, Html, Main, NextScript } from 'next/document';


/**
 * Discover-coffee-stores - version 1.06 -  MyDocument
 * - Fetaures:
 * 
 *    --> Adding 'IBMPlexSans-SemiBold.ttf' font 
 * 
 * Note: By building this page Document allows to change global
 * setting as the font and other properties applied to all the pages 
 * 
 */

class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head>
                    <link rel='preload' href='/fonts/IBMPlexSans-Bold.ttf' as='font' crossOrigin='anonymous' />
                    <link rel='preload' href='/fonts/IBMPlexSans-Regular.ttf' as='font' crossOrigin='anonymous'/>
                    <link rel='preload' href='/fonts/IBMPlexSans-SemiBold.ttf' as='font' crossOrigin='anonymous'/> 
                </Head>
                <body>
                    <Main></Main>
                        <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;