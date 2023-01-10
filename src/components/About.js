import headshot from './headshot.JPG';

function About() {
  return (
    <div className='homepage-div'>
      <div className='photo-div'>
        <img className='profile-photo' src={headshot} alt='Leona Juan' />
      </div>
      <div className='about-div'>
        <h2 className='about-header'>Hi there!</h2>
        <p>I'm Leona — a detail-oriented, results-driven and technical full stack software engineer based in New York City. My main languages are JavaScript, React and Ruby on Rails, but I'm an avid learner that continues to explore other languages {'(currently learning Python!)'}.</p>

        <p>With 3+ years of professional experience in digital media, marketing and public relations, I thrive when creating programs incorporating my past success in communications to expand technical full stack development and UX/UI projects. I love to be challenged when developing innovative business operations and projects in both collaborative teams and proactive independent work.</p>

        <p>I graduted from Rutgers University-New Brunswick in 2019 and interests outside of coding include cuddling with my two cats, making Spotify playlists and trying new recipes!</p>

        <a href='https://www.linkedin.com/in/leona-cjuan/' target='_blank' rel="noreferrer">
          <img className='about-icons' src='https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png' alt='LinkedIn logo' />
        </a>
        <a href='mailto:leonacjuan@gmail.com'>
          <img className='about-icons' src='https://cdn-icons-png.flaticon.com/512/561/561188.png' alt='Email' />
        </a>
        <a href='https://github.com/leonajuan' target='_blank' rel="noreferrer">
          <img className='about-icons' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub logo' />
        </a>
      </div>
    </div>
  )
}

export default About;