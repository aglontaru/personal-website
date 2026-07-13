export default function Experience() { return (
<main id="top" style={{position: 'relative', zIndex: 1}}>
  {/* ============ HERO ============ */}
  <section style={{padding: '110px 0 80px', position: 'relative', overflow: 'hidden'}}>
    <div style={{position: 'absolute', top: '10%', right: '10%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(246,106,46,0.05) 0%, transparent 70%)', pointerEvents: 'none'}} />
    <div style={{position: 'absolute', top: '20%', left: '5%', fontFamily: '"IBM Plex Mono"', fontSize: 10, color: 'rgba(154,165,189,0.3)', lineHeight: '1.2', pointerEvents: 'none'}}>SCAN_SEQ: 0x9A3B<br />STATUS: ACTIVE<br />FREQ: 144.2 MHZ</div>
    <div className="container">
      <div style={{fontFamily: '"IBM Plex Mono",monospace', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: '#f66a2e', marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, textShadow: '0 0 8px rgba(246,106,46,0.4)'}}>
        <span className="material-symbols-outlined" style={{fontSize: 16}}>radar</span>
        <span>Active Dossier Scan</span>
      </div>
      <h1 style={{margin: '0 auto', textAlign: 'center', fontSize: 'clamp(40px,6.4vw,78px)', fontWeight: 700, lineHeight: '1.04', letterSpacing: '-.03em', maxWidth: 980, position: 'relative', display: 'block'}}>
        <span style={{position: 'absolute', top: '-10px', left: '-20px', width: 15, height: 15, borderTop: '2px solid rgba(246,106,46,0.4)', borderLeft: '2px solid rgba(246,106,46,0.4)'}} />
        Skills are claims.<br /><span style={{color: '#f66a2e', textShadow: '0 0 20px rgba(246,106,46,0.3)'}}>Shipped systems are proof.</span>
        <span style={{position: 'absolute', bottom: '-10px', right: '-20px', width: 15, height: 15, borderBottom: '2px solid rgba(246,106,46,0.4)', borderRight: '2px solid rgba(246,106,46,0.4)'}} />
      </h1>
      <p style={{margin: '40px auto 0', textAlign: 'center', fontSize: 'clamp(17px,2.1vw,21px)', color: '#9aa5bd', maxWidth: 780, borderTop: '2px solid rgba(246,106,46,0.3)', paddingTop: 20, background: 'linear-gradient(180deg, rgba(246,106,46,0.03), transparent)'}}>This is not a CV of titles. It's a record of <b style={{color: '#d4e4fa', fontWeight: 600}}>what I walked into, what I built, and what was still running after I left</b> — from AWS-scale moderation pipelines to computer-vision systems on hundreds of physical sports fields.</p>
      {/* Metrics */}
      <div className="metric-grid" style={{marginTop: 60}}>
        <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
        <div className="metric-cell"><div className="metric-id">METRIC_01</div><div className="metric-value">10<span className="accent">+</span></div><p style={{fontSize: 13, color: '#9aa5bd', margin: '6px 0 0'}}>years of hard engineering, from research labs to global production systems</p></div>
        <div className="metric-cell"><div className="metric-id">METRIC_02</div><div className="metric-value">10⁶<span className="accent">+</span></div><p style={{fontSize: 13, color: '#9aa5bd', margin: '6px 0 0'}}>requests per day handled at millisecond latency (Amazon moderation pipeline)</p></div>
        <div className="metric-cell"><div className="metric-id">METRIC_03</div><div className="metric-value">€1<span className="accent">M</span></div><p style={{fontSize: 13, color: '#9aa5bd', margin: '6px 0 0'}}>corporate contract closed on a platform architected end-to-end (Sorcova)</p></div>
        <div className="metric-cell"><div className="metric-id">METRIC_04</div><div className="metric-value">200<span className="accent">+</span></div><p style={{fontSize: 13, color: '#9aa5bd', margin: '6px 0 0'}}>physical sports fields running computer-vision systems I trained (sporttotal.tv)</p></div>
      </div>
      {/* How to Read */}
      <div style={{marginTop: 56, border: '1px solid rgba(36,50,84,0.8)', borderLeft: '3px solid #f66a2e', background: 'rgba(12,21,40,0.6)', padding: '26px 30px', fontFamily: '"IBM Plex Mono",monospace', fontSize: '13.5px', color: '#9aa5bd', lineHeight: 2, position: 'relative', backdropFilter: 'blur(4px)'}}>
        <div className="hud-corner hud-tr" style={{width: 8, height: 8, borderWidth: 1, borderColor: 'rgba(246,106,46,0.5)'}} />
        <div className="hud-corner hud-br" style={{width: 8, height: 8, borderWidth: 1, borderColor: 'rgba(246,106,46,0.5)'}} />
        <b style={{color: '#f66a2e', fontWeight: 600, textShadow: '0 0 8px rgba(246,106,46,0.3)'}}>HOW TO READ THIS PAGE:</b> every role below is documented as a case file —<br />
        <b style={{color: '#f66a2e', fontWeight: 600}}>WALKED INTO</b> the situation as found · <b style={{color: '#f66a2e', fontWeight: 600}}>BUILT</b> how the skill was gained · <b style={{color: '#f66a2e', fontWeight: 600}}>PROOF</b> what shipped and can be verified.
      </div>
    </div>
  </section>
  {/* ============ LOGO STRIP ============ */}
  <section style={{padding: '64px 0', borderTop: '1px dashed rgba(36,50,84,0.5)', background: 'rgba(7,16,35,0.4)'}}>
    <div className="container">
      <div style={{fontFamily: '"IBM Plex Mono",monospace', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: '#5f6c8c', textAlign: 'center', marginBottom: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12}}>
        <span style={{height: 1, width: 40, background: 'rgba(95,108,140,0.3)'}} />VERIFIED ENTITIES<span style={{height: 1, width: 40, background: 'rgba(95,108,140,0.3)'}} />
      </div>
      <div className="logo-strip">
        <span className="logo-text" title="Amazon — Software Development Engineer">AMAZON</span>
        <span className="logo-text" title="Twitter / X — Ads Experience">X / TWITTER</span>
        <span className="logo-text" title="Deutsche Telekom — client project at sporttotal.tv">TELEKOM</span>
        <span className="logo-text" title="Deutsche Bahn — customer of the prediction engine at CrossEngage">DEUTSCHE BAHN</span>
        <span className="logo-text" title="Google for Startups — Sapiema">GOOGLE</span>
        <span className="logo-text" title="Jacobs University Bremen — BSc Computer Science">JACOBS UNIVERSITY</span>
      </div>
    </div>
  </section>
  {/* ============ CASE FILES ============ */}
  <section id="dossier" style={{padding: '100px 0', borderTop: '1px dashed rgba(36,50,84,0.5)'}}>
    <div className="container">
      <div className="section-label">System Logs — Professional Record</div>
      <h2 className="section-title">Every role, audited like a pilot:<br />situation, execution, evidence.</h2>
      {/* SAPIEMA */}
      <div className="case-file" style={{marginTop: 56}}>
        <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
        <div className="case-file-hash-bar"><span>HASH: 0x8F92...B41C</span><span className="verified-badge"><span className="verified-dot" />VERIFIED: [AUTHENTIC]</span><span>TS: 1654041600</span></div>
        <div className="case-file-header">
          <div className="case-file-title"><span className="material-symbols-outlined" style={{color: '#5f6c8c', fontSize: 24}}>memory</span><div>Sapiema<small className="case-file-role">Founder &amp; CEO</small></div></div>
          <div className="case-file-meta">JUN 2022 — PRESENT<br />BERLIN, GERMANY</div>
        </div>
        <div className="case-file-columns">
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>login</span> Walked Into</h4>
            <p style={{margin: '0 auto 6px', textAlign: 'center', fontSize: '14.5px', color: '#9aa5bd'}}>A blank page — and a conviction that <b style={{color: '#d4e4fa'}}>non-technical people should be able to use AI</b>. Built the company with three co-founders, later adding business-development and legal specialists.</p>
          </div>
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>construction</span> Built</h4>
            <ul>
              <li className="case-list-item"><span className="bullet">›</span><b style={{color: '#d4e4fa', fontWeight: 600}}>Three product iterations, each to MVP:</b> a pre-trained model marketplace, then "Adam" — a virtual AI engineer that inspects a dataset, cleans it, trains and deploys a model from natural language — then a full cloud interface.</li>
              <li className="case-list-item"><span className="bullet">›</span>Learned the hard lesson: the bottleneck isn't the tech, it's that companies <b style={{color: '#d4e4fa', fontWeight: 600}}>don't know which problems AI can solve</b>. Pivoted to the "Show me → Help me → Do it for me" services framework.</li>
              <li className="case-list-item"><span className="bullet">›</span>The discipline of killing my own weak projects — the same discipline the workshop enforces on yours.</li>
            </ul>
          </div>
          <div style={{padding: '30px 34px', textAlign: 'center'}}>
            <h4 className="case-col-heading proof"><span className="material-symbols-outlined" style={{fontSize: 14}}>task_alt</span> Proof</h4>
            <ul>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg><b style={{color: '#d4e4fa', fontWeight: 600}}>€50,000 angel investment</b> secured.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg><b style={{color: '#d4e4fa', fontWeight: 600}}>Google for Startups</b> member — $350k in Google Cloud credits plus business-development consultancy.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Graduated <b style={{color: '#d4e4fa', fontWeight: 600}}>Founder Institute</b> (2023) and <b style={{color: '#d4e4fa', fontWeight: 600}}>Early Bird Vision Lab</b> incubator (2024).</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Paying consultancy customer signed (end of 2024); technical proposal for <b style={{color: '#d4e4fa', fontWeight: 600}}>Indora</b> (global chemistry company) accepted on the merits.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Pitched at <b style={{color: '#d4e4fa', fontWeight: 600}}>Web Summit</b>, Slush'D, and the European Business Angels Network Conference.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* SORCOVA */}
      <div className="case-file">
        <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
        <div className="case-file-hash-bar"><span>HASH: 0x4D2A...E90F</span><span className="verified-badge"><span className="verified-dot" />VERIFIED: [AUTHENTIC]</span><span>TS: 1690848000</span></div>
        <div className="case-file-header">
          <div className="case-file-title"><span className="material-symbols-outlined" style={{color: '#5f6c8c', fontSize: 24}}>monitor_heart</span><div>Sorcova Health<small className="case-file-role">Chief Technology Officer (fractional)</small></div></div>
          <div className="case-file-meta">AUG 2023 — DEC 2025<br />PARIS, FRANCE</div>
        </div>
        <div className="case-file-columns">
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>login</span> Walked Into</h4>
            <p style={{margin: '0 auto 6px', textAlign: 'center', fontSize: '14.5px', color: '#9aa5bd'}}>First technical hire. The company had <b style={{color: '#d4e4fa'}}>a basic unpublished PoC</b> built by an outside boutique, and a founder-doctor personally serving pilot clients as a concierge MVP. No product, no team, no infrastructure.</p>
          </div>
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>construction</span> Built</h4>
            <ul>
              <li className="case-list-item"><span className="bullet">›</span>Defined and shipped the <b style={{color: '#d4e4fa', fontWeight: 600}}>MVP</b> (medical questionnaires + telemedicine video calls) — which directly closed the first corporate customer.</li>
              <li className="case-list-item"><span className="bullet">›</span>Architected the full preventive-health platform: daily health questionnaires, <b style={{color: '#d4e4fa', fontWeight: 600}}>heart-rate-variability via phone camera</b>, stress-hormone bio-sample tracking, plus a medical dashboard for specialists.</li>
              <li className="case-list-item"><span className="bullet">›</span>Shipped an in-app <b style={{color: '#d4e4fa', fontWeight: 600}}>AI assistant</b> (live at departure), designed a recommendation engine for health pathways, and a prediction engine for health-trajectory interventions.</li>
              <li className="case-list-item"><span className="bullet">›</span>Scaled infrastructure from two AWS VMs to a <b style={{color: '#d4e4fa', fontWeight: 600}}>distributed microservices architecture on anonymised data</b> (OVH). Hired and led a team of 10, training interns into full-time engineers.</li>
            </ul>
          </div>
          <div style={{padding: '30px 34px', textAlign: 'center'}}>
            <h4 className="case-col-heading proof"><span className="material-symbols-outlined" style={{fontSize: 14}}>task_alt</span> Proof</h4>
            <ul>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg><b style={{color: '#d4e4fa', fontWeight: 600}}>€1M corporate contract over 4 years</b> closed on the platform.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Designed for <b style={{color: '#d4e4fa', fontWeight: 600}}>GDPR, EU MDR, EU AI Act, ISO 27001</b>; independently evaluated as compliant from the product side — MDR Class II certification expected 2026.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>User base grown from a handful of test users to <b style={{color: '#d4e4fa', fontWeight: 600}}>~200 users</b>.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Accepted into the <b style={{color: '#d4e4fa', fontWeight: 600}}>Future4Care</b> accelerator (Paris); booths at VivaTech; brokered the OVH startup-program invitation.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* CROSSENGAGE */}
      <div className="case-file">
        <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
        <div className="case-file-hash-bar"><span>HASH: 0x1C7F...D88B</span><span className="verified-badge"><span className="verified-dot" />VERIFIED: [AUTHENTIC]</span><span>TS: 1635724800</span></div>
        <div className="case-file-header">
          <div className="case-file-title"><span className="material-symbols-outlined" style={{color: '#5f6c8c', fontSize: 24}}>database</span><div>CrossEngage<small className="case-file-role">Senior Data Engineer</small></div></div>
          <div className="case-file-meta">NOV 2021 — OCT 2022<br />BERLIN, GERMANY</div>
        </div>
        <div className="case-file-columns">
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>login</span> Walked Into</h4>
            <p style={{margin: '0 auto 6px', textAlign: 'center', fontSize: '14.5px', color: '#9aa5bd'}}>A post-acquisition mess: a customer-behaviour prediction engine that was <b style={{color: '#d4e4fa'}}>Python 2 notebooks stitched together</b> at 50–70% accuracy, owned by an acquired team in another city with a passive attitude toward the new owner.</p>
          </div>
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>construction</span> Built</h4>
            <ul>
              <li className="case-list-item"><span className="bullet">›</span>Rebuilt the engine as <b style={{color: '#d4e4fa', fontWeight: 600}}>Python 3 microservices</b> with real-time inference — fixing data silos, data loss, and dirty local-database streaming along the way.</li>
              <li className="case-list-item"><span className="bullet">›</span>Integrated results system-wide into CrossEngage's data stores instead of local storage.</li>
              <li className="case-list-item"><span className="bullet">›</span>Founded a <b style={{color: '#d4e4fa', fontWeight: 600}}>data science team</b> and partnered on new models, replacing basic regression algorithms.</li>
              <li className="case-list-item"><span className="bullet">›</span>Solved the human problem too: brokered trust between the acquired Hamburg team and Berlin management; was offered the <b style={{color: '#d4e4fa', fontWeight: 600}}>Director of Engineering</b> role (declined — for Sapiema).</li>
            </ul>
          </div>
          <div style={{padding: '30px 34px', textAlign: 'center'}}>
            <h4 className="case-col-heading proof"><span className="material-symbols-outlined" style={{fontSize: 14}}>task_alt</span> Proof</h4>
            <ul>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg><b style={{color: '#d4e4fa', fontWeight: 600}}>99% uptime</b> on the rebuilt engine; data-loss trigger points eliminated.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>A/B-scenario model predicting user action under competing campaigns with <b style={{color: '#d4e4fa', fontWeight: 600}}>over 70% accuracy</b>.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Engine serving customers including <b style={{color: '#d4e4fa', fontWeight: 600}}>Deutsche Bahn</b> and <b style={{color: '#d4e4fa', fontWeight: 600}}>Peek &amp; Cloppenburg</b>.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Company successfully <b style={{color: '#d4e4fa', fontWeight: 600}}>exited to Spotler</b>.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* SPORTTOTAL */}
      <div className="case-file">
        <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
        <div className="case-file-hash-bar"><span>HASH: 0x7A1E...F55D</span><span className="verified-badge"><span className="verified-dot" />VERIFIED: [AUTHENTIC]</span><span>TS: 1588291200</span></div>
        <div className="case-file-header">
          <div className="case-file-title"><span className="material-symbols-outlined" style={{color: '#5f6c8c', fontSize: 24}}>videocam</span><div>sporttotal.tv<small className="case-file-role">Senior AI Engineer</small></div></div>
          <div className="case-file-meta">MAY 2020 — OCT 2021<br />BERLIN, GERMANY</div>
        </div>
        <div className="case-file-columns">
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>login</span> Walked Into</h4>
            <p style={{margin: '0 auto 6px', textAlign: 'center', fontSize: '14.5px', color: '#9aa5bd'}}>A company building an automatic recording, production, and streaming system for sports — with <b style={{color: '#d4e4fa'}}>no automated production pipeline yet</b> and, notably, no interview methodology or AI team structure.</p>
          </div>
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>construction</span> Built</h4>
            <ul>
              <li className="case-list-item"><span className="bullet">›</span><b style={{color: '#d4e4fa', fontWeight: 600}}>From zero:</b> trained object-detection and tracking models to follow the ball and every player across a 3-feed panoramic stitch, with a proprietary cluster-detection algorithm isolating the area of interest — processed at camera level.</li>
              <li className="case-list-item"><span className="bullet">›</span>Solved event detection with a <b style={{color: '#d4e4fa', fontWeight: 600}}>virtual field model</b> reconstructed from visible line segments, placing players and ball in that space to track goals, fouls, and cards.</li>
              <li className="case-list-item"><span className="bullet">›</span>For <b style={{color: '#d4e4fa', fontWeight: 600}}>Deutsche Telekom:</b> architected a home-streaming PoC training face- and voice-detection models in real time on the camera's own hardware, with pose-detection cropping and gesture controls.</li>
              <li className="case-list-item"><span className="bullet">›</span>Built the team itself: job posts, interview methodology, hiring and onboarding of a senior AI engineer and a senior research data scientist.</li>
            </ul>
          </div>
          <div style={{padding: '30px 34px', textAlign: 'center'}}>
            <h4 className="case-col-heading proof"><span className="material-symbols-outlined" style={{fontSize: 14}}>task_alt</span> Proof</h4>
            <ul>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>System deployed in production on <b style={{color: '#d4e4fa', fontWeight: 600}}>a couple hundred sports fields</b>, still evolving after departure.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Real-time highlight detection at <b style={{color: '#d4e4fa', fontWeight: 600}}>over 90% accuracy</b>, generating tens of events per day for betting feeds and auto-produced match summaries.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Telekom PoC <b style={{color: '#d4e4fa', fontWeight: 600}}>implemented exactly as specified and accepted by the client</b> (shelved only by a management decision to keep the product in-house).</li>
            </ul>
          </div>
        </div>
      </div>
      {/* AMAZON */}
      <div className="case-file">
        <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
        <div className="case-file-hash-bar"><span>HASH: 0x5B9C...A22F</span><span className="verified-badge"><span className="verified-dot" />VERIFIED: [AUTHENTIC]</span><span>TS: 1535760000</span></div>
        <div className="case-file-header">
          <div className="case-file-title"><span className="material-symbols-outlined" style={{color: '#5f6c8c', fontSize: 24}}>shield</span><div>Amazon<small className="case-file-role">Software Development Engineer — AI, Community Moderation</small></div></div>
          <div className="case-file-meta">SEP 2018 — APR 2020<br />BERLIN, GERMANY</div>
        </div>
        <div className="case-file-columns">
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>login</span> Walked Into</h4>
            <p style={{margin: '0 auto 6px', textAlign: 'center', fontSize: '14.5px', color: '#9aa5bd'}}>Amazon Marketplace content moderation at global scale: text moderation largely automated, but <b style={{color: '#d4e4fa'}}>image moderation stuck at ~30% automation</b> — and joined as a new-grad engineer with "theoretically limited responsibilities."</p>
          </div>
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>construction</span> Built</h4>
            <ul>
              <li className="case-list-item"><span className="bullet">›</span>Personally initiated and brokered a collaboration with <b style={{color: '#d4e4fa', fontWeight: 600}}>Amazon Robotics</b> — outside day-to-day duties — to co-develop a comprehensive image-moderation model, then rewrote the image-moderation service with the squad.</li>
              <li className="case-list-item"><span className="bullet">›</span>Co-founded a third squad building an org-wide <b style={{color: '#d4e4fa', fontWeight: 600}}>model training-and-inference pipeline</b>; defended it in front of the VP of Amazon Marketplace and got it approved.</li>
              <li className="case-list-item"><span className="bullet">›</span>Re-architected legacy Java services into Scala on AWS microservices; key role migrating service communication from public internet to <b style={{color: '#d4e4fa', fontWeight: 600}}>dedicated private TLS tunnels</b>.</li>
              <li className="case-list-item"><span className="bullet">›</span>When his original squad quit en masse, was asked to single-handedly keep its products alive and train the replacement squad — done; fully staffed and functioning at departure.</li>
            </ul>
          </div>
          <div style={{padding: '30px 34px', textAlign: 'center'}}>
            <h4 className="case-col-heading proof"><span className="material-symbols-outlined" style={{fontSize: 14}}>task_alt</span> Proof</h4>
            <ul>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Image-moderation automation raised from ~30% to <b style={{color: '#d4e4fa', fontWeight: 600}}>~80%</b>.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Pipeline handling <b style={{color: '#d4e4fa', fontWeight: 600}}>millions of requests per day, mostly answered in milliseconds</b>.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Proposed for <b style={{color: '#d4e4fa', fontWeight: 600}}>accelerated promotion to Senior SDE</b>, skipping the mid-level entirely.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Certified technical interviewer; mentored two junior engineers to promotion.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* TWITTER */}
      <div className="case-file">
        <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
        <div className="case-file-hash-bar"><span>HASH: 0x3D8B...C11E</span><span className="verified-badge"><span className="verified-dot" />VERIFIED: [AUTHENTIC]</span><span>TS: 1501545600</span></div>
        <div className="case-file-header">
          <div className="case-file-title"><span className="material-symbols-outlined" style={{color: '#5f6c8c', fontSize: 24}}>campaign</span><div>Twitter<small className="case-file-role">Software Engineer — Advertisers Experience (AdsEx)</small></div></div>
          <div className="case-file-meta">AUG 2017 — DEC 2017<br />SAN FRANCISCO BAY AREA</div>
        </div>
        <div className="case-file-columns">
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>login</span> Walked Into</h4>
            <p style={{margin: '0 auto 6px', textAlign: 'center', fontSize: '14.5px', color: '#9aa5bd'}}>The tools ad creators used to build ads on the platform — a <b style={{color: '#d4e4fa'}}>company-level priority</b> project on a four-to-five-person team.</p>
          </div>
          <div className="audit-line">
            <h4 className="case-col-heading"><span className="material-symbols-outlined" style={{fontSize: 14}}>construction</span> Built</h4>
            <ul>
              <li className="case-list-item"><span className="bullet">›</span>Full-stack work on the <b style={{color: '#d4e4fa', fontWeight: 600}}>new tweet creator for AdsEx</b> — which became the backbone of the tweet creator in the platform's final pre-X version.</li>
              <li className="case-list-item"><span className="bullet">›</span>Learned production full-stack engineering: REST services, React, JavaScript, Scala, Java.</li>
            </ul>
          </div>
          <div style={{padding: '30px 34px', textAlign: 'center'}}>
            <h4 className="case-col-heading proof"><span className="material-symbols-outlined" style={{fontSize: 14}}>task_alt</span> Proof</h4>
            <ul>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Advertiser engagement with the platform increased by <b style={{color: '#d4e4fa', fontWeight: 600}}>over 30%</b>.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Release celebrated with a <b style={{color: '#d4e4fa', fontWeight: 600}}>company-wide event</b>; met Twitter's founders for a one-hour conversation on the back of the project's impact.</li>
              <li className="proof-item"><svg className="proof-check-svg" fill="none" height={14} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" width={14}><polyline points="20 6 9 17 4 12" /></svg>Received a <b style={{color: '#d4e4fa', fontWeight: 600}}>full-time offer — declined it</b> to go deeper into AI engineering. A career bet on AI, made in 2017.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============ RESEARCH ============ */}
  <section id="research" style={{padding: '100px 0', borderTop: '1px dashed rgba(36,50,84,0.5)', background: 'rgba(5,20,36,0.8)'}}>
    <div className="container">
      <div className="section-label">Deep Storage — Research Record</div>
      <h2 className="section-title">Before production systems:<br />first principles, in the lab.</h2>
      <p className="section-subtitle">Research at Jacobs University Bremen — where the habit of understanding models from the mathematics up was formed.</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 48}}>
        <div className="research-card">
          <div className="hud-corner hud-tl" />
          <div className="research-label">MINDS Research Group</div>
          <h3 className="research-title">Bachelor Thesis — Neural Architectures</h3>
          <p style={{margin: '0 auto', textAlign: 'center', fontSize: 14, color: '#9aa5bd'}}>Six-month comparison of recurrent neural networks vs. echo state networks on protein secondary-structure prediction. Implemented the <b style={{color: '#d4e4fa'}}>first attempt at training a bidirectional echo state network</b> — proving it could match state-of-the-art performance with a fraction of the resources.</p>
          <div className="research-tech">Echo State Networks · Python · TensorFlow</div>
        </div>
        <div className="research-card">
          <div className="hud-corner hud-tr" />
          <div className="research-label">rasdaman GmbH</div>
          <h3 className="research-title">Array Databases for Satellites</h3>
          <p style={{margin: '0 auto', textAlign: 'center', fontSize: 14, color: '#9aa5bd'}}>Installed and optimised the rasdaman array-DBMS on an Arduino platform <b style={{color: '#d4e4fa'}}>later used inside a satellite</b> — making a full database engine run on radically constrained hardware.</p>
          <div className="research-tech">C++ · Docker · Unix · Raspbian</div>
        </div>
        <div className="research-card">
          <div className="hud-corner hud-bl" />
          <div className="research-label">KWARC Research Group</div>
          <h3 className="research-title">MathWebSearch — Semantic AI</h3>
          <p style={{margin: '0 auto', textAlign: 'center', fontSize: 14, color: '#9aa5bd'}}>Worked on a search engine for mathematical formulas: integrated the GAP mathematical representation and guaranteed translatability into the group's semantic meta-language. AI from the <b style={{color: '#d4e4fa'}}>symbolic, semantic-modelling perspective</b> — the other half of the field.</p>
          <div className="research-tech">C++ · JavaScript · MathML · GAP · ElasticSearch</div>
        </div>
        <div className="research-card">
          <div className="hud-corner hud-br" />
          <div className="research-label">Jacobs Robotics</div>
          <h3 className="research-title">Underwater Robot Control</h3>
          <p style={{margin: '0 auto', textAlign: 'center', fontSize: 14, color: '#9aa5bd'}}>Developed the engine-control system for a self-driving underwater robot — <b style={{color: '#d4e4fa'}}>fusing autonomous routing with live operator guidance</b> into a single control signal.</p>
          <div className="research-tech">Control Systems · Robotics</div>
        </div>
      </div>
    </div>
  </section>
  {/* ============ EDUCATION & HONORS ============ */}
  <section id="education" style={{padding: '100px 0', borderTop: '1px dashed rgba(36,50,84,0.5)', background: 'rgba(5,20,36,0.9)'}}>
    <div className="container">
      <div className="section-label">Foundational Layers</div>
      <h2 className="section-title">The paper trail.</h2>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 48}}>
        <div className="edu-card">
          <div className="hud-corner hud-tl" />
          <h3 className="edu-card-title">Education</h3>
          <ul>
            <li className="edu-item"><b className="edu-item-title">BSc, Computer Science</b><span className="edu-item-detail">Jacobs University Bremen · 2015–2018</span></li>
            <li className="edu-item"><b className="edu-item-title">National High School of Computer Science "Tudor Vianu"</b><span className="edu-item-detail">Bucharest · 2011–2015</span></li>
            <li className="edu-item" style={{borderBottom: 'none'}}><b className="edu-item-title">Teaching Assistant</b><span className="edu-item-detail">Computer Networks · Data Visualization · C Lab — Jacobs University, 2017–2018</span></li>
          </ul>
        </div>
        <div className="edu-card">
          <div className="hud-corner hud-tr" />
          <h3 className="edu-card-title">Honors &amp; Awards</h3>
          <ul>
            <li className="edu-item"><b className="edu-item-title">INTEL ISEF</b><span className="edu-item-detail">International Science and Engineering Fair</span></li>
            <li className="edu-item"><b className="edu-item-title">NASA Space Settlement Design Contest</b><span className="edu-item-detail">national-level engineering competition</span></li>
            <li className="edu-item"><b className="edu-item-title">Young Inventors Project Olympiad</b><span className="edu-item-detail">invention &amp; engineering olympiad</span></li>
            <li className="edu-item" style={{borderBottom: 'none'}}><b className="edu-item-title">Jacobs Hack 2015 · TechCrunch Hackathon</b><span className="edu-item-detail">hackathon awards</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* ============ SKILLS ============ */}
  <section id="skills" style={{padding: '100px 0', borderTop: '1px dashed rgba(36,50,84,0.5)'}}>
    <div className="container">
      <div className="section-label">System Loadout</div>
      <h2 className="section-title">Skills, and where each one was earned.</h2>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 48}}>
        <div className="skill-module">
          <div className="skill-module-id">MOD_01</div>
          <h3 style={{margin: '0 auto 6px', textAlign: 'center', fontSize: 16, fontWeight: 600, fontFamily: '"IBM Plex Mono",monospace'}}>Machine Learning &amp; AI Engineering</h3>
          <div style={{fontSize: 13, color: '#5f6c8c', marginBottom: 16, fontStyle: 'italic'}}>Earned at Amazon, sporttotal.tv, CrossEngage, MINDS — training models that ran in production, not notebooks.</div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8}}>
            <span className="tech-chip">Computer Vision</span>
            <span className="tech-chip">Object Detection &amp; Tracking</span>
            <span className="tech-chip">Pose Detection</span>
            <span className="tech-chip">Predictive Models</span>
            <span className="tech-chip">Echo State Networks</span>
            <span className="tech-chip">LLM Systems</span>
            <span className="tech-chip">TensorFlow</span>
            <span className="tech-chip">Python</span>
          </div>
        </div>
        <div className="skill-module">
          <div className="skill-module-id">MOD_02</div>
          <h3 style={{margin: '0 auto 6px', textAlign: 'center', fontSize: 16, fontWeight: 600, fontFamily: '"IBM Plex Mono",monospace'}}>Infrastructure &amp; MLOps</h3>
          <div style={{fontSize: 13, color: '#5f6c8c', marginBottom: 16, fontStyle: 'italic'}}>Earned re-architecting AWS services at Amazon and scaling Sorcova from 2 VMs to compliant distributed microservices.</div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8}}>
            <span className="tech-chip">AWS Architecture</span>
            <span className="tech-chip">OVH</span>
            <span className="tech-chip">Microservices</span>
            <span className="tech-chip">Private TLS Tunnels</span>
            <span className="tech-chip">Docker</span>
            <span className="tech-chip">Real-Time Inference</span>
            <span className="tech-chip">Data Pipelines</span>
            <span className="tech-chip">ElasticSearch</span>
          </div>
        </div>
        <div className="skill-module">
          <div className="skill-module-id">MOD_03</div>
          <h3 style={{margin: '0 auto 6px', textAlign: 'center', fontSize: 16, fontWeight: 600, fontFamily: '"IBM Plex Mono",monospace'}}>Software Engineering</h3>
          <div style={{fontSize: 13, color: '#5f6c8c', marginBottom: 16, fontStyle: 'italic'}}>Earned across full-stack work at Twitter, Java-to-Scala migrations at Amazon, and C++ research systems.</div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8}}>
            <span className="tech-chip">Scala</span>
            <span className="tech-chip">Java</span>
            <span className="tech-chip">C/C++</span>
            <span className="tech-chip">JavaScript</span>
            <span className="tech-chip">React</span>
            <span className="tech-chip">REST Services</span>
            <span className="tech-chip">Ruby</span>
            <span className="tech-chip">SQL</span>
          </div>
        </div>
        <div className="skill-module">
          <div className="skill-module-id">MOD_04</div>
          <h3 style={{margin: '0 0 6px', fontSize: 16, fontWeight: 600, fontFamily: '"IBM Plex Mono",monospace'}}>Leadership &amp; Compliance</h3>
          <div style={{fontSize: 13, color: '#5f6c8c', marginBottom: 16, fontStyle: 'italic'}}>Earned hiring and leading teams of up to 10, resolving a post-acquisition standoff, and taking a medical platform to MDR-track compliance.</div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8}}>
            <span className="tech-chip">Team Building &amp; Hiring</span>
            <span className="tech-chip">GDPR</span>
            <span className="tech-chip">EU MDR</span>
            <span className="tech-chip">EU AI Act</span>
            <span className="tech-chip">ISO 27001</span>
            <span className="tech-chip">Stakeholder Management</span>
            <span className="tech-chip">Technical Interviewing</span>
            <span className="tech-chip">Mentoring</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============ FINAL CTA ============ */}
  <section id="cta" style={{textAlign: 'center', padding: '120px 0', borderTop: '1px dashed rgba(36,50,84,0.5)', position: 'relative'}}>
    <div style={{position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', fontFamily: '"IBM Plex Mono"', fontSize: 10, color: 'rgba(246,106,46,0.6)', letterSpacing: '0.2em'}}>END_OF_RECORD</div>
    <div className="container">
      <h2 style={{textAlign: 'center', fontSize: 'clamp(32px,4.6vw,54px)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: '1.12', maxWidth: 880, margin: '0 auto 20px'}}>This is the experience behind<br />the Anti-Failure Engine.</h2>
      <p style={{textAlign: 'center', color: '#9aa5bd', maxWidth: 640, margin: '0 auto 40px', fontSize: 17}}>Every framework in the AI Integration Workshop — the PRIME Filter, the CTO Veto, the pre-mortems — was paid for in production incidents, failed pivots, and systems that had to keep running. That's the point.</p>
      <a className="nav-btn-exp cta-workshop-btn" href="index.html#workshop">See the Workshop It Built →</a>
      <div style={{marginTop: 48, fontFamily: '"IBM Plex Mono",monospace', fontSize: 14, color: '#9aa5bd', display: 'flex', justifyContent: 'center', gap: '14px 40px', flexWrap: 'wrap'}}>
        <span>✉ <a data-email="alex|sapiema.com" style={{color: '#d4e4fa', textDecoration: 'none', borderBottom: '1px dashed #243254', paddingBottom: 2}}>loading...</a></span>
      </div>
    </div>
  </section>
</main>

); }
export const metadata = { title: 'Experience Dossier | Alexandru Glontaru', description: 'Detailed project and engineering experience.' };
