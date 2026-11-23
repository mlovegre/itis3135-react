
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Introduction from './pages/Introduction'
import Contract from './pages/Contract'
import About from './pages/About'
import './styles/default.css'
import './styles/react.css'

function App() {
  const getPage = () => window.location.hash.slice(2) || ''

  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPage())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    const pageTitles = {
      '': 'Home',
      introduction: 'Introduction',
      contract: 'Contract',
      about: 'About'
    }

    const title = pageTitles[page] || 'Home'

    document.title =
      `Matthew Lovegren's Mellow Lizard | ITIS3135 | ${title}`
  }, [page])

  return (
    <>
      <Header />

      {page === 'introduction' ? (
        <Introduction />
      ) : page === 'contract' ? (
        <Contract />
      ) : page === 'about' ? (
        <About />
      ) : (
        <main>
          <h2>Home</h2>

          <p>
            Welcome to my ITIS3135 course website. This site
            showcases my work in Front-End Web Application
            Development at UNC Charlotte.
          </p>

          <p>
            Throughout the course, I will build webpages using
            HTML, CSS, and JavaScript. This website will connect
            my assignments and projects as I complete them.
          </p>
        </main>
      )}

      <Footer />
    </>
  )
}

export default App
