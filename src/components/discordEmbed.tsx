export function DiscordEmbed(props: { meta: EmbedMeta }): JSX.Element {
    return (
        <div className="container self-center mx-auto text-center m-3 fit">
            <div className="self-center mx-auto text-center flex embed">
                <div className="discord-bl" style={{backgroundColor: props.meta.color}}></div>
                <div className="my-2 fit">
                    <div className="grid grid-cols-2 my-1 py-2 fit inline-flex wrap">
                        <div className="col-start-1 col-end-1 grid grid-cols-1 flex grid-rows-3 text-left text-sm pl-3 fit embed-text">
                            <div className="row-start-1 text-base font-bold row-end-1">{props.meta.title}</div>
                            <div className="row-start-2 row-end-2" >{props.meta.text}</div>
                            <div className="row-start-3 row-end-3">{props.meta.footer}</div>
                        </div>
                        <div className="col-start-2 pl-8 pr-2 col-end-2 fit wrap">
                            <div className="avatar-image">
                                <img src={props.meta.image} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface EmbedMeta {
    title: string,
    text: string,
    footer?: string
    image?: string,
    backgroundColor: string,
    color: string
}
