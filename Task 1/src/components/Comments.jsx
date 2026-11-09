export default function Comments({ title, comments = [] }) {
    return (
        <section className="comments">
            <h2>{title}</h2>
            {comments.map(({ username, comment }) => (
                <div className="comment">
                    <strong>{username}</strong>
                    <p>{comment}</p>
                </div>
            ))}
        </section>
    )
};