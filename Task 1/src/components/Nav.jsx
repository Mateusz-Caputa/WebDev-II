export default function Nav({ links = [] }) {
    if (links.length === 0) return null;

    return (
        <nav>
            <ul>
                {links.map((link) => (
                    <li>
                        <a href={link.target}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}