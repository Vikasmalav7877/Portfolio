import React, { useEffect, useState } from 'react';
import color1 from '../css/skins/color-1.css?url';
import color2 from '../css/skins/color-2.css?url';
import color3 from '../css/skins/color-3.css?url';
import color4 from '../css/skins/color-4.css?url';
import color5 from '../css/skins/color-5.css?url';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const navigation = [
  { id: 'home', label: 'Home', icon: 'fa fa-home' },
  { id: 'about', label: 'About', icon: 'fa fa-user' },
  { id: 'experience', label: 'Experience', icon: 'fa-solid fa-award' },
  { id: 'service', label: 'Services', icon: 'fa fa-list' },
  { id: 'portfolio', label: 'Portfolio', icon: 'fa fa-briefcase' },
  { id: 'contact', label: 'Contact', icon: 'fa fa-comment' },
];

const skills = [
  { name: 'HTML', percent: 76 },
  { name: 'CSS', percent: 66 },
  { name: 'JavaScript', percent: 40 },
  { name: 'Java', percent: 25 },
  { name: 'C++', percent: 36 },
];

const education = [
  {
    title: 'Saraswati Vidya Mandir Secondary School',
    qualification: '10th (RBSE) 2016-2017',
    description: 'I successfully completed my Class 10th in 2017 from Saraswati Vidya Mandir Secondary School.',
  },
  {
    title: 'Krishna Bal Vidya Niketan Senior Secondary School',
    qualification: '12th (RBSE) 2018-2019',
    description: 'Passed Class 12th in 2019 from Krishna Bal Vidya Niketan Senior Secondary School (RBSE).',
  },
  {
    title: 'Pratap ITI',
    qualification: 'Electrical Winder Course (June-December) 2022',
    description: 'Successfully completed a 6-month Electrical Winder Course on 10 December 2022 from Partap ITI.',
  },
];

const qualifications = [
  {
    title: 'Graduate Education',
    qualification: 'Bachelor of Arts (B.A.) 2019-2023',
    description: 'Successfully completed Bachelor of Arts (B.A.) on 26 July 2023 from University of Kota (UOK).',
  },
  {
    title: 'Aryan Polytechnic College',
    qualification: 'Industrial Training Institute (ITI) 2020-2023',
    description: 'Successfully completed a 2-year ITI course on 06 September 2023 from Aryan Polytechnic College, Raipura, Kota.',
  },
  {
    title: 'Postgraduate Education',
    qualification: 'Master in Computer Application (2024-Pursuing)',
    description: 'Currently pursuing Master of Computer Applications (MCA) from Modi Institute of Management and Technology, Kota.',
  },
];

const experienceImages = [
  { src: asset('image/we connect.jpg'), alt: 'We Connect experience certificate' },
  { src: asset('image/cyber security.jpg'), alt: 'Cyber security experience certificate' },
  { src: asset('image/Screenshot 2025-09-14 040739.png'), alt: 'Experience certificate' },
];

const services = [
  {
    icon: 'fa fa-mobile',
    title: 'Website Development',
    description: 'I create functional, responsive websites from scratch or to your requirements using HTML, CSS, and JavaScript.',
  },
  {
    icon: 'fa fa-laptop',
    title: 'Responsive Web Design',
    description: 'I create websites that adapt seamlessly to different devices and screen sizes using responsive design techniques.',
  },
  {
    icon: 'fa fa-code',
    title: 'UI/UX Design',
    description: 'I design clear, easy-to-use interfaces with a focus on practical user experiences.',
  },
  {
    icon: 'fa fa-cogs',
    title: 'Maintenance and Support',
    description: 'I help keep websites secure, updated, optimized, and user-friendly over time.',
  },
  {
    icon: 'fa fa-database',
    title: 'SQL',
    description: 'I write SQL queries, manage databases, analyze data, and support data accuracy and integrity.',
  },
  {
    icon: 'fa fa-bug',
    title: 'Bug Fixes',
    description: 'I find and fix front-end layout, styling, and functionality issues across devices and browsers.',
  },
];

const projects = [
  {
    image: asset('image/uk2india.co.uk_index (1).png'),
    title: 'UK2India Travel Website',
    url: 'https://uk2india.co.uk',
  },
  {
    image: asset('image/Screenshot 2025-09-25 151351.png'),
    title: 'Hospital Management Site',
    url: 'https://vikasmalav7877.github.io/hospital-managment/',
  },
  {
    image: asset('image/Screenshot 2025-10-18 215953.png'),
    title: 'Candles',
    url: 'https://vikasmalav7877.github.io/candle/',
  },
  { image: asset('image/wordpress.png'), title: 'WordPress' },
  { image: asset('image/css-calculator.png'), title: 'CSS Calculator' },
  { image: asset('image/adult-analysis-banking-1549000-2-1130x688.webp'), title: 'Dashboard Project' },
];

