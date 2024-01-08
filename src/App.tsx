import { Header } from "./components/Header"
import { Post, PostType } from './components/Post'; 
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css'; 
import "./global.css" 

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Yagolennox.png',
      name: 'Yago Santos',
      role: 'CTO @Iberiko' 
    }, 
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { type: 'link', content: 'Iusto accusamus iure nemo quis ullam tenetur laboriosam animi!' }
    ],
    publishedAt: new Date('2024-01-05 21:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educator @Rocketseat'  
    }, 
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { type: 'link', content: 'Iusto accusamus iure nemo quis ullam tenetur laboriosam animi!' },  
    ],
    publishedAt: new Date('2024-01-05 21:00'),
  },
]

export function App() {
  return (
    <div>
       <Header/> 

       <div className={styles.wrapper}>
        <Sidebar /> 
        <main>
         {posts.map(post => {
          return (
            <Post
              key={post.id} 
              post={post} 
            /> 
          ) 
         })}
        </main>
       </div>
    </div>
  )
} 