export default function SiteFooter() {
    return (
      <footer className="border-t border-white/10 py-8 text-sm text-slate-400">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Copyright />
  
          <FooterLinks />
        </div>
      </footer>
    )
  }
  
  function Copyright() {
    return (
      <p>
        © {new Date().getFullYear()} MeteoMind. All rights reserved.
      </p>
    )
  }
  
  function FooterLinks() {
    const links = [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'FAQ', href: '#faq' },
    ]
  
    return (
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    )
  }