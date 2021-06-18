export function DiscordEmbed(props: { meta: EmbedMeta }): JSX.Element {
    return (
        <div className="container self-center m-3 mx-auto text-center fit">
            <div className="flex self-center mx-auto text-center embed">
                <div className="discord-bl" style={{backgroundColor: props.meta.color}}></div>
                <div className="my-2 fit">
                    <div className="grid grid-cols-2 py-2 my-1 fit wrap">
                        <div className="grid grid-cols-1 col-start-1 col-end-1 grid-rows-3 pl-3 text-sm text-left fit embed-text">
                            <div className="row-start-1 row-end-1 text-base font-bold">{props.meta.title}</div>
                            <div className="row-start-2 row-end-2" >{props.meta.text}</div>
                            <div className="row-start-3 row-end-3">{props.meta.footer}</div>
                        </div>
                        <div className="col-start-2 col-end-2 pr-2 pl-8 fit wrap">
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
