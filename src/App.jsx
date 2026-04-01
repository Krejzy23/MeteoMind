import PageShell from './components/layout/PageShell'
import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'

import HeroSection from './components/sections/HeroSection'
import HighlightsSection from './components/sections/HighlightsSection'
import FeaturesSection from './components/sections/FeaturesSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import InsightsSection from './components/sections/InsightsSection'
import FaqSection from './components/sections/FaqSection'
import DownloadsSection from './components/sections/DownloadsSections'
import ScreenshotsSection from './components/sections/ScreenshotsSection'

export default function App() {
  return (
    <PageShell>
      <SiteHeader />

      <main>
        <HeroSection />
        <HighlightsSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <HowItWorksSection />
        <InsightsSection />
        <FaqSection />
        <DownloadsSection />
      </main>

      <SiteFooter />
    </PageShell>
  )
}