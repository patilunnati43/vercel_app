import { FC } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import next from 'next'

const Home: FC = () => {
    return (
        <div>
            <Head>
                <title>Vercel Project</title>
            </Head>

                <h1 className="title">
                    Welcome to Vercel
                </h1>
                
                <table >
                    <tr>
                        <td>
                        <Link href='/AdvocatePage/things' >
                        <h3>Things a Product Advocate Might Do &rarr;</h3>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Link href='/ReflectionPage/Learn' >
                        <h3>Reflection on past experience:&rarr;</h3>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Link href='/Redirect/vercel' >
                        <h3>Vercel Redirect:&rarr;</h3>
                        </Link>   
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Link href='/EmailResponse/email' >
                        <h3>Practice Email Response:&rarr;</h3>
                        </Link>    
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Link href='/Recommendations/Recommendation' >
                        <h3>Recommendations:&rarr;</h3>
                        </Link>    
                        </td>
                    </tr>   
                </table>
        </div>
    )
}

export default Home
