import {useRouter} from "next/router";
import Head from "next/head";
import useSWR, {SWRResponse} from "swr";
import PersonRequest from "../../api/person";

/**
 * Dynamic function for rendering (and routing) a person, and telling them to go to sleep.
 * @constructor
 */
export default function Person(): JSX.Element {
    const router = useRouter();

    const {email, person} = router.query;

    const {data: personData, error: personErr} = usePerson({email: email as string, who: person as string});
    const {data: message, error: messageError} = useMessage(person as string);

    // Handle errors.
    if (personErr) {
        return (
            <div>
                <Head>
                    <title>You should go to sleep..</title>
                </Head>
                <body>
                <img src={personData?.icon} alt="zzzzzzzz"/>
                <div>
                    {message?.message}
                </div>
                </body>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>{personData?.who} should go to sleep..</title>
                <link href={personData?.icon} rel="icon"/>
                <meta property="og:title" content={personData?.who}/>
                <meta property="og:image" content={personData?.icon}/>
                <meta property="og:description" content={message?.message}/>
            </Head>
            <div className="container grid grid-cols-1 place-items-center pb-10 m-12 mx-auto">
                <div className="mb-4 text-4xl">{personData?.who}</div>
                <img src={personData?.icon} alt="zzzzzzzz" className="mb-5 person-image"/>
                <div>
                    {message?.message}
                </div>
            </div>
        </div>
    );
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

/**
 * Use SWR to get person data.
 * @param person    person to request data for.
 */
function usePerson(person: PersonRequest): SWRResponse<PersonData, any> {
    // Cast as any to make my ide happy (????).
    return useSWR(`/api/person?email=${person.email}&name=${person.who}` as any);
}

/**
 * Use SWR to get sleep messages.
 * @param person    person to request a message for.
 */
function useMessage(person: string): SWRResponse<{ message: string }, any> {
    // Cast as any to make my ide happy (????).
    return useSWR(`/api/message?name=${person}` as any);
}
