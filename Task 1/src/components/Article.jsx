export default function Article({ title = "Article title", hero = {
    title: "Subtitle",
    paragraph: "Example text"
}, sections = [] }) {
    return (
        <article>
            <h1>{title}</h1>
            <section>
                <h2>{hero.title}</h2>
                <p className="hero">{hero.paragraph}</p>
            </section>
            <section className="article-sections">
                {sections.map((section) => (
                    <section>
                        <h2>{section.title}</h2>
                        <p>{section.content}</p>
                    </section>
                ))}
            </section>
        </article>
    )
}