export type Streams = {
    disney?: boolean,
    netflix?: boolean,
    hulu?: boolean,
    siminn?: boolean,
    amazon?: boolean,
    hbo?: boolean,
}
export type InfoboxProps = {
    title: string,
    date: string,
    rating: number,
    duration: string,
    description: string,
    cast: [string],
    streams: Streams,
}



