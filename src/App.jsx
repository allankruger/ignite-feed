import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Allan Krüger"
            content="Esse é o primeiro post muito legal."
          />
          <Post
            author="Daniele Krüger"
            content="Esse é o segundo post muito legal."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
