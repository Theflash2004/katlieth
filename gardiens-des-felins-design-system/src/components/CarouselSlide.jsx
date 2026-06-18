import React from 'react';

/**
 * CarouselSlide — composant de slide réutilisable
 * Gardiens des Félins Design System
 */

const s = {
  frame: {
    width: 1080, height: 1350,
    backgroundColor: '#11110D', position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    padding: 60, fontFamily: "'Inter', Arial, sans-serif", boxSizing: 'border-box',
  },
  accentBar: { position: 'absolute', top: 0, left: 0, right: 0, height: 8, backgroundColor: '#B65A2B' },
  warningBar: {
    position: 'absolute', top: 8, left: 0, right: 0,
    backgroundColor: '#D19A3A', color: '#11110D',
    fontWeight: 600, fontSize: 14, padding: '12px 60px',
    display: 'flex', alignItems: 'center', gap: 8, zIndex: 10,
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 },
  slideNumber: { fontSize: 12, color: '#B8B1A5', letterSpacing: '0.1em', fontWeight: 500 },
  slideTag: { fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#B65A2B', backgroundColor: 'rgba(182,90,43,0.12)', padding: '4px 12px', borderRadius: 4 },
  body: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 },
  eyebrow: { fontFamily: "'Inter', Arial, sans-serif", fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#B65A2B' },
  headline: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 42, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#F2EFE6' },
  heroHeadline: { fontSize: 52 },
  bodyText: { fontSize: 20, color: '#B8B1A5', lineHeight: 1.65 },
  list: { listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 20 },
  listItem: { fontSize: 22, color: '#F2EFE6', lineHeight: 1.65, paddingLeft: 32, position: 'relative' },
  bullet: { color: '#B65A2B', position: 'absolute', left: 0, fontWeight: 700 },
  ctaHeadline: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 38, fontWeight: 700, textTransform: 'uppercase', color: '#B65A2B', letterSpacing: '0.05em', lineHeight: 1.2 },
  ctaAction: { fontSize: 22, fontWeight: 700, color: '#F2EFE6', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.8 },
  ctaLink: { fontSize: 18, color: '#D19A3A', textDecoration: 'none', fontWeight: 500 },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #34383B', paddingTop: 16, marginTop: 32 },
  footerBrand: { fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#B8B1A5' },
  footerLink: { fontSize: 11, color: '#B8B1A5', textDecoration: 'none' },
};

export function CarouselSlide({
  slideNumber = '01', totalSlides = '08', tag, eyebrow, title,
  heroTitle = false, bodyText, children,
  variant = 'default', showWarning = false,
  warningText = 'Attention : ce post aborde un sujet sensible.',
  style = {},
}) {
  const frameStyle = { ...s.frame, backgroundColor: variant === 'panel' ? '#181A1A' : '#11110D', ...style };
  const headerMarginTop = showWarning ? 56 : 0;
  return (
    <div style={frameStyle}>
      <div style={s.accentBar} />
      {showWarning && <div style={s.warningBar}>⚠ {warningText}</div>}
      <div style={{ ...s.header, marginTop: headerMarginTop }}>
        <span style={s.slideNumber}>{slideNumber} / {totalSlides}</span>
        {tag && <span style={s.slideTag}>{tag}</span>}
      </div>
      <div style={s.body}>
        {eyebrow && <p style={s.eyebrow}>{eyebrow}</p>}
        {title && <h2 style={{ ...s.headline, ...(heroTitle ? s.heroHeadline : {}) }}>{title}</h2>}
        {bodyText && <p style={s.bodyText}>{bodyText}</p>}
        {children}
      </div>
      <footer style={s.footer}>
        <span style={s.footerBrand}>Gardiens des Félins</span>
        <span style={s.footerLink}>linktr.ee/gardiensdesfelins</span>
      </footer>
    </div>
  );
}

export function DenounceList({ items = [] }) {
  return (
    <ul style={s.list}>
      {items.map((item, i) => (
        <li key={i} style={s.listItem}>
          <span style={s.bullet}>•</span>{item}
        </li>
      ))}
    </ul>
  );
}

export function CTASlide({ slideNumber = '08', totalSlides = '08' }) {
  return (
    <div style={{ ...s.frame, alignItems: 'center', textAlign: 'center' }}>
      <div style={s.accentBar} />
      <div style={{ ...s.header, width: '100%' }}>
        <span style={s.slideNumber}>{slideNumber} / {totalSlides}</span>
      </div>
      <div style={{ ...s.body, alignItems: 'center', gap: 32 }}>
        <p style={s.eyebrow}>Association Gardiens des Félins</p>
        <h2 style={s.ctaHeadline}>AGISSEZ MAINTENANT</h2>
        <div style={s.ctaAction}>Signez la pétition<br />Rejoignez-nous<br />Partagez ce post</div>
        <a href="https://linktr.ee/gardiensdesfelins" style={s.ctaLink}>linktr.ee/gardiensdesfelins</a>
      </div>
      <footer style={s.footer}>
        <span style={s.footerBrand}>Gardiens des Félins</span>
        <span style={s.footerLink}>Protection animale · France</span>
      </footer>
    </div>
  );
}

export default CarouselSlide;
