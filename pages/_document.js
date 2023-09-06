import Document, { Head, Html, Main, NextScript } from 'next/document';

/**
 * Discover-coffee-stores - version 1.03 -  MyDocument
 * - Fetaures:
 * 
 *    --> Building 'MyDocument'
 * 
 * Note: By building this page Document allows to change global
 * setting as the font and other properties applied to all the pages 
 * 
 */

class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main></Main>
                        <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;