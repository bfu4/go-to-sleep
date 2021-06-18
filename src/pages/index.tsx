import {GitHub} from "react-feather";
import Link from 'next/link'
import {DiscordEmbed} from "../components/discordEmbed";

export default function Index(): JSX.Element {
    const embedMeta = {title: "neemy", text: "neemy?! Why are you still awake?", image: "https://s.giggl.app/v1/users/233830203325935625/icons/45c3a6d2d4539a50ef2c4ec0eccf7477450a403f.jpg", color: "#77d8ae", backgroundColor: "#e7e7e7"};
    return (
        <div className="container self-center mx-auto text-center">
            <div className="grid grid-cols-1 place-items-center pb-10">
                <div className="pt-8 m-5 text-2xl">
                    tell a person to go to sleep.
                </div>
                <Link href="https://github.com/bfu4/go-to-sleep">
                    <a className="icon"><GitHub size={30}/></a>
                </Link>
            </div>
            <div className="container mx-auto">
                <div className="py-6 text-base">
                    <div className="text-xl">
                        Why?
                    </div>
                    Some people need to sleep. and dont.
                </div>
                <div className="py-6 text-base">
                    <div className="text-xl">
                        How&apos;s this work?
                    </div>
                    <div className="p-2 px-6">
                        This site generates a simple page as well as something that may be used as an embed (use case:
                        discord)
                        to inform a person to go to sleep.

                        <DiscordEmbed meta={embedMeta}/>

                        <div className="mt-6 mb-5">
                            To generate a page for a person, the end point is as such:
                            <div className="my-3">
                                <span className="p-2 code-block">
                                    its.sleeeepyti.me/for/:gravatar_email/:person_name
                                </span>
                            </div>
                        </div>

                        <div className="mb-5">
                            For example, if we want to tell myself to go to sleep, we can create a page with the
                            following <Link href="./for/bella.fusari@gmail.com/bella"><a>url</a></Link>:
                            <div className="my-3">
                                <span className="p-2 code-block">
                                    its.sleeeepyti.me/for/bella.fusari@gmail.com/bella
                                </span>
                            </div>
                            Providing the email allows the usage of a gravatar image.
                        </div>

                        <div className="mb-5">
                            If we don&apos;t want to use an email, we can use this <Link href="./for/-/bella"><a>url</a></Link>:
                            <div className="my-3">
                                <span className="p-2 code-block">
                                    its.sleeeepyti.me/for/-/bella
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
