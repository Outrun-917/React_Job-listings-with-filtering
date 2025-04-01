function Component({ content, type }) {
    if (type === "primary") {
        return <span className="badge badge-primary">{content}</span>
    }

    return <span className="badge badge-secondary">{content}</span>
}

export default Component
