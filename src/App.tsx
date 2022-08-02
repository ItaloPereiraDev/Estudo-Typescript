
import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import './global.css'


const posts = [
  {
    id: 1,
    author:{
      avatarUrl:"https://github.com/ItaloPereiraDev.png",
      name: "Ítalo Pereira",
      role: "Desenvolvedor Front-End"
    },
    content:[
      {type: "paragraph", content:"Fala galeraa 👋"},
      {type: "paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content:"👉jane.design/doctorcare"},
    ],
    publishedAt: new Date ('2022-07-07 08:14:21'),
  },
  {
    id: 2,
    author:{
      avatarUrl:"https://github.com/romulo-iorio.png",
      name: "Rômulo Iorio",
      role: "Desenvolvedor FullStack"
    },
    content:[
      {type: "paragraph", content:"Fala galeraa 👋"},
      {type: "paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content:"👉jane.design/doctorcare"},
    ],
    publishedAt: new Date ('2022-07-07 08:17:21'),
  }
];

export function App() {
  return (
    <div>
    <Header/>
    <div className={styles.wrapper}>
      
      <Sidebar/>

      <main>
        {posts.map(post => {
          return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
        })}
      </main>

    </div>
    </div>
  )
}
