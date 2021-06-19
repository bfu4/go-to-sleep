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
            <div className="container grid grid-cols-1 grid-rows-3 place-items-center pb-10 m-12 mx-auto">
                <div className="mb-4 text-4xl row-start-1" style={{height: "50%"}}>{data.who}</div>
                <img src={data.icon} alt="zzzzzzzz" className="mb-5 person-image row-start-2"/>
                <div className="row-start-3">
                    {data.message}
                </div>
            </div>
        </div>
    );
}

/**
 * Get props to render server side.
 * @param req           request
 * @param params        parameters
 */
export const getServerSideProps = async ({params, req}: any) => {
    return {
        props: {
            data: await getPersonData({who: params.person ?? "you", email: params.email ?? "-"}, req.headers.host)
        }
    };
}

/**
 * Get person data from given request data.
 * @param personRequest     request data
 * @param host              this host, for the api request
 */
async function getPersonData(personRequest: PersonRequest, host: string) {
    const data = await fetch(`http://${host}/api/person?email=${personRequest.email}&name=${personRequest.who}`);
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
