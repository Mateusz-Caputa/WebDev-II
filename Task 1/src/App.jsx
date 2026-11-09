import "./App.css" // All css in one file
//Custom components
import Logo from "./components/Logo"
import Nav from "./components/Nav"
import Article from "./components/Article"
import Albums from "./components/Albums"
import Author from "./components/Author"
import Comments from "./components/Comments"
import SocialIcons from "./components/SocialIcons"

// API ready content
const navLinks = [
  { target: "#", title: "Our Blog" },
  { target: "#", title: "Our Artists" },
  { target: "#", title: "Our Story" }
];

const article = {
  title: "Erased Tapes:",
  hero: {
    title: "Exploring the Sonic Frontier",
    paragraph: "Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec."
  },
  sections: [
    { title: "Heading", content: "Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor. Sollicitudin cubilia scelerisque diam taciti lacus. Dapibus penatibus augue dapibus sagittis; rhoncus accumsan. Accumsan urna et, ultrices placerat justo rutrum. Tristique mattis ante cras accumsan convallis phasellus fermentum magna. Rhoncus curabitur pharetra proin ante nam adipiscing accumsan hac. Rutrum efficitur nullam integer ut ex id. Pulvinar vel at vestibulum vivamus sed nascetur eget.\n\nLaoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et. Aptent maximus vehicula nullam odio tempor. Placerat dis facilisis potenti iaculis, primis vivamus nec at magnis. Aadipiscing curabitur vestibulum imperdiet dolor primis. Inceptos penatibus inceptos eu habitasse aptent vehicula platea litora congue. Ultricies mauris fringilla rhoncus pharetra iaculis vitae. Venenatis himenaeos eget molestie dignissim consectetur tellus litora. Porta a iaculis mi primis rhoncus.\n\nCurae habitasse elementum amet nunc, natoque at. Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat. Eros phasellus platea mauris condimentum natoque hendrerit tellus id. Ex imperdiet vitae maximus adipiscing neque quam tempor orci. Lobortis porta lacinia cubilia tellus vel placerat; facilisis mi euismod. Neque eu orci nulla penatibus elit nec.\n\nParturient habitasse facilisis purus donec, enim platea maximus. Primis class varius augue sed class ultricies. Posuere curabitur tristique penatibus montes hac ac imperdiet. Risus per sociosqu, cursus leo condimentum ac fringilla. Nibh curabitur eros tempus nec; nam curae hendrerit. Mattis placerat maximus mollis praesent, eros adipiscing dui.\n" },
    { title: "Heading", content: "Habitasse ornare fames facilisis montes pulvinar habitasse fringilla. Risus porta cursus duis vivamus quam adipiscing nec. Ante at posuere eget aptent natoque vivamus ante. Aenean enim dapibus viverra sem efficitur. Felis nam semper integer justo in. Facilisi augue urna torquent lacinia facilisi inceptos. Natoque varius feugiat massa scelerisque natoque, cras tempor inceptos.\n\nAmet ac leo, imperdiet hac litora auctor. Suscipit congue duis sociosqu auctor euismod vivamus urna diam. Nunc enim himenaeos litora facilisi, tincidunt torquent. Eros sapien laoreet duis, volutpat rutrum pulvinar. Natoque semper sapien aptent quis habitant aliquam condimentum luctus. Tempus pellentesque congue varius dapibus pharetra. Fermentum diam auctor bibendum rhoncus leo. Vestibulum tincidunt fames convallis ligula semper porttitor.\nMagnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra. Platea congue orci sagittis purus scelerisque. Velit taciti maecenas praesent nam lobortis metus vehicula habitasse porttitor. Porta gravida placerat lobortis litora elit feugiat venenatis. Cras magna himenaeos consequat aliquet ad nec pharetra. Ligula eleifend imperdiet aptent primis placerat. Nec magnis tempus vulputate ipsum ad sagittis mus.\n" },
    { title: "Heading", content: "Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar. Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius lobortis iaculis metus. Netus sem imperdiet hendrerit vehicula netus est gravida tortor. Nunc ridiculus per montes nulla, facilisis lacinia per leo. Hendrerit scelerisque nulla in suspendisse sit tortor sagittis. Suscipit dictumst ipsum laoreet cras egestas suscipit orci. Per molestie felis erat platea blandit commodo.\n\nAd venenatis sapien habitant posuere donec porttitor vel nisi. Sodales laoreet donec diam rhoncus lectus euismod orci torquent curae. Fames rhoncus torquent sed convallis; potenti cras. Dictumst arcu libero nulla malesuada mi ridiculus platea. Interdum ullamcorper fringilla himenaeos mollis; in arcu pharetra massa. Nunc mauris taciti montes sapien molestie orci ac quis.\n\n" }
  ]
}

const albumCovers = {
  featured: { title: "Album All encores cover", src: "/albums/all-encores.jpg" },
  other: [
    { title: "Album The cell cover", src: "albums/the-cell.jpg" },
    { title: "Album Blured cover", src: "albums/blurred.jpg" },
    { title: "Album Encores 2 cover", src: "albums/encores-2.jpg" },
    { title: "Album Eulogy for evolution cover", src: "albums/eulogy-for-evolution.jpg" },
  ]
}

const author = {
  title: "The Author",
  content: "Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis. ",
  photo: "profile_picture.jpg",
  socials: {
    instagram: "#",
    facebook: "#",
    x: "#",
  }
}

const comments = [
  { username: "soundseeker92", comment: "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?" },
  { username: "Ted Baker", comment: "I've been following the label for years—so glad someone's finally writing about their impact." },
  { username: "Queen_of_noise", comment: "I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling." },
]

const page = {
  socials: {
    instagram: "#",
    facebook: "#",
    x: "#",
  }
}

// Main page layout 
function App() {
  return (
    <>
      <div className="page-wrapper">

        <header className="text-center">
          <Logo size={200} className="margin-y" />
          <Nav links={navLinks} />
        </header>

        <main>
          <Article title={article.title} hero={article.hero} sections={article.sections} />
          <Albums featured={albumCovers.featured} others={albumCovers.other} />
          <Author title={author.title} content={author.content} photo={author.photo} socials={author.socials} />
        </main>

        <aside className="comments">
          <Comments title="Comments" comments={comments} />
        </aside>

      </div>

      <footer className="padding-y text-center">
        <Nav links={navLinks} />
        <p className="margin-y">Copyright &copy; 2024 Ahmed Webb.</p>
        <SocialIcons instagram={page.socials.instagram} facebok={page.socials.facebook} x={page.socials.x} />
      </footer>

    </>
  )
}

export default App
