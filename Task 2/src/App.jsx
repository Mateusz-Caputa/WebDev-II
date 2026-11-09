import "./App.css"

const navigation = [
  { target: "#", title: "Action" },
  { target: "#", title: "Comedy" },
  { target: "#", title: "Romance" },
  { target: "#", title: "Drama" }
]

const movies = [
  { poster: "who-framed-roger-rabbit.jpg", title: "Who Framed Roger Rabbit (1988)", description: "In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!" },
  { poster: "hook.jpg", title: "Hook (1991)", description: "Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic." },
  { poster: "la-la-land.jpg", title: "La La Land (2016)", description: "Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!" },
  { poster: "hidden-figures.jpg", title: "Hidden Figures (2016)", description: "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers." },
  { poster: "palm-springs.jpg", title: "Palm Springs (2020)", description: "A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways." },
  { poster: "barbie.jpg", title: "Barbie (2023)", description: "Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!" }
]

function App() {
  return (
    <>
      <header>
        <h1>watch.it</h1>
        <nav>
          <ul>
            {navigation.map((link) => (
              <li><a href={link.target}>{link.title}</a></li>
            ))}
          </ul>
        </nav>
        <button>SEARCH</button>
      </header>
      <main>
        {movies.map((movie) => (
          <section className="movie">
            <div class="poster">
              <img src={movie.poster} className="poster" />
            </div>
            <div class="body">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <button>WATCH NOW</button>
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export default App
