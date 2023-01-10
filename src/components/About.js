import headshot from './headshot.JPG';

function About() {
  return (
    <div>
      <h2>Hello, I'm Leona Juan</h2>
      <h2>a full stack software engineer.</h2>
      <img className='profile-photo' src={headshot} alt='Leona Juan' />
      <p>Detail-oriented, results-driven and technical full stack software engineer with 3+ years of professional experience in digital media, marketing and public relations. Thrive when creating programs incorporating past success in communications to expand technical full stack development and UX/UI projects. Challenged when developing innovative business operations and projects in both collaborative teams and independent work.</p>
      <img className='about-icons' src='https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png' alt='LinkedIn logo' />
      <img className='about-icons' src='https://cdn-icons-png.flaticon.com/512/561/561188.png' alt='Email' />
      <img className='about-icons' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub logo' />
    </div>
  )
}

export default About;