const contactMethods = [
  {
    icon: 'fa fa-phone',
    label: 'Call me',
    value: '+91 78770 23568',
    href: 'tel:+917877023568',
  },
  {
    icon: 'fa fa-envelope',
    label: 'Email',
    value: 'Malavvikas001@gmail.com',
    href: 'mailto:Malavvikas001@gmail.com',
  },
  {
    icon: 'fa fa-instagram',
    label: 'Instagram',
    value: '@vikasmalav7877',
    href: 'https://instagram.com/vikasmalav7877',
    external: true,
  },
  {
    icon: 'fa fa-linkedin',
    label: 'LinkedIn',
    value: 'Vikas Malav',
    href: 'https://www.linkedin.com/in/vikas-malav-800b34h45',
    external: true,
  },
];

const skins = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
const skinUrls = [color1, color2, color3, color4, color5];
const roles = ['Web Designer', 'Web Developer'];

function SectionTitle({ children }) {
  return (
    <div className="row">
      <div className="section-title padd-15">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="row">
      <div className="timline-box padd-15">
        <div className="timline shadow-dark">
          {items.map((item) => (
            <div className="timline-item" key={item.title}>
              <div className="circle-dot">
                <h3 className="timline-dot"><i />{item.title}</h3>
                <h4 className="timline-title">{item.qualification}</h4>
                <p className="timeline-title">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Sidebar({ activeSection, menuOpen, onNavigate, onToggle, onClose }) {
  return (
    <>
      <div className={`overlay${menuOpen ? ' active' : ''}`} onClick={onClose} />
      <aside className={`vikas${menuOpen ? ' active' : ''}`}>
        <div className="logo">
          <a href="#home"><span>V</span>ikas</a>
        </div>
        <button className="nav-toggler" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={onToggle}>
          <span />
        </button>
        <nav aria-label="Main navigation">
          <ul className="nav">
            {navigation.map((item) => (
              <li key={item.id}>
                <a className={activeSection === item.id ? 'active' : ''} href={`#${item.id}`} onClick={() => onNavigate(item.id)}>
                  <i className={item.icon} aria-hidden="true" />{item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">Hello, I'm <span className="name">Vikas Malav</span></h3>
            <h3 className="my-profession">Front-End <span id="element"><span className="typing">{roles[roleIndex]}</span></span></h3>
            <p>I am a front-end web developer from India. I am self-motivated and curious, with a strong interest in creating user-friendly products. I enjoy learning new web technologies and exploring areas like deep learning. I love designing beautiful and efficient websites, and I use my skills in HTML5, CSS, and JavaScript to develop high-quality products.</p>
            <a href="#about" className="btn hire-me">More about me</a>
          </div>
          <div className="home-img padd-15">
            <img src={asset('image/resume image.jpg')} alt="Vikas Malav" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const personalInfo = [
    ['Birthday', '15 Aug 2001'],
    ['Age', '24 years'],
    ['Email', 'Malavvikas001@gmail.com'],
    ['Degree', 'MCA'],
    ['Phone', '+91 78770 23568'],
    ['City', 'Kota'],
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle>About</SectionTitle>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>Hi, I'm Vikas Malav, a passionate <span>Frontend Web Developer</span></h3>
                <p>With a keen eye for clean design and responsive UI, I specialize in crafting modern, user-friendly websites using HTML, CSS, JavaScript, and frameworks like React. I'm pursuing my Master of Computer Applications (MCA) to deepen my understanding of computer science and expand my development skills.</p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  {personalInfo.map(([label, value]) => (
                    <div className="info-item padd-15" key={label}>
                      <p>{label}: <span>{value}</span></p>
                    </div>
                  ))}
                  <div className="buttons padd-15">
                    <a href={asset('CV/Vikas_Malav_Resume_Spacing_Fixed.pdf')} download="Vikas_Malav_Resume_Spacing_Fixed.pdf" className="btn">Download CV</a>
                    <a href="#contact" className="btn">Contact Me</a>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  {skills.map((skill) => (
                    <div className="skill-item padd-15" key={skill.name}>
                      <div className="skill-percent"><span>{skill.name}</span><span>{skill.percent}%</span></div>
                      <div className="progress"><div className="progress-in" style={{ width: `${skill.percent}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15">
                <Timeline items={education} />
              </div>
              <div className="experience padd-15">
                <Timeline items={qualifications} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2 className="experience-heading">Experience</h2>
          </div>
        </div>
        <div className="row">
          {experienceImages.map((item) => (
            <div className="experience-item" key={item.src}>
              <div className="experience-item-inner"><img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto', borderRadius: 10 }} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="service" className="service section">
      <div className="container">
        <SectionTitle>Services</SectionTitle>
        <div className="row">
          {services.map((service) => (
            <div className="service-item" key={service.title}>
              <div className="service-item-inner">
                <div className="icon"><i className={service.icon} aria-hidden="true" /></div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <SectionTitle>Portfolio</SectionTitle>
        <div className="row">
          <div className="portfolio-heading padd-15"><h2>My latest projects</h2></div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div className="portfolio-item padd-15" key={project.image}>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={project.image} alt={project.title} />
                  {project.url && (
                    <>
                      <div className="overlay-icons">
                        <a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} image`}><i className="fas fa-search-plus" /></a>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}><i className="fas fa-external-link-alt" /></a>
                      </div>
                      <div className="overlay-text">{project.title}</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setSubmissionStatus('The contact form is not configured yet. Add your Formspree endpoint to .env.local.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error('Your message could not be sent. Please try again later.');
      }

      form.reset();
      setSubmissionStatus('Message sent successfully. Thank you for getting in touch!');
    } catch (error) {
      setSubmissionStatus(error instanceof Error ? error.message : 'Your message could not be sent. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="row"><div className="section-title padd-15"><h2>Contact</h2></div></div>
      <h3 className="contact-title padd-15">Have a question or a project?</h3>
      <h4 className="contact-sub-title padd-15">Choose the channel that works best for you.</h4>
      <div className="row contact-info">
        {contactMethods.map((method) => (
          <div className="contact-info-item padd-15" key={method.label}>
            <div className="icon">
              <a href={method.href} aria-label={method.label} {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <i className={method.icon} aria-hidden="true" />
              </a>
            </div>
            <h4>{method.label}</h4>
            <p><a href={method.href} {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{method.value}</a></p>
          </div>
        ))}
      </div>
      <h3 className="contact-title padd-15">Send me a message</h3>
      <h4 className="contact-sub-title padd-15">Tell me a little about what you have in mind.</h4>
      <div className="row">
        <div className="contact-form padd-15">
          <form onSubmit={handleSubmit} onChange={() => setSubmissionStatus('')}>
            <div className="row">
              <div className="form-item col-6 padd-15"><input className="form-control" type="text" name="name" placeholder="Your name" aria-label="Your name" autoComplete="name" required /></div>
              <div className="form-item col-6 padd-15"><input className="form-control" type="email" name="email" placeholder="Email address" aria-label="Email address" autoComplete="email" required /></div>
            </div>
            <div className="row"><div className="form-item col-12 padd-15"><input className="form-control" type="text" name="subject" placeholder="Subject" aria-label="Subject" required /></div></div>
            <div className="row"><div className="form-item col-12 padd-15"><textarea className="form-control" name="message" placeholder="Your message" aria-label="Your message" required /></div></div>
            <div className="row"><div className="form-item col-12 padd-15"><button type="submit" className="btn" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send message'}</button></div></div>
            {submissionStatus && <p role="status" aria-live="polite">{submissionStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function StyleSwitcher({ open, onToggle, dark, selectedSkin, onToggleDark, onSelectSkin }) {
  return (
    <aside className={`style-switcher${open ? ' open' : ''}`} aria-label="Appearance settings">
      <button className="style-switcher-toggler s-icon" type="button" aria-label="Toggle appearance settings" onClick={onToggle}><i className="fa fa-cog" aria-hidden="true" /></button>
      <button className="day-night s-icon" type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={onToggleDark}>
        <i className={`fa-regular ${dark ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
      </button>
      <h4>Theme color</h4>
      <div className="color">
        {skins.map((skin, index) => (
          <button key={skin} className={skin} type="button" aria-label={`Select theme color ${index + 1}`} aria-pressed={skin === selectedSkin} onClick={() => onSelectSkin(skin)} />
        ))}
      </div>
    </aside>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [skin, setSkin] = useState('color-1');

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let current = navigation[0].id;
      navigation.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) current = id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('load', updateActiveSection, { once: true });
    updateActiveSection();
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = skinUrls[skins.indexOf(skin)];
    document.head.appendChild(stylesheet);
    return () => stylesheet.remove();
  }, [skin]);

  useEffect(() => {
    const closeSwitcher = () => setSwitcherOpen(false);
    window.addEventListener('scroll', closeSwitcher, { passive: true });
    return () => window.removeEventListener('scroll', closeSwitcher);
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="main-container">
        <Sidebar
          activeSection={activeSection}
          menuOpen={menuOpen}
          onNavigate={handleNavigate}
          onToggle={() => setMenuOpen((open) => !open)}
          onClose={() => setMenuOpen(false)}
        />
        <main className="main-content">
          <Home />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Contact />
        </main>
      </div>
      <StyleSwitcher
        open={switcherOpen}
        onToggle={() => setSwitcherOpen((open) => !open)}
        dark={dark}
        selectedSkin={skin}
        onToggleDark={() => setDark((value) => !value)}
        onSelectSkin={setSkin}
      />
    </>
  );
}
