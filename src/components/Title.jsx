function Component({ name }) {
    return <h1 onClick={() => console.log(name)}>
        Bonjour, {name}
    </h1>
}

export default Component