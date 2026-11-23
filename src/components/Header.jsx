
function Header() {
  return (
    <header>
      <img
        src={`${import.meta.env.BASE_URL}images/mellow-lizard.png`}
        alt="Mellow Lizard mascot resting on a rock"
        width="200"
        height="200"
      />

      <h1>Matthew Lovegren's Mellow Lizard | ITIS3135</h1>

      <nav aria-label="Primary navigation">
        <a href="#/">Home</a>
        <span aria-hidden="true"> ✦ </span>
        <a href="#/contract">Contract</a>
        <span aria-hidden="true"> ✦ </span>
        <a href="#/introduction">Introduction</a>
        <span aria-hidden="true"> ✦ </span>
        <a href="#/about">About</a>
      </nav>

      <nav aria-label="Secondary navigation">
        <a href="https://webpages.charlotte.edu/mlovegre/">
          Personal Homepage
        </a>
        <span aria-hidden="true"> ✦ </span>
        <a href="https://webpages.charlotte.edu/mlovegre/itis3135/hobby/">
          Hobby
        </a>
        <span aria-hidden="true"> ✦ </span>
        <a href="https://webpages.charlotte.edu/mlovegre/itis3135/stuff/CRapY%20Page!.htm">
          Crappy Page
        </a>
        <span aria-hidden="true"> ✦ </span>
        <a href="https://webpages.charlotte.edu/mlovegre/itis3135/lovegrendesigns.com/">
          Lovegren Designs
        </a>
        <span aria-hidden="true"> ✦ </span>
        <a href="https://webpages.charlotte.edu/mlovegre/itis3135/mellowlizard/">
          Mellow Lizard Security
        </a>
      </nav>

      <p><em>My class website.</em></p>
    </header>
  )
}

export default Header
