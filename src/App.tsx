import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/allankruger.png",
      name: "Allan Krüger",
      role: "Frontend developer",
    },
    content: [
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content:
          "I Just uploaded another project to my portfolio. It's a project I made during the NLW Return, a Rocketseat event. The project name is DoctorCare 🚀",
      },
      { type: "hyperlink", content: "👉 allan.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content: "New tutorial available on Rocketseat's website!",
      },
      { type: "hyperlink", content: "rocketseat.com/tutorials" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
