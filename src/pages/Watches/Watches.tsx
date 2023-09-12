interface SearchWatches {
    terms: string[]
}

const Watches: React.FC<SearchWatches> = ({ terms }) => {
    console.log(terms)
    return <div></div>
}
export { Watches }
