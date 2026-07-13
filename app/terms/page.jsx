'use client';

import { useState } from 'react';

export default function TermsAndConditions() {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: 'Terms & Conditions (AGB)',
      updated: 'Last updated: July 2026',
      sec1Title: '1. Scope',
      sec1Text: 'These terms and conditions apply to the use of this website and the services provided by Alexandru-Mihai Glontaru ("Provider", "we", "us"). By accessing this website, you accept these terms in full.',
      sec2Title: '2. Services Provided',
      sec2Text: 'The Provider offers consulting, fractional CTO services, and AI engineering services. The information on this website is for general informational purposes and does not constitute a legally binding offer until a specific contract is agreed upon.',
      sec3Title: '3. Intellectual Property',
      sec3Text: 'Unless otherwise stated, we own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from sapiema.com for your own personal use subjected to restrictions set in these terms and conditions.',
      sec4Title: '4. Limitation of Liability',
      sec4Text: 'We will not be liable for any damages that arise in connection with the use of this website. While we endeavor to ensure that the information on this website is correct, we do not warrant its completeness or accuracy.',
      sec5Title: '5. Governing Law',
      sec5Text: 'These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Germany. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Berlin, Germany.',
      sec6Title: '6. Changes to Terms',
      sec6Text: 'We reserve the right to amend these terms at any time. Any changes will be posted on this page.'
    },
    de: {
      title: 'Allgemeine Geschäftsbedingungen (AGB)',
      updated: 'Stand: Juli 2026',
      sec1Title: '1. Geltungsbereich',
      sec1Text: 'Diese Geschäftsbedingungen gelten für die Nutzung dieser Website und die von Alexandru-Mihai Glontaru ("Anbieter", "wir", "uns") bereitgestellten Dienste. Mit dem Zugriff auf diese Website akzeptieren Sie diese Bedingungen in vollem Umfang.',
      sec2Title: '2. Erbrachte Leistungen',
      sec2Text: 'Der Anbieter bietet Beratung, fraktionierte CTO-Dienstleistungen und AI-Engineering-Dienstleistungen an. Die Informationen auf dieser Website dienen allgemeinen Informationszwecken und stellen kein rechtsverbindliches Angebot dar, bis ein spezifischer Vertrag vereinbart wurde.',
      sec3Title: '3. Geistiges Eigentum',
      sec3Text: 'Sofern nicht anders angegeben, besitzen wir die geistigen Eigentumsrechte für alle Materialien auf dieser Website. Alle geistigen Eigentumsrechte sind vorbehalten. Sie können für Ihren eigenen persönlichen Gebrauch darauf zugreifen, vorbehaltlich der in diesen Bedingungen festgelegten Einschränkungen.',
      sec4Title: '4. Haftungsbeschränkung',
      sec4Text: 'Wir haften nicht für Schäden, die im Zusammenhang mit der Nutzung dieser Website entstehen. Obwohl wir uns bemühen sicherzustellen, dass die Informationen auf dieser Website korrekt sind, übernehmen wir keine Garantie für deren Vollständigkeit oder Richtigkeit.',
      sec5Title: '5. Geltendes Recht',
      sec5Text: 'Diese Geschäftsbedingungen unterliegen den Gesetzen der Bundesrepublik Deutschland und werden in Übereinstimmung mit diesen ausgelegt. Alle Streitigkeiten im Zusammenhang mit diesen Bedingungen unterliegen der ausschließlichen Zuständigkeit der Gerichte in Berlin, Deutschland.',
      sec6Title: '6. Änderungen der Bedingungen',
      sec6Text: 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Alle Änderungen werden auf dieser Seite veröffentlicht.'
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
        <p style={{ fontStyle: 'italic', marginBottom: '30px' }}>{t.updated}</p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.sec1Title}</h2>
        <p>{t.sec1Text}</p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.sec2Title}</h2>
        <p>{t.sec2Text}</p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.sec3Title}</h2>
        <p>{t.sec3Text}</p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.sec4Title}</h2>
        <p>{t.sec4Text}</p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.sec5Title}</h2>
        <p>{t.sec5Text}</p>

        <h2 style={{ fontSize: '20px', color: '#f66a2e', marginTop: '30px', marginBottom: '10px' }}>{t.sec6Title}</h2>
        <p>{t.sec6Text}</p>
      </main>
    </>
  );
}
