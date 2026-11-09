export default function Albums({ featured = { title: "Alt Text", src: null }, others = [] }) {
    return (
        <section class="albums">
            <img src={featured.src} alt={featured.title} class="featured" />
            {others.map((other) => (
                <>
                    <img src={other.src} alt={other.title} />
                </>
            ))}
        </section>
    )
};