import Head from "next/head";
import PersonRequest from "../../api/person";
import {InferGetServerSidePropsType} from "next";

/**
 * Dynamic function for rendering (and routing) a person, and telling them to go to sleep.
 * @constructor
 */
export default function Person({data}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    return (
        <div>
            <Head>
                <title>{data.who} should go to sleep..</title>
                <link href={data.icon} rel="icon"/>
                <meta property="og:title" content={data.who}/>
                <meta property="og:image" content={data.icon}/>
                <meta property="description" content={data.message}/>
                <meta property="og:description" content={data.message}/>
            </Head>
            <div className="container grid grid-cols-1 place-items-center pb-10 m-12 mx-auto">
                <div className="mb-4 text-4xl">{data.who}</div>
                <img src={data.icon} alt="zzzzzzzz" className="mb-5 person-image"/>
                <div>
                    {data.message}
                </div>
            </div>
        </div>
    );
}

/**
 * Get props to render server side.
 * @param params        parameters
 */
export const getServerSideProps = async ({params}: any) => {
    return {
        props: {
            data: await getPersonData({who: params.person ?? "you", email: params.email ?? "-"})
        }
    };
}

/**
 * Get person data from given request data.
 * @param personRequest     request data
 */
async function getPersonData(personRequest: PersonRequest) {
    const data = await fetch(`http://localhost:3000/api/person?email=${personRequest.email}&name=${personRequest.who}`);
    return await data.json();
}

/**
 * Structure defining person data.
 */
interface PersonData {
    /**
     * The person's name.
     */
    who: string,

    /**
     * A sleep message for the person.
     */
    message: string,

    /**
     * Person's icon, if applicable.
     */
    icon?: string
}

/**
 * Parameters of a person request.
 */
interface PersonRequest {

    /**
     * Name of the person.
     */
    who: string;

    /**
     * Email of the person.
     */
    email: string;
}
