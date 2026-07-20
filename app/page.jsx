export default function Home() {
  return (
    <main id="home" style={{ position: 'relative', zIndex: 1 }}>
      {/* ================= HERO ================= */}
      <section className="hero" style={{ minHeight: 'calc(100vh - 67px)', display: 'flex', flexDirection: 'column', padding: 'clamp(10px, 2vh, 60px) 0', position: 'sticky', top: 0, zIndex: 0, background: '#050f24' }}>
        <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(246,106,46,0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(36,50,84,0.4) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
        <canvas id="neuralCanvas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: '.4' }} />
        {/* <div className="sys-label">SYSTEM_LOG // 01_HERO</div> */}
        <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(10px, 2vh, 34px)' }}>
            <div className="status-badge" style={{ padding: 'clamp(8px, 1.5vh, 12px) clamp(12px, 2vw, 20px)', fontSize: 'clamp(10px, 1.2vh, 12px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="pulse-dot" />
                <b style={{ color: '#f66a2e', fontWeight: 600 }}>ALEXANDRU GLONTARU</b>
              </div>
              <span className="status-separator" style={{ color: '#5f6c8c' }}>—</span>
              <div className="title-stack">
                <span>AI ENGINEER</span>
                <span className="dot-sep" style={{ color: '#5f6c8c' }}>·</span>
                <span>FRACTIONAL CTO</span>
                <span className="dot-sep" style={{ color: '#5f6c8c' }}>·</span>
                <span>FOUNDER &amp; CEO</span>
                <b style={{ color: '#f66a2e', fontWeight: 600 }}>SAPIEMA</b>
              </div>
            </div>
          </div>
          <h1 style={{ margin: '0 auto', textAlign: 'center', fontSize: 'clamp(32px, min(6vw, 7vh), 86px)', fontWeight: 700, lineHeight: '1.02', letterSpacing: '-0.03em', maxWidth: 980 }}>Stop <span style={{ color: '#5f6c8c', textDecoration: 'line-through 4px #ff5c5c' }}>Hallucinating</span> Your AI Strategy.<br /><span style={{ color: '#f66a2e' }}>Start Engineering It.</span></h1>
          <div style={{ margin: 'clamp(12px, 3vh, 36px) auto clamp(16px, 4vh, 48px)', textAlign: 'center', maxWidth: 1040, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(12px, 2vh, 32px)' }}>
            <div style={{ flex: '1 1 300px', maxWidth: 400, background: 'rgba(7,16,35,0.4)', border: '1px solid rgba(36,50,84,0.4)', borderRadius: 8, padding: 'clamp(12px, 2vh, 24px)', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: 'clamp(12px,min(1.4vw, 1.6vh),17px)', color: '#9aa5bd', lineHeight: '1.5', margin: 0 }}>
                <span style={{ color: '#f66a2e', fontFamily: '"IBM Plex Mono",monospace', fontSize: 'clamp(11px, 1.4vh, 13px)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 'clamp(4px, 1vh, 8px)' }}>The Reality</span>
                80% of corporate AI projects fail inside sandbox playgrounds.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', maxWidth: 400, background: 'rgba(7,16,35,0.4)', border: '1px solid rgba(36,50,84,0.4)', borderRadius: 8, padding: 'clamp(12px, 2vh, 24px)', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: 'clamp(12px,min(1.4vw, 1.6vh),17px)', color: '#9aa5bd', lineHeight: '1.5', margin: 0 }}>
                <span style={{ color: '#f66a2e', fontFamily: '"IBM Plex Mono",monospace', fontSize: 'clamp(11px, 1.4vh, 13px)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 'clamp(4px, 1vh, 8px)' }}>The Stance</span>
                Zero hype. Just hard software physics enforced by a Fractional CTO.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', maxWidth: 400, background: 'rgba(7,16,35,0.4)', border: '1px solid rgba(36,50,84,0.4)', borderRadius: 8, padding: 'clamp(12px, 2vh, 24px)', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: 'clamp(12px,min(1.4vw, 1.6vh),17px)', color: '#9aa5bd', lineHeight: '1.5', margin: 0 }}>
                <span style={{ color: '#f66a2e', fontFamily: '"IBM Plex Mono",monospace', fontSize: 'clamp(11px, 1.4vh, 13px)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 'clamp(4px, 1vh, 8px)' }}>The 4-Hour Payoff</span>
                A forensic workflow audit locking down 2–3 shippable, 90-day pilot charters.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(8px, 1.5vw, 16px)', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 'clamp(16px, 4vh, 64px)' }}>
            <a href="#show_me" className="btn-primary hero-cta-primary" style={{ padding: 'clamp(10px, 1.5vh, 13px) clamp(16px, 2vw, 24px)', fontSize: 'clamp(11px, 1.4vh, 13px)' }}><span>Run the Reality Check</span></a>
            <a href="#help_me" className="btn-secondary hero-cta-secondary" style={{ padding: 'clamp(10px, 1.5vh, 13px) clamp(16px, 2vw, 24px)', fontSize: 'clamp(11px, 1.4vh, 13px)' }}>Talk to an Engineer</a>
          </div>
          <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 'clamp(10px, 1.3vh, 12px)', letterSpacing: '.18em', textTransform: 'uppercase', color: '#5f6c8c', textAlign: 'center', marginBottom: 'clamp(12px, 2.5vh, 24px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <span style={{ height: 1, width: 40, background: 'rgba(95,108,140,0.3)' }} />BRANDS THAT TRUST ME<span style={{ height: 1, width: 40, background: 'rgba(95,108,140,0.3)' }} />
          </div>
          <div className="logo-strip" style={{ marginBottom: 'clamp(16px, 4vh, 64px)', gap: 'clamp(12px, 2vh, 20px) clamp(24px, 4vw, 56px)' }}>
            <img src="/logos/sapiema.png" alt="Sapiema" title="Sapiema" className="logo-img logo-fix-png" style={{ maxHeight: 'clamp(30px, 5vh, 50px)' }} />
            <img src="/logos/fi.png" alt="Founder Institute" title="Founder Institute" className="logo-img logo-fix-png" style={{ maxHeight: 'clamp(30px, 5vh, 50px)' }} />
            <img src="/logos/twitter-x.png" alt="X / Twitter" title="X / Twitter" className="logo-img logo-fix-png" style={{ maxHeight: 'clamp(30px, 5vh, 50px)' }} />
            <img src="/logos/amazon.png" alt="Amazon" title="Amazon" className="logo-img logo-fix-png" style={{ maxHeight: 'clamp(30px, 5vh, 50px)' }} />
            <img src="/logos/google.png" alt="Google" title="Google" className="logo-img logo-fix-png" style={{ maxHeight: 'clamp(30px, 5vh, 50px)' }} />
            <img src="/logos/sporttotal.png" alt="Sporttotal" title="Sporttotal" className="logo-img logo-fix-png" style={{ maxHeight: 'clamp(30px, 5vh, 50px)' }} />
            <img src="/logos/crossengage.png" alt="CrossEngage" title="CrossEngage" className="logo-img logo-fix-png" style={{ maxHeight: 'clamp(30px, 5vh, 50px)' }} />
            <img src="/logos/sorcova_health.png" alt="Sorcova Health" title="Sorcova Health" className="logo-img logo-fix-png" style={{ maxHeight: 'clamp(30px, 5vh, 50px)' }} />
          </div>
        </div>
      </section>
      {/* ================= THE COLD HARD MATH ================= */}
      <section id="math" className="section" style={{ background: 'linear-gradient(to bottom, #050f24, #08142a)', position: 'relative', zIndex: 2 }}>
        <div className="section-divider-top" />
        <div className="sys-label">SYS_MODULE // 02_MATH</div>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 18 }}><span style={{ width: 28, height: 1, background: '#f66a2e', boxShadow: '0 0 4px #f66a2e' }} />The Cold Hard Math</div>
          <h2 className="section-title">Everyone has adopted.<br />Almost no one is winning.</h2>
          {/* Stats Grid */}
          <div className="stat-grid" style={{ margin: '56px 0 46px' }}>
            {/* 80.3% */}
            <div className="sys-module" style={{ padding: '40px 38px' }}>
              <div className="hud-corner hud-tl" />
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                <div className="stat-number">80.3<span className="unit">%</span></div>
                <span className="stat-label">FAILURE RATE</span>
              </div>
              <div className="stat-bar"><div className="stat-bar-fill red" style={{ width: '80.3%' }} /></div>
              <p style={{ margin: '16px 0 0', color: '#9aa5bd', fontSize: 15 }}>of AI projects <b style={{ color: '#fafbf7' }}>fail to deliver any measurable business value</b> because of misaligned purpose and lack of clear definition up-front.</p>
              <span className="stat-source">&gt;&gt; RAND Corporation, 2025</span>
            </div>
            {/* $340,000 */}
            <div className="sys-module" style={{ padding: '40px 38px' }}>
              <div className="hud-corner hud-tr" />
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                <div className="stat-number"><span className="unit">$</span>340,000</div>
                <span className="stat-label">BURNED / PILOT</span>
              </div>
              <div className="stat-bar"><div className="stat-bar-fill orange" style={{ width: '64%' }} /></div>
              <p style={{ margin: '16px 0 0', color: '#9aa5bd', fontSize: 15 }}>is the average direct budget <b style={{ color: '#fafbf7' }}>burned on a single failed pilot</b> before reaching production.</p>
              <span className="stat-source">&gt;&gt; Applied R&amp;D Waste Index</span>
            </div>
            {/* 21% */}
            <div className="sys-module" style={{ padding: '40px 38px' }}>
              <div className="hud-corner hud-bl" />
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                <div className="stat-number">21<span className="unit">%</span></div>
                <span className="stat-label">SEE CLEAR ROI</span>
              </div>
              <div className="stat-bar"><div className="stat-bar-fill orange" style={{ width: '21%' }} /></div>
              <p style={{ margin: '16px 0 0', color: '#9aa5bd', fontSize: 15 }}><b style={{ color: '#fafbf7' }}>Only 21% of mid-market executives</b> see clear, measurable ROI from their deployed systems. The issue isn't the AI; it's buying tools instead of building integrated workflows.</p>
              <span className="stat-source">&gt;&gt; Deloitte, 2026</span>
            </div>
            {/* 60% */}
            <div className="sys-module" style={{ padding: '40px 38px' }}>
              <div className="hud-corner hud-br" />
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                <div className="stat-number">60<span className="unit">%</span></div>
                <span className="stat-label">ABANDONED</span>
              </div>
              <div className="stat-bar"><div className="stat-bar-fill red" style={{ width: '60%' }} /></div>
              <p style={{ margin: '16px 0 0', color: '#9aa5bd', fontSize: 15 }}>of mid-market AI projects are <b style={{ color: '#fafbf7' }}>abandoned mid-build</b> due to inadequate, un-reconciled data foundations across legacy CRM and ERP platforms.</p>
              <span className="stat-source">&gt;&gt; Gartner, 2026</span>
            </div>
          </div>
          <p style={{ margin: '0 auto', textAlign: 'center', fontSize: 'clamp(19px,2.4vw,26px)', fontWeight: 500, lineHeight: '1.45', maxWidth: 820, color: '#fafbf7' }}>You are not behind. You are simply running the wrong playbook. <em style={{ color: '#f66a2e', fontStyle: 'normal' }}>The problem isn't the AI models; it's the organization trying to absorb them.</em></p>
          {/* Innovation Pipeline */}
          <div className="sys-module" style={{ marginTop: 80, padding: '38px 42px' }}>
            <div className="hud-corner hud-tl" /><div className="hud-corner hud-tr" />
            <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: '#5f6c8c', marginBottom: 28, display: 'flex', justifyContent: 'space-between' }}>
              <span>The Operating Model — Innovation, Managed Like Engineering</span>
              <span style={{ color: '#f66a2e', animation: 'blink 2s steps(1) infinite' }}>[PIPELINE_ACTIVE]</span>
            </div>
            <div className="pipeline">
              {/* Step 1 */}
              <div>
                <a href="#show_me" className="pipeline-step active" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="pipeline-label active" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>STEP 1 · DIAGNOSE</span>
                    <span style={{ background: '#f66a2e', color: '#050f24', padding: '0 4px', borderRadius: 1 }}>[READY]</span>
                  </div>
                  <div className="pipeline-title">"Show Me"</div>
                  <div className="pipeline-desc">The 4-hour AI Integration Workshop</div>
                </a>
              </div>
              <div className="pipeline-connector active" />
              {/* Step 2 */}
              <div>
                <a href="#help_me" className="pipeline-step pipeline-step-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="pipeline-label">STEP 2 · GOVERN</div>
                  <div className="pipeline-title">"Help Me"</div>
                  <div className="pipeline-desc">Fractional CTO &amp; specialist advisory</div>
                </a>
              </div>
              <div className="pipeline-connector" />
              {/* Step 3 */}
              <div>
                <a href="#do_it_for_me" className="pipeline-step pipeline-step-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="pipeline-label">STEP 3 · SHIP</div>
                  <div className="pipeline-title">"Do It For Me"</div>
                  <div className="pipeline-desc">Sapiema custom build &amp; integration</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WORKSHOP ================= */}
      <section id="show_me" className="section" style={{ background: 'linear-gradient(180deg, #08142a, #050f24)', borderTop: '1px solid #182342' }}>
        <div className="sys-label">SYS_MODULE // 03_WORKSHOP</div>
        <div className="container">
          <div className="step-badge">STEP 1 — "SHOW ME"</div>
          <h2 className="section-title" style={{ color: '#fafbf7' }}>The AI Integration Workshop</h2>
          <p className="section-subtitle">A 4-Hour Anti-Failure Engine for Your Executive Team.</p>
          <p style={{ fontSize: '17.5px', color: '#9aa5bd', maxWidth: 800, margin: '22px auto 54px', textAlign: 'center' }}>A highly structured, fast-paced, remote-first session designed to <b style={{ color: '#fafbf7' }}>veto unbuildable ideas</b>, isolate your most valuable unused data, and spec out <b style={{ color: '#fafbf7' }}>2 to 3 launch-ready pilots</b> with fixed 90-day caps.</p>
          {/* Before / During / After */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginBottom: 60 }}>
            <div className="sys-module" style={{ flex: '1 1 280px', maxWidth: 400, padding: 28 }}>
              <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 11, color: '#5f6c8c', letterSpacing: '0.16em', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 4, height: 4, background: '#5f6c8c', borderRadius: '50%' }} />BEFORE — CALIBRATION</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, color: '#fafbf7' }}>Company-wide friction survey</h3>
              <p style={{ margin: 0, fontSize: 14, color: '#9aa5bd' }}>A 5-minute survey maps adoption, AI fluency, biggest issues, and organisational readiness — so the session starts calibrated, <b style={{ color: '#fafbf7', fontWeight: 600 }}>not cold</b>.</p>
            </div>
            <div className="sys-module" style={{ flex: '1 1 280px', maxWidth: 400, padding: 28, borderColor: 'rgba(246,106,46,0.5)', boxShadow: 'inset 0 0 20px rgba(246,106,46,0.05)' }}>
              <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
              <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 11, color: '#f66a2e', letterSpacing: '0.16em', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 4, height: 4, background: '#f66a2e', borderRadius: '50%', boxShadow: '0 0 5px #f66a2e' }} />THE SESSION — 4 HOURS</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, color: '#fafbf7' }}>Hands-on. Not a lecture.</h3>
              <p style={{ margin: 0, fontSize: 14, color: '#9aa5bd' }}>Your executive team works through <b style={{ color: '#fafbf7', fontWeight: 600 }}>divergent brainstorming and execution planning</b> — on a live board, not slides. Remote-first, fast-paced.</p>
            </div>
            <div className="sys-module" style={{ flex: '1 1 280px', maxWidth: 400, padding: 28 }}>
              <div style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: 11, color: '#5f6c8c', letterSpacing: '0.16em', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 4, height: 4, background: '#5f6c8c', borderRadius: '50%' }} />AFTER — WITHIN 1 WEEK</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, color: '#fafbf7' }}>Blueprint + leadership debrief</h3>
              <p style={{ margin: 0, fontSize: 14, color: '#9aa5bd' }}>Your <b style={{ color: '#fafbf7', fontWeight: 600 }}>AI Integration Blueprint</b> lands within a week — closed out with a 1-hour leadership debrief and alignment session.</p>
            </div>
          </div>
          {/* 4-Hour Agenda */}
          <div className="sys-module" style={{ padding: '40px 42px', marginBottom: 24 }}>
            <div className="hud-corner hud-tl" />
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 10 }}>
              <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#fafbf7', display: 'flex', alignItems: 'center', gap: 12 }}>Inside the 4 hours</h3>
              <span style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: '11.5px', letterSpacing: '0.14em', color: '#f66a2e' }}>7 PHASES · ZERO THEORY-ONLY BLOCKS</span>
            </div>
            <p style={{ margin: '0 auto 30px', textAlign: 'center', fontSize: 15, color: '#9aa5bd', maxWidth: 760 }}>A tightly sequenced working session — each phase produces an artifact the next one builds on.</p>
            <div className="phase-grid">
              <div className="phase-cell"><div className="phase-seq">SEQ_01</div><div className="phase-number">01</div><div className="phase-name">AI Fluency &amp; Mental Models</div></div>
              <div className="phase-cell"><div className="phase-seq">SEQ_02</div><div className="phase-number">02</div><div className="phase-name">Physics of Shippable AI</div></div>
              <div className="phase-cell"><div className="phase-seq">SEQ_03</div><div className="phase-number">03</div><div className="phase-name">Systematic Opportunity Discovery</div></div>
              <div className="phase-cell"><div className="phase-seq">SEQ_04</div><div className="phase-number">04</div><div className="phase-name">AI Readiness Audit</div></div>
              <div className="phase-cell"><div className="phase-seq">SEQ_05</div><div className="phase-number">05</div><div className="phase-name">Engineering Reality Check</div></div>
              <div className="phase-cell"><div className="phase-seq">SEQ_06</div><div className="phase-number">06</div><div className="phase-name">Execution Architecture</div></div>
              <div className="phase-cell" style={{ borderRight: 'none' }}><div className="phase-seq">SEQ_07</div><div className="phase-number">07</div><div className="phase-name">Debrief &amp; Next Steps</div></div>
            </div>
          </div>
          {/* 35+ exercises callout */}
          <div style={{ borderRadius: 2, background: 'rgba(246,106,46,0.1)', border: '1px solid #f66a2e', color: '#f66a2e', padding: '18px 28px', marginBottom: 60, fontFamily: '"IBM Plex Mono",monospace', fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', textAlign: 'center', boxShadow: 'inset 0 0 20px rgba(246,106,46,0.1)' }}>
            <span className="blink-cursor" style={{ marginRight: 10 }} />35+ EXERCISES IN 4 HOURS — THAT'S A DECISION ROUGHLY EVERY 7 MINUTES.
          </div>
          {/* Miro Board Peek */}
          <div className="sys-module" style={{ border: '1px dashed #243254', borderRadius: 4, padding: '40px 42px 46px', marginBottom: 60, backgroundImage: 'radial-gradient(rgba(36,50,84,0.5) 1px,transparent 1px)', backgroundSize: '22px 22px' }}>
            <div className="hud-corner hud-tr" />
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
              <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#fafbf7' }}>A look inside the working board</h3>
              <span style={{ fontFamily: '"IBM Plex Mono",monospace', fontSize: '11.5px', letterSpacing: '0.14em', color: '#5f6c8c' }}>REAL EXERCISES · NOT A MOCKUP</span>
            </div>
            <p style={{ margin: '0 auto 32px', textAlign: 'center', fontSize: 15, color: '#9aa5bd', maxWidth: 760 }}>Every idea your team generates gets built, sorted, challenged, and scored on a shared board — in the room, by your people. A sample of what you'll actually do:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18 }}>
              <div className="sticky-note yellow" style={{ transform: 'rotate(-1.6deg)' }}><div className="sticky-note-title">THE ARCHETYPE SCAN</div><div className="sticky-note-body">2+ concrete opportunities per AI archetype, inside <i>your</i> company. Minimum 10 ideas on the wall.</div></div>
              <div className="sticky-note green" style={{ transform: 'rotate(1.2deg)' }}><div className="sticky-note-title">PAIN INVENTORY</div><div className="sticky-note-body">Your 5 most painful, repetitive tasks — each turned into "An AI [archetype] could…"</div></div>
              <div className="sticky-note yellow" style={{ transform: 'rotate(.8deg)' }}><div className="sticky-note-title">PROCESS DECOMPOSITION SPRINT</div><div className="sticky-note-body">One real process, broken into atomic steps — each scored for AI fit, risk, and data availability.</div></div>
              <div className="sticky-note pink" style={{ transform: 'rotate(-1deg)' }}><div className="sticky-note-title">THE OPPORTUNITY SORTER</div><div className="sticky-note-body">Sort every idea into Viable / Depends / Wishful — then compare and debate the results.</div></div>
              <div className="sticky-note green" style={{ transform: 'rotate(1.8deg)' }}><div className="sticky-note-title">SILENT GALLERY WALK</div><div className="sticky-note-body">Read everyone's decompositions, challenge them with stickies: excites me / I'd challenge this / new injection point.</div></div>
              <div className="sticky-note pink" style={{ transform: 'rotate(-.7deg)' }}><div className="sticky-note-title">THE DATA TREASURE MAP</div><div className="sticky-note-body">Your 3 most data-rich systems — and what you could be learning from them, but aren't.</div></div>
            </div>
          </div>
          {/* Frameworks */}
          <div className="section-label"><span style={{ width: 28, height: 1, background: '#f66a2e', boxShadow: '0 0 4px #f66a2e' }} />The frameworks doing the filtering</div>
          <div className="framework-grid" style={{ marginBottom: 60 }}>
            <div className="sys-module framework-card" style={{ padding: '32px 30px' }}>
              <div className="framework-label">FRAMEWORK 01</div>
              <h3 style={{ margin: '0 0 10px', fontSize: 20, fontWeight: 600, color: '#fafbf7' }}>The <span style={{ color: '#f66a2e' }}>PRIME</span> Filter</h3>
              <p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>We score every potential AI idea across <b style={{ color: '#fafbf7', fontWeight: 600 }}>P</b>rocess stability, <b style={{ color: '#fafbf7', fontWeight: 600 }}>R</b>esource availability, <b style={{ color: '#fafbf7', fontWeight: 600 }}>I</b>mpact multiplier, <b style={{ color: '#fafbf7', fontWeight: 600 }}>M</b>anual toil reduction, and <b style={{ color: '#fafbf7', fontWeight: 600 }}>E</b>xpansion potential.</p>
            </div>
            <div className="sys-module framework-card" style={{ padding: '32px 30px' }}>
              <div className="framework-label">FRAMEWORK 02</div>
              <h3 style={{ margin: '0 0 10px', fontSize: 20, fontWeight: 600, color: '#fafbf7' }}>The <span style={{ color: '#f66a2e' }}>5-Question</span> CTO Veto</h3>
              <p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>We force sponsors to define <b style={{ color: '#fafbf7', fontWeight: 600 }}>Scope, Data density, Measurement metrics, Liability Risk,</b> and named executive <b style={{ color: '#fafbf7', fontWeight: 600 }}>Sponsorship</b> — <i>before</i> writing a single line of code.</p>
            </div>
            <div className="sys-module framework-card" style={{ padding: '32px 30px' }}>
              <div className="framework-label">FRAMEWORK 03</div>
              <h3 style={{ margin: '0 0 10px', fontSize: 20, fontWeight: 600, color: '#fafbf7' }}>The <span style={{ color: '#f66a2e' }}>4 V's</span> &amp; Data Gravity Audit</h3>
              <p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>We audit where your data actually lives (<b style={{ color: '#fafbf7', fontWeight: 600 }}>Volume, Velocity, Variety, Veracity</b>) to stop the GIGO (Garbage In, Garbage Out) Loop. We reconcile the 3 to 5 core databases that actually run your business.</p>
            </div>
            <div className="sys-module framework-card" style={{ padding: '32px 30px' }}>
              <div className="framework-label">FRAMEWORK 04</div>
              <h3 style={{ margin: '0 0 10px', fontSize: 20, fontWeight: 600, color: '#fafbf7' }}>Forensic <span style={{ color: '#f66a2e' }}>Pre-Mortems</span></h3>
              <p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>We write the failure story of your pilots <b style={{ color: '#fafbf7', fontWeight: 600 }}>in the past tense</b> before spending your budget, building systemic tripwires directly into the roadmap.</p>
            </div>
          </div>
          {/* AI is not just ChatGPT */}
          <div className="sys-module" style={{ borderLeft: '3px solid #f66a2e', borderRadius: '0 4px 4px 0', padding: '34px 36px', marginBottom: 60 }}>
            <h3 style={{ margin: '0 0 10px', fontSize: 21, color: '#fafbf7' }}><span style={{ color: '#f66a2e' }}>"</span>AI is not just ChatGPT.<span style={{ color: '#f66a2e' }}>"</span></h3>
            <p style={{ margin: '0 auto', textAlign: 'center', color: '#9aa5bd', fontSize: '15.5px', maxWidth: 860 }}>We break down the <b style={{ color: '#fafbf7' }}>5 distinct AI capability families</b> — and show you why mid-market profitability almost always lives in Analytical and Predictive models, <b style={{ color: '#fafbf7' }}>not expensive LLM wrappers.</b></p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
              <span className="ai-chip highlighted">Analytical AI</span>
              <span className="ai-chip highlighted">Predictive AI</span>
              <span className="ai-chip default">Generative AI</span>
              <span className="ai-chip default">Optimization AI</span>
              <span className="ai-chip default">Autonomous Agents</span>
            </div>
          </div>
          {/* Blueprint */}
          <div className="sys-module blueprint-card" style={{ marginBottom: 44 }}>
            <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
            <div>
              <h3 style={{ margin: '0 0 12px', fontSize: 26 }}>The AI Integration Blueprint<span style={{ fontFamily: '"IBM Plex Mono",monospace', color: '#f66a2e', fontSize: '0.55em', verticalAlign: 'middle', letterSpacing: '0.14em', marginLeft: 10, textShadow: '0 0 5px rgba(246,106,46,0.3)' }}>THE CROWN JEWEL</span></h3>
              <p style={{ margin: 0, color: '#9aa5bd', fontSize: '15.5px' }}>Your actionable strategy, delivered <b style={{ color: '#fafbf7' }}>within one week</b> of the workshop — and closed out with a <b style={{ color: '#fafbf7' }}>1-hour leadership debrief and alignment session</b>. Board-ready, budget-capped, owner-named.</p>
            </div>
            <div className="blueprint-list">
              <b style={{ color: '#f66a2e', fontWeight: 600 }}>›</b> The 90-day PoC Charter — your top 2–3 pilots, fully specified, hard budget caps<br />
              <b style={{ color: '#f66a2e', fontWeight: 600 }}>›</b> The AI Integration Strategy — how your data &amp; architecture must evolve<br />
              <b style={{ color: '#f66a2e', fontWeight: 600 }}>›</b> The Consolidated Day — Opportunity Wall, Readiness Audit, Pre-Mortems with tripwires<br />
              <b style={{ color: '#f66a2e', fontWeight: 600 }}>›</b> The 12-month roadmap — connecting pilots to a scaling strategy
            </div>
          </div>
          <a href="#cta" className="btn-primary"><span>Apply for a Workshop Date →</span></a>
        </div>
      </section>
      {/* ================= FRACTIONAL CTO ================= */}
      <section id="help_me" className="section" style={{ background: 'linear-gradient(to bottom, #050f24, #08142a)' }}>
        <div className="section-divider-top" />
        <div className="sys-label">SYS_MODULE // 04_FRACTIONAL</div>
        <div className="container">
          <div className="step-badge">STEP 2 — "HELP ME"</div>
          <h2 className="section-title" style={{ color: '#fafbf7' }}>Fractional CTO &amp; Specialist Advisory</h2>
          <p className="section-subtitle">Bridging the gap between corporate vision and software physics.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 50, alignItems: 'center', textAlign: 'center', marginTop: 34 }}>
            <div style={{ fontSize: '16.5px', color: '#9aa5bd' }}>
              <span style={{ fontSize: 19, color: '#fafbf7', fontWeight: 500, marginBottom: 18, display: 'block' }}>If you already have software developers but lack senior deep-tech leadership, I step in as your Fractional CTO.</span>
              I don't manage standard IT; I architect the <b style={{ color: '#fafbf7' }}>technical and commercial gravity</b> of your AI systems.
              <div style={{ marginTop: 34 }}><a href="#cta" className="btn-outline">Discuss Fractional Advisory →</a></div>
            </div>
            <ul className="advisory-list">
              <li><span className="advisory-num">01 /</span><div><b style={{ color: '#fafbf7', display: 'block', fontSize: 16, marginBottom: 3 }}>Architectural Guardrails</b><p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>Ensuring compliance with GDPR, the EU AI Act, and ISO clinical/security standards.</p></div></li>
              <li><span className="advisory-num">02 /</span><div><b style={{ color: '#fafbf7', display: 'block', fontSize: 16, marginBottom: 3 }}>Model-First vs. Platform-First Decisions</b><p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>Determining where to use lightweight open-source models vs. expensive foundational APIs.</p></div></li>
              <li style={{ borderBottom: 'none' }}><span className="advisory-num">03 /</span><div><b style={{ color: '#fafbf7', display: 'block', fontSize: 16, marginBottom: 3 }}>Innovation Risk Mitigation</b><p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>Managing your deep-tech R&amp;D from initial concept to high-scale production, avoiding sandbox stagnation.</p></div></li>
            </ul>
          </div>
        </div>
      </section>
      {/* ================= SAPIEMA BUILD ================= */}
      <section id="do_it_for_me" className="section" style={{ background: 'linear-gradient(to bottom, #08142a, #050f24)' }}>
        <div className="section-divider-top" />
        <div className="sys-label">SYS_MODULE // 05_BUILD</div>
        <div className="container">
          <div className="step-badge">STEP 3 — "DO IT FOR ME"</div>
          <h2 className="section-title" style={{ color: '#fafbf7' }}>Sapiema Custom Build</h2>
          <p className="section-subtitle">We don't just write strategy. We ship production-grade code.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 50, alignItems: 'center', textAlign: 'center', marginTop: 34 }}>
            <div style={{ fontSize: '16.5px', color: '#9aa5bd' }}>
              <span style={{ fontSize: 19, color: '#fafbf7', fontWeight: 500, marginBottom: 18, display: 'block' }}>Once your 90-day pilots are mapped, the execution gap becomes explicit.</span>
              Most companies lack specialized, deep-tech AI engineers capable of building secure, low-latency pipelines. Under <b style={{ color: '#fafbf7' }}>Sapiema</b>, our dedicated team of software specialists takes over the entire technical execution.
              <div style={{ marginTop: 34 }}><a href="https://sapiema.com" target="_blank" rel="noopener" className="btn-outline">Explore Sapiema's Custom Build Capabilities →</a></div>
            </div>
            <div className="sys-module" style={{ padding: '24px 32px' }}>
              <div className="hud-corner hud-tl" />
              <ul className="advisory-list">
                <li style={{ padding: '16px 0' }}><span className="advisory-num">01 /</span><div><b style={{ color: '#fafbf7', display: 'block', fontSize: 16, marginBottom: 3 }}>Custom Pipeline Engineering</b><p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>Designing custom analytical, predictive, optimization, and agentic AI models.</p></div></li>
                <li style={{ padding: '16px 0' }}><span className="advisory-num">02 /</span><div><b style={{ color: '#fafbf7', display: 'block', fontSize: 16, marginBottom: 3 }}>Database Array &amp; MLOps Infrastructure</b><p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>Constructing robust, secure data lakes and MLOps platforms with 99.9% uptime.</p></div></li>
                <li style={{ padding: '16px 0', borderBottom: 'none' }}><span className="advisory-num">03 /</span><div><b style={{ color: '#fafbf7', display: 'block', fontSize: 16, marginBottom: 3 }}>System Integration</b><p style={{ margin: 0, fontSize: '14.5px', color: '#9aa5bd' }}>Integrating custom models seamlessly into your existing ERP, CRM, or legacy software stack without operational downtime.</p></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ================= BIO / EXPERIENCE ================= */}
      <section id="about_me" className="section" style={{ background: 'linear-gradient(to bottom, #050f24, #08142a)' }}>
        <div className="section-divider-top" />
        <div className="sys-label">SYS_MODULE // 06_BIO</div>
        <div className="container">
          <div className="section-label">The Reality Check</div>
          <h2 className="section-title">Designed by an Engineer,<br />Not a Consultant.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 34, gap: 40 }}>
            {/* Headshot */}
            <div className="sys-module" style={{ padding: 16, width: '100%', maxWidth: 380 }}>
              <div className="hud-corner hud-tl" /><div className="hud-corner hud-br" />
              <div style={{ border: '1px solid #243254', borderRadius: 2, background: 'rgba(5,10,20,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <img src="/headshot.png" alt="Alexandru Glontaru" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
            {/* Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <p style={{ fontSize: 18, color: '#fafbf7', fontWeight: 500, margin: '20px auto 44px', maxWidth: 640 }}>I spent my career designing and scaling global infrastructure for systems handling millions of operations per second. <em style={{ color: '#f66a2e', fontStyle: 'normal' }}>I don't sell slides; I build software physics.</em></p>
              <ul className="timeline" style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
                <li className="timeline-item">
                  <span className="timeline-dot glow" />
                  <div className="timeline-company">Amazon</div>
                  <b style={{ fontSize: '16.5px', color: '#fafbf7' }}>Software Development Engineer</b>
                  <p style={{ fontSize: '14.5px', color: '#9aa5bd', margin: '4px 0 0', maxWidth: 600 }}>Re-architected AWS media content-moderation systems, boosting automation to <b style={{ color: '#fafbf7' }}>80%</b> while handling millions of requests per day at millisecond latency.</p>
                </li>
                <li className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-company">X / Twitter</div>
                  <b style={{ fontSize: '16.5px', color: '#fafbf7' }}>Ads Experience Engineer</b>
                  <p style={{ fontSize: '14.5px', color: '#9aa5bd', margin: '4px 0 0', maxWidth: 600 }}>Designed ad-creator tools that increased advertiser platform engagement by over <b style={{ color: '#fafbf7' }}>30%</b>.</p>
                </li>
                <li className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-company">Sorcova Health</div>
                  <b style={{ fontSize: '16.5px', color: '#fafbf7' }}>Fractional CTO</b>
                  <p style={{ fontSize: '14.5px', color: '#9aa5bd', margin: '4px 0 0', maxWidth: 600 }}>Scaled a distributed preventive health system from a basic telemedicine prototype to a robust, compliant platform, closing a <b style={{ color: '#fafbf7' }}>€1M corporate contract</b> over 4 years.</p>
                </li>
                <li className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-company">SportTotal.tv</div>
                  <b style={{ fontSize: '16.5px', color: '#fafbf7' }}>Senior AI Engineer</b>
                  <p style={{ fontSize: '14.5px', color: '#9aa5bd', margin: '4px 0 0', maxWidth: 600 }}>Trained computer-vision systems deployed across hundreds of physical sports fields to automatically track play and stream live sports.</p>
                </li>
                <li className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-company">Research &amp; Academia</div>
                  <b style={{ fontSize: '16.5px', color: '#fafbf7' }}>MINDS Research Group · rasdaman</b>
                  <p style={{ fontSize: '14.5px', color: '#9aa5bd', margin: '4px 0 0', maxWidth: 600 }}>Developed Recurrent Neural Network configurations and optimized array databases for satellite deployment.</p>
                </li>
              </ul>
              <a href="experience" className="btn-secondary" style={{ marginTop: 8 }}>Read My Full Engineering Dossier →</a>
            </div>
          </div>
        </div>
      </section>
      {/* ================= DISQUALIFICATION ================= */}
      <section id="filter" className="section" style={{ background: 'linear-gradient(to bottom, #08142a, #050f24)' }}>
        <div className="section-divider-top" />
        <div className="sys-label">SYS_MODULE // 07_FILTER</div>
        <div className="container">
          <div className="section-label">Aggressive Disqualification</div>
          <h2 className="section-title">I'd rather tell you to skip it<br />than sell you the wrong thing.</h2>
          <div className="disqualify-grid" style={{ marginTop: 52 }}>
            {/* NOT for you */}
            <div className="sys-module disqualify-card reject">
              <div className="hud-corner hud-tl" style={{ borderColor: 'rgba(255,92,92,.6)' }} />
              <h3 className="disqualify-title reject">✕ This is NOT for you if:</h3>
              <ul>
                <li className="disqualify-item"><span className="disqualify-icon reject">✕</span><span>You want <b style={{ color: '#fafbf7', fontWeight: 600 }}>basic technical training</b> (prompt engineering, standard API wrappers).</span></li>
                <li className="disqualify-item"><span className="disqualify-icon reject">✕</span><span>You expect AI to fix <b style={{ color: '#fafbf7', fontWeight: 600 }}>undefined internal process chaos</b>.</span></li>
                <li className="disqualify-item"><span className="disqualify-icon reject">✕</span><span>You just want a slide-deck to <b style={{ color: '#fafbf7', fontWeight: 600 }}>tick a board-member's AI box</b>.</span></li>
                <li className="disqualify-item" style={{ borderBottom: 'none' }}><span className="disqualify-icon reject">✕</span><span>Your company has <b style={{ color: '#fafbf7', fontWeight: 600 }}>no product-market fit</b> or data volume to mine.</span></li>
              </ul>
            </div>
            {/* IS for you */}
            <div className="sys-module disqualify-card accept">
              <div className="hud-corner hud-tr" />
              <h3 className="disqualify-title accept">✓ This IS for you if:</h3>
              <ul>
                <li className="disqualify-item"><span className="disqualify-icon accept">✓</span><span>You have <b style={{ color: '#fafbf7', fontWeight: 600 }}>real operations, real data, and real friction</b> to solve.</span></li>
                <li className="disqualify-item"><span className="disqualify-icon accept">✓</span><span>Your budget is flowing, but your <b style={{ color: '#fafbf7', fontWeight: 600 }}>measurable results aren't</b>.</span></li>
                <li className="disqualify-item"><span className="disqualify-icon accept">✓</span><span>You want <b style={{ color: '#fafbf7', fontWeight: 600 }}>brutal engineering truth</b>, not a fancy vendor pitch.</span></li>
                <li className="disqualify-item" style={{ borderBottom: 'none' }}><span className="disqualify-icon accept">✓</span><span>You are ready to assign <b style={{ color: '#fafbf7', fontWeight: 600 }}>named owners</b>, set strict <b style={{ color: '#fafbf7', fontWeight: 600 }}>30/60/90 gates</b>, and kill weak projects.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FINAL CTA ================= */}
      <section id="cta" style={{ textAlign: 'center', padding: '130px 0', position: 'relative', zIndex: 2, backgroundColor: '#050f24', backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 100%,rgba(246,106,46,.15),transparent)' }}>
        <div className="section-divider-top" />
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '1.12', maxWidth: 900, margin: '0 auto 22px' }}>Let's Build a Plan<br />That Outlives the Hype.</h2>
          <div className="cta-steps">
            <span className="cta-step">01 Agree on a date <span style={{ color: '#f66a2e' }}>→</span></span>
            <span className="cta-step">02 Sign a mutual NDA <span style={{ color: '#f66a2e' }}>→</span></span>
            <span className="cta-step">03 Take the 5-minute friction survey <span style={{ color: '#f66a2e' }}>→</span></span>
            <span className="cta-step">04 Secure your roadmap</span>
          </div>
          <a href="https://calendar.app.google/DvDV5wZNfq7xbDoM7" className="btn-primary" target="_blank" rel="noopener noreferrer"><span>Schedule Your 30-Minutes Call →</span></a>
          <div className="cta-contact">
            <span>✉ <a href="mailto:alex@sapiema.com" style={{ color: '#fafbf7', textDecoration: 'none', borderBottom: '1px dashed #243254', paddingBottom: 2, transition: '0.2s' }}>alex@sapiema.com</a></span>
            <span>☏ <a href="tel:+4917676503499" style={{ color: '#fafbf7', textDecoration: 'none', borderBottom: '1px dashed #243254', paddingBottom: 2, transition: '0.2s' }}>+49 176 76503499</a></span>
            <span>in <a href="https://www.linkedin.com/in/aglontaru/" target="_blank" rel="noopener noreferrer" style={{ color: '#fafbf7', textDecoration: 'none', borderBottom: '1px dashed #243254', paddingBottom: 2, transition: '0.2s' }}>LinkedIn</a></span>
          </div>
        </div>
      </section>
    </main>

  );
}
export const metadata = { title: 'Alexandru Glontaru — AI Engineer · Fractional CTO · Sapiema', description: 'Stop hallucinating your AI strategy. Start engineering it. Alexandru Glontaru — AI Engineer, Fractional CTO, and Founder of Sapiema.' };
