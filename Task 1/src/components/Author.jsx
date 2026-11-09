import SocialIcons from "./SocialIcons"

export default function Author({ title, content, photo, socials }) {
    return (
        <section className="author">
            <div>
                <h2 className="text-center">{title}</h2>
                <p>{content}</p>
            </div>
            <img src={photo} alt="Authors profile photo" className="photo margin-x" />

            <div>
                <SocialIcons instagram={socials.instagram} facebok={socials.facebook} x={socials.x} />
            </div>
        </section>
    )
};