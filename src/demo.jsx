import { HeroLanding } from './components/ui/hero-1'

export default function Demo() {
  return <HeroLanding
    title="Make work less work."
    description="Connect, collaborate, and create with one flexible platform built for the way your teams work today."
    announcementBanner={{ text: 'Zoom Workplace is here', linkText: 'See what’s new', linkHref: '#new' }}
  />
}
