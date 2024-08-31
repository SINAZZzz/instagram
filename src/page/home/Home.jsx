import BtnNavigation from './component/btnNavigation/BtnNavigation.jsx'
import Head from './component/header/Head.jsx'
import Story from './component/story/Story.jsx'
import Posts from './component/posts/Posts.jsx'

export default function Home() {
  return (
    <div>
      <Head />
      <Story />
      <Posts />
      <BtnNavigation />
    </div>
  )
}
 