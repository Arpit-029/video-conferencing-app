import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Dialog, DialogContent } from './dialog'
import './hero-1.css'

const defaults = {
  logo: { companyName: 'Zoom', mark: 'z' },
  navigation: [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Resources', href: '#resources' },
    { name: 'Plans & Pricing', href: '#pricing' },
  ],
  loginText: 'Sign in',
  loginHref: '#signin',
  callToActions: [
    { text: 'Start for free', href: '#start', variant: 'primary' },
    { text: 'Explore Zoom Workplace', href: '#explore', variant: 'secondary' },
  ],
}

export function HeroLanding({
  logo = defaults.logo,
  navigation = defaults.navigation,
  loginText = defaults.loginText,
  loginHref = defaults.loginHref,
  title,
  description,
  announcementBanner,
  callToActions = defaults.callToActions,
  className = '',
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className={`hero ${className}`}>
      <div className="hero-orb hero-orb--coral" aria-hidden="true" />
      <div className="hero-orb hero-orb--blue" aria-hidden="true" />
      <header className="hero-nav">
        <a className="brand" href="#top" aria-label={logo.companyName}>
          <span className="brand-mark">{logo.mark}</span><span>{logo.companyName}</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => <a key={item.name} href={item.href}>{item.name}</a>)}
        </nav>
        <div className="nav-actions">
          <a href={loginHref} className="sign-in">{loginText}</a>
          <a href="#contact" className="contact-link">Contact sales</a>
          <button className="menu-button" onClick={() => setMobileMenuOpen(true)} aria-label="Open navigation menu"><Menu size={22} /></button>
        </div>
      </header>

      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="mobile-menu" aria-describedby={undefined}>
          <div className="mobile-menu__head"><span className="brand"><span className="brand-mark">{logo.mark}</span>{logo.companyName}</span><button onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu"><X size={24} /></button></div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.name}<ArrowRight size={18} /></a>)}
          </nav>
          <a href={loginHref} className="mobile-signin">{loginText}</a>
        </DialogContent>
      </Dialog>

      <section id="top" className="hero-content">
        {announcementBanner && <a href={announcementBanner.linkHref} className="announcement"><span>{announcementBanner.text}</span><strong>{announcementBanner.linkText} <ArrowRight size={15} /></strong></a>}
        <p className="hero-kicker">THE AI-POWERED WORK PLATFORM</p>
        <h1>{title}</h1>
        <p className="hero-description">{description}</p>
        <div className="hero-ctas">
          {callToActions.map((cta) => <a className={`cta cta--${cta.variant}`} key={cta.text} href={cta.href}>{cta.text}{cta.variant === 'secondary' && <ArrowRight size={18} />}</a>)}
        </div>
        <p className="hero-note">No credit card required</p>
      </section>

      <section className="meeting-preview" aria-label="Zoom meeting preview illustration">
        <div className="preview-bar"><span>zoom</span><div className="preview-dots"><i /><i /><i /></div></div>
        <div className="preview-grid">
          <div className="person person--one"><span>BR</span></div><div className="person person--two"><span>JS</span></div><div className="person person--three"><span>AK</span></div><div className="person person--four"><span>MP</span></div>
        </div>
        <div className="preview-controls"><span>●</span><span>◌</span><span>▣</span><button>Leave</button></div>
      </section>
    </main>
  )
}
