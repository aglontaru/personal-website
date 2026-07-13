'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function Impressum() {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: 'Legal Notice (Impressum)',
      sec1: 'Information pursuant to § 5 TMG',
      contact: 'Contact',
      registry: 'Commercial Registry',
      registryText: 'Entry in the commercial register.',
      court: 'Registry Court: Charlottenburg',
      regNum: 'Registration Number: 1330901514',
      vat: 'VAT ID',
      vatText: 'VAT Identification Number pursuant to § 27 a of the Value Added Tax Act:',
      resp: 'Responsible for Content pursuant to § 55 (2) RStV',
      disclaimer: 'Disclaimer',
      liabContent: 'Liability for Content',
      liabContentText: 'As a service provider, we are responsible for our own content on these pages under general laws according to § 7 (1) TMG. According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. Liability in this regard is only possible from the time of knowledge of a concrete infringement. Upon becoming aware of such legal violations, we will remove this content immediately.',
      liabLinks: 'Liability for Links',
      liabLinksText: 'Our offer contains links to external websites of third parties, on whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. A permanent control of the contents of the linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.',
      copyright: 'Copyright',
      copyrightText: 'The content and works created by the site operators on these pages are subject to German copyright law. The duplication, editing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.'
    },
    de: {
      title: 'Impressum',
      sec1: 'Angaben gemäß § 5 TMG',
      contact: 'Kontakt',
      registry: 'Registereintrag',
      registryText: 'Eintragung im Handelsregister.',
      court: 'Registergericht: Charlottenburg',
      regNum: 'Registernummer: 1330901514',
      vat: 'Umsatzsteuer-ID',
      vatText: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
      resp: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      disclaimer: 'Haftungsausschluss (Disclaimer)',
      liabContent: 'Haftung für Inhalte',
      liabContentText: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
      liabLinks: 'Haftung für Links',
      liabLinksText: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
      copyright: 'Urheberrecht',
      copyrightText: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.'
    }
  };

  const t = content[lang];

  return (
    <>
      <title>{`${t.title} | Alexandru Glontaru`}</title>
      <main style={{ padding: '120px 20px', maxWidth: '800px', margin: '0 auto', color: '#d4e4fa', lineHeight: '1.6' }}>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px', gap: '10px' }}>
          <button 
            onClick={() => setLang('en')} 
            className={lang === 'en' ? 'btn-primary' : 'btn-outline'} 
            style={{ padding: '6px 14px', fontSize: '12px' }}
          >
            EN
          </button>
          <button 
            onClick={() => setLang('de')} 
            className={lang === 'de' ? 'btn-primary' : 'btn-outline'} 
            style={{ padding: '6px 14px', fontSize: '12px' }}
          >
            DE
          </button>
        </div>

        <h1 style={{ fontSize: '32px', color: '#f66a2e', marginBottom: '20px' }}>{t.title}</h1>
        
        <p>{t.sec1}</p>
        <p>
          <strong>Alexandru-Mihai Glontaru</strong><br />
          Wilhelm-Caspar-Wegely-Platz 5<br />
          10623 Berlin<br />
          Germany
        </p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.contact}</h2>
        <p>
          Telefon: +49 176 76503499<br />
          E-Mail: aglontaru@sapiema.com
        </p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.registry}</h2>
        <p>
          {t.registryText}<br />
          {t.court}<br />
          {t.regNum}
        </p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.vat}</h2>
        <p>
          {t.vatText}<br />
          DE363377926
        </p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.resp}</h2>
        <p>
          Alexandru-Mihai Glontaru<br />
          Wilhelm-Caspar-Wegely-Platz 5<br />
          10623 Berlin
        </p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.disclaimer}</h2>
        <p>
          <strong>{t.liabContent}</strong><br />
          {t.liabContentText}
        </p>

        <p>
          <strong>{t.liabLinks}</strong><br />
          {t.liabLinksText}
        </p>

        <p>
          <strong>{t.copyright}</strong><br />
          {t.copyrightText}
        </p>
      </main>
    </>
  );
}
