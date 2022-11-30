import { Gap, SearchBar } from "../components"

export default function Home() {
  return (
    <div className='min-h-screen'>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, nesciunt?</p>
      <Gap height={10} />
      <p>Lorem ipsum dolor sit amet.</p>
      <SearchBar />
    </div>
  )
}