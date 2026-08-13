import { useState } from 'react'

const LOGO = '/src/imports/FB0FEC38-91C0-43C6-859E-E50C02378BD6.jpeg'

const BLUE = '#1b4fd8'
const BLUE_DARK = '#1440b0'
const GREEN = '#2ab52a'
const GRAY6 = '#495057'
const GRAY8 = '#212529'

const NAV_LINKS = [
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Trabalhamos', href: '#como-trabalhamos' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
]

const SERVICES = [
  { title: 'Limpeza Fina Pós-Obra', desc: 'Limpeza detalhada para entrega e finalização do imóvel, com cuidado máximo nos acabamentos.' },
  { title: 'Limpeza Pós-Reforma', desc: 'Remoção completa de poeira, resíduos e sujidades provenientes de reformas.' },
  { title: 'Limpeza Grossa Pós-Obra', desc: 'Preparação inicial dos ambientes para as etapas seguintes de limpeza.' },
  { title: 'Entrega de Empreendimentos', desc: 'Apartamentos, áreas comuns, decorados e espaços de apresentação.' },
  { title: 'Comercial e Industrial', desc: 'Serviços personalizados de acordo com a estrutura e necessidade de cada operação.' },
  { title: 'Vidros e Esquadrias', desc: 'Higienização e acabamento de vidros, caixilhos, trilhos e esquadrias.' },
  { title: 'Pisos e Revestimentos', desc: 'Tratamento adequado para porcelanatos, cerâmicas e demais superfícies.' },
  { title: 'Ambientes Detalhados', desc: 'Móveis planejados, portas, rodapés, luminárias, metais, louças e acabamentos.' },
]

const STEPS = [
  { num: '01', title: 'Visita e Avaliação', desc: 'Avaliamos o imóvel e identificamos as necessidades.' },
  { num: '02', title: 'Orçamento', desc: 'Proposta detalhada, transparente e sem surpresas.' },
  { num: '03', title: 'Planejamento', desc: 'Definimos equipe, cronograma e materiais.' },
  { num: '04', title: 'Execução', desc: 'Limpeza com equipe capacitada e equipamentos profissionais.' },
  { num: '05', title: 'Revisão', desc: 'Verificamos cada detalhe junto ao cliente.' },
  { num: '06', title: 'Entrega Final', desc: 'Ambiente limpo, valorizado e pronto para uso.' },
]

const BLOG_POSTS = [
  { tag: 'Dicas', title: 'Como preparar seu imóvel para a limpeza pós-obra', excerpt: 'Entenda as etapas essenciais antes de iniciar a limpeza e como organizar o acesso da equipe ao canteiro.', date: '08 Ago 2026' },
  { tag: 'Superfícies', title: 'Porcelanato vs. cerâmica: como limpar cada tipo corretamente', excerpt: 'Cada revestimento exige produtos e técnicas específicas. Saiba como preservar o brilho e a qualidade dos acabamentos.', date: '01 Ago 2026' },
  { tag: 'Equipamentos', title: 'Equipamentos que fazem a diferença na limpeza industrial', excerpt: 'Conheça as principais máquinas utilizadas em grandes obras e como elas garantem eficiência e segurança.', date: '22 Jul 2026' },
]

/* ── helpers ── */
function WaIcon({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.552 4.116 1.523 5.842L.057 23.43a.75.75 0 00.93.865l5.857-1.527A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.967 0-3.8-.533-5.375-1.46l-.385-.228-3.986 1.038 1.063-3.887-.25-.4A9.949 9.949 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="8" fill={GREEN} />
      <path d="M4.5 8l2.5 2.5 4-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Nav ── */
function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: '#fff', borderBottom: '1px solid #e9ecef', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#hero">
          <img src={LOGO} alt="LimpaPro" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
        </a>
        <nav className="hidden lg:flex" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 13.5, fontWeight: 500, color: GRAY6, textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = BLUE)}
              onMouseLeave={(e) => (e.currentTarget.style.color = GRAY6)}>
              {l.label}
            </a>
          ))}
          <a href="#orcamento" style={{ padding: '9px 20px', borderRadius: 6, backgroundColor: BLUE, color: '#fff', fontSize: 13.5, fontWeight: 600, textDecoration: 'none', transition: 'background 0.15s' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BLUE_DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BLUE)}>
            Solicitar Orçamento
          </a>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} aria-label="Menu">
          <svg width={22} height={16} viewBox="0 0 22 16" fill="none">
            <rect width="22" height="2" rx="1" fill={GRAY8} style={{ transform: open ? 'rotate(45deg) translate(0,7px)' : '', transformOrigin: 'center', transition: 'transform 0.2s' }} />
            <rect y="7" width="22" height="2" rx="1" fill={GRAY8} style={{ opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
            <rect y="14" width="22" height="2" rx="1" fill={GRAY8} style={{ transform: open ? 'rotate(-45deg) translate(0,-7px)' : '', transformOrigin: 'center', transition: 'transform 0.2s' }} />
          </svg>
        </button>
      </div>
      {open && (
        <div style={{ borderTop: '1px solid #e9ecef', padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: 14, backgroundColor: '#fff' }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 15, fontWeight: 500, color: GRAY6, textDecoration: 'none' }} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#orcamento" style={{ padding: '10px 20px', borderRadius: 6, backgroundColor: BLUE, color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center' }} onClick={() => setOpen(false)}>
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section id="hero" style={{ backgroundColor: '#f0f4ff', paddingTop: 64 }}>
      {/* Main hero row */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">
        {/* Left: text */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#dbeafe', borderRadius: 20, padding: '5px 14px', marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: GREEN, display: 'inline-block' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Limpeza Profissional Pós-Obra</span>
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 800, color: GRAY8, lineHeight: 1.15, marginBottom: 20 }}>
            Sua obra <span style={{ color: BLUE }}>limpa</span>,<br />
            valorizada e pronta<br />
            para <span style={{ color: GREEN }}>impressionar.</span>
          </h1>
          <p style={{ fontSize: 16, color: GRAY6, lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
            Equipe capacitada, produtos específicos e equipamentos profissionais para residências, empresas, construtoras e empreendimentos.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
            <a href="#orcamento" style={{ padding: '13px 28px', borderRadius: 6, backgroundColor: BLUE, color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: 'background 0.15s' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BLUE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BLUE)}>
              Solicitar Orçamento
            </a>
            <a href="https://wa.me/5519995699825" target="_blank" rel="noopener noreferrer"
              style={{ padding: '13px 24px', borderRadius: 6, backgroundColor: '#25D366', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <WaIcon size={18} color="#fff" /> WhatsApp
            </a>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Orçamento em 24h', 'Equipe capacitada', 'Sem surpresas no preço'].map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: GRAY6 }}>
                <CheckIcon /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: services card */}
        <div style={{ backgroundColor: '#fff', borderRadius: 16, padding: '28px 32px', boxShadow: '0 4px 32px rgba(27,79,216,0.10)', border: '1px solid #e0e8ff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: GRAY8 }}>Nossos Serviços</span>
            <span style={{ fontSize: 12, color: BLUE, fontWeight: 600 }}>8 tipos</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Limpeza Fina Pós-Obra',
              'Limpeza Pós-Reforma',
              'Limpeza Grossa',
              'Entrega de Empreendimentos',
              'Comercial e Industrial',
              'Vidros e Esquadrias',
              'Pisos e Revestimentos',
              'Ambientes Detalhados',
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 8, backgroundColor: i % 2 === 0 ? '#f8faff' : '#fff', border: '1px solid #edf0ff' }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: BLUE }} />
                </div>
                <span style={{ fontSize: 13.5, fontWeight: 500, color: GRAY8 }}>{s}</span>
              </div>
            ))}
          </div>
          <a href="#servicos" style={{ display: 'block', marginTop: 18, textAlign: 'center', fontSize: 13, fontWeight: 600, color: BLUE, textDecoration: 'none' }}>
            Ver detalhes de cada serviço →
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ borderTop: '1px solid #dce8ff', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0 }}>
          {[
            { n: '500+', l: 'Obras entregues' },
            { n: '10+', l: 'Anos de experiência' },
            { n: '8', l: 'Tipos de serviço' },
            { n: '24h', l: 'Resposta ao orçamento' },
          ].map((s, i) => (
            <div key={i} style={{ flex: '1 1 160px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 20px', borderRight: i < 3 ? '1px solid #e9ecef' : 'none' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: BLUE }}>{s.n}</div>
              <div style={{ fontSize: 13, color: GRAY6, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Differentials strip */}
      <div style={{ backgroundColor: BLUE }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap' }}>
          {[
            { icon: '🏗️', title: 'Pós-obra & Reforma', desc: 'Do grão de cimento ao acabamento final.' },
            { icon: '🏢', title: 'Residencial e Comercial', desc: 'Para todos os portes e tipos de obra.' },
            { icon: '📋', title: 'Documentação completa', desc: 'Laudos, EPIs e conformidade NR.' },
            { icon: '⏱️', title: 'Cumprimento de prazos', desc: 'Integrado ao cronograma da sua obra.' },
          ].map((d, i) => (
            <div key={i} style={{ flex: '1 1 220px', display: 'flex', alignItems: 'flex-start', gap: 14, padding: '28px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
              <span style={{ fontSize: 22 }}>{d.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{d.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{d.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Quem Somos ── */
function QuemSomos() {
  return (
    <section id="quem-somos" style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="two-col">
        <div>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>Quem Somos</span>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: GRAY8, lineHeight: 1.2, marginBottom: 20 }}>
            Especialistas em<br />limpeza pós-obra
          </h2>
          <p style={{ fontSize: 15, color: GRAY6, lineHeight: 1.8, marginBottom: 16 }}>
            A <strong>LimpaPro</strong> é especializada em <strong>limpeza profissional pós-obra</strong>, oferecendo soluções para residências, empresas, construtoras e empreendimentos. Contamos com equipe capacitada, produtos específicos e equipamentos profissionais para realizar uma limpeza eficiente e cuidadosa, respeitando cada tipo de superfície e acabamento.
          </p>
          <p style={{ fontSize: 15, color: GRAY6, lineHeight: 1.8, marginBottom: 28 }}>
            Mais do que remover resíduos da obra, nosso trabalho é <strong>valorizar cada detalhe do ambiente</strong>, preparando o espaço para sua entrega e utilização.
          </p>
          <a href="#orcamento" style={{ display: 'inline-block', padding: '12px 24px', borderRadius: 6, backgroundColor: BLUE, color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Fale com a gente
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { title: 'Qualidade', desc: 'Processos rigorosos de verificação para garantir o melhor resultado em cada ambiente.' },
            { title: 'Organização', desc: 'Planejamento detalhado de cada etapa da limpeza, do início ao acabamento final.' },
            { title: 'Segurança', desc: 'Equipe treinada, EPIs adequados e conformidade com todas as normas regulamentadoras.' },
            { title: 'Cumprimento de prazos', desc: 'Execução integrada ao cronograma da obra, sem atrasos na sua entrega.' },
          ].map((v) => (
            <div key={v.title} style={{ display: 'flex', gap: 16, padding: '20px', borderRadius: 10, border: '1px solid #e9ecef', backgroundColor: '#f8f9fa' }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: BLUE }} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: GRAY8, marginBottom: 4 }}>{v.title}</div>
                <div style={{ fontSize: 13.5, color: GRAY6, lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Serviços ── */
function Servicos() {
  return (
    <section id="servicos" style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>Serviços</span>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: GRAY8, marginBottom: 12 }}>Soluções para cada etapa da sua obra</h2>
          <p style={{ fontSize: 15, color: GRAY6, maxWidth: 520, margin: '0 auto' }}>Atendemos residências, empresas, incorporadoras, construtoras, engenheiros e arquitetos.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ padding: '24px', borderRadius: 10, backgroundColor: '#fff', border: '1px solid #e9ecef', transition: 'box-shadow 0.2s, border-color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = '0 4px 16px rgba(27,79,216,0.1)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e9ecef'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: BLUE }} />
              </div>
              <h3 style={{ fontSize: 14.5, fontWeight: 700, color: GRAY8, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, color: GRAY6, lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Como Trabalhamos ── */
function ComoTrabalhamos() {
  return (
    <section id="como-trabalhamos" style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>Como Trabalhamos</span>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: GRAY8 }}>Do primeiro contato à entrega final</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 12 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ padding: '24px 20px', borderRadius: 10, backgroundColor: i === 0 || i === 5 ? BLUE : '#f8f9fa', border: `1px solid ${i === 0 || i === 5 ? BLUE : '#e9ecef'}`, position: 'relative' }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: i === 0 || i === 5 ? 'rgba(255,255,255,0.25)' : '#dce4f0', marginBottom: 12 }}>{s.num}</div>
              <h3 style={{ fontSize: 13.5, fontWeight: 700, color: i === 0 || i === 5 ? '#fff' : GRAY8, marginBottom: 6 }}>{s.title}</h3>
              <p style={{ fontSize: 12.5, color: i === 0 || i === 5 ? 'rgba(255,255,255,0.7)' : GRAY6, lineHeight: 1.6 }}>{s.desc}</p>
              {i < 5 && (
                <div style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, fontSize: 14, color: '#bbb' }} className="hidden lg:flex">›</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Empresas ── */
function Empresas() {
  return (
    <section id="empresas" style={{ padding: '80px 24px', backgroundColor: BLUE }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="two-col">
        <div>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#93c5fd', display: 'block', marginBottom: 16 }}>Para Empresas e Construtoras</span>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
            Estrutura para contratos maiores
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 12 }}>
            Atendemos incorporadoras, construtoras, engenheiros e arquitetos com equipes dimensionadas ao cronograma, documentação completa, EPIs e atendimento por etapas e medições.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 32 }}>
            Nossa capacidade operacional permite atender empreendimentos de qualquer porte, com planejamento integrado à sua equipe de obras.
          </p>
          <div style={{ display: 'flex', gap: 40, marginBottom: 36 }}>
            {[{ n: '80+', l: 'Parceiros construtores' }, { n: '200+', l: 'Empreendimentos' }].map((s) => (
              <div key={s.l}>
                <div style={{ fontSize: 30, fontWeight: 800, color: '#fff' }}>{s.n}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <a href="#orcamento" style={{ display: 'inline-block', padding: '13px 28px', borderRadius: 6, backgroundColor: GREEN, color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Falar com Especialista
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { icon: '👥', t: 'Equipes por etapa', d: 'Dimensionadas conforme o cronograma da obra.' },
            { icon: '📅', t: 'Cronograma integrado', d: 'Execução alinhada ao ritmo do canteiro.' },
            { icon: '📄', t: 'Documentação completa', d: 'Laudos e relatórios para entrega técnica.' },
            { icon: '🦺', t: 'EPIs e conformidade NR', d: 'Segurança garantida em todas as etapas.' },
            { icon: '🔧', t: 'Equipamentos profissionais', d: 'Maquinário específico para cada tipo de obra.' },
            { icon: '📊', t: 'Atendimento por medições', d: 'Transparência e controle por etapa executada.' },
          ].map((p) => (
            <div key={p.t} style={{ padding: '18px 16px', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ fontSize: 20, marginBottom: 8 }}>{p.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{p.t}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Parcerias ── */
function Parcerias() {
  return (
    <section id="parcerias" style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>Parcerias</span>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: GRAY8, marginBottom: 12 }}>Parceiros de engenheiros e arquitetos</h2>
          <p style={{ fontSize: 15, color: GRAY6, maxWidth: 500, margin: '0 auto' }}>Trabalhamos integrados ao seu projeto, respeitando cada especificação e detalhe de acabamento.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { icon: '⚙️', role: 'Engenheiros', desc: 'Integramos nossa execução ao cronograma da obra, com documentação que facilita a entrega técnica e laudos de conformidade.' },
            { icon: '📐', role: 'Arquitetos', desc: 'Respeitamos cada especificação de acabamento, materiais e superfícies. Tratamos o ambiente com o cuidado que seu projeto merece.' },
            { icon: '🏗️', role: 'Incorporadoras', desc: 'Estrutura completa para empreendimentos de qualquer porte, com equipes dimensionadas e atendimento por etapas e medições.' },
          ].map((p) => (
            <div key={p.role} style={{ padding: '28px', borderRadius: 10, backgroundColor: '#fff', border: '1px solid #e9ecef' }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: GRAY8, marginBottom: 10 }}>{p.role}</h3>
              <p style={{ fontSize: 14, color: GRAY6, lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Blog ── */
function Blog() {
  return (
    <section id="blog" style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>Blog</span>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: GRAY8 }}>Informação profissional para resultados melhores</h2>
          </div>
          <p style={{ fontSize: 14, color: GRAY6, maxWidth: 300 }}>Dicas e orientações sobre limpeza pós-obra para clientes e profissionais da construção.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {BLOG_POSTS.map((p, i) => (
            <article key={i} style={{ borderRadius: 10, border: '1px solid #e9ecef', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}>
              <div style={{ height: 6, backgroundColor: i === 0 ? GREEN : i === 1 ? BLUE : '#868e96' }} />
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: GREEN, backgroundColor: '#e6f7e6', padding: '3px 10px', borderRadius: 20 }}>{p.tag}</span>
                  <span style={{ fontSize: 12, color: GRAY6 }}>{p.date}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: GRAY8, marginBottom: 10, lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, color: GRAY6, lineHeight: 1.65, marginBottom: 16 }}>{p.excerpt}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: BLUE }}>Ler mais →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Orçamento ── */
function Orcamento() {
  const [form, setForm] = useState({ nome: '', telefone: '', cidade: '', tipo: '', metragem: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const sub = encodeURIComponent(`Orçamento - ${form.tipo} - ${form.cidade}`)
    const body = encodeURIComponent(`Nome: ${form.nome}\nTelefone: ${form.telefone}\nCidade: ${form.cidade}\nTipo: ${form.tipo}\nMetragem: ${form.metragem}\nMensagem: ${form.mensagem}`)
    window.location.href = `mailto:contato@limpapro.com.br?subject=${sub}&body=${body}`
    setSent(true)
  }

  const inputStyle: React.CSSProperties = { width: '100%', padding: '11px 14px', borderRadius: 6, border: '1px solid #ced4da', fontSize: 14, fontFamily: 'Inter, sans-serif', color: GRAY8, outline: 'none', backgroundColor: '#fff' }
  const labelStyle: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: GRAY8, marginBottom: 6, display: 'block' }

  return (
    <section id="orcamento" style={{ padding: '80px 24px', backgroundColor: '#f0f4ff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }} className="two-col">
        {/* left */}
        <div>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREEN, display: 'block', marginBottom: 12 }}>Orçamento Gratuito</span>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: GRAY8, lineHeight: 1.2, marginBottom: 16 }}>
            Solicite seu orçamento sem compromisso
          </h2>
          <p style={{ fontSize: 15, color: GRAY6, lineHeight: 1.8, marginBottom: 32 }}>
            Preencha o formulário ao lado e nossa equipe retorna em até 24 horas com uma proposta personalizada para sua obra.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '📞', label: 'WhatsApp', value: '(19) 99569-9825', href: 'https://wa.me/5519995699825' },
              { icon: '✉️', label: 'E-mail', value: 'contato@limpapro.com.br', href: 'mailto:contato@limpapro.com.br' },
              { icon: '⏱️', label: 'Atendimento', value: 'Segunda a Sexta — 07h às 21h', href: null },
            ].map((c) => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: GRAY6, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: 14, fontWeight: 600, color: BLUE, textDecoration: 'none' }}>{c.value}</a>
                  ) : (
                    <div style={{ fontSize: 14, fontWeight: 600, color: GRAY8 }}>{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right: form */}
        <div style={{ backgroundColor: '#fff', borderRadius: 16, padding: '36px', boxShadow: '0 4px 32px rgba(27,79,216,0.08)', border: '1px solid #e0e8ff' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: GRAY8, marginBottom: 8 }}>Mensagem enviada!</h3>
              <p style={{ fontSize: 15, color: GRAY6 }}>Abrimos seu e-mail com os dados preenchidos. Retornaremos em até 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: GRAY8, marginBottom: 4 }}>Preencha seus dados</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div><label style={labelStyle}>Nome completo</label><input name="nome" value={form.nome} onChange={handle} required style={inputStyle} placeholder="Seu nome" /></div>
                <div><label style={labelStyle}>WhatsApp / Telefone</label><input name="telefone" value={form.telefone} onChange={handle} required style={inputStyle} placeholder="(00) 00000-0000" /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div><label style={labelStyle}>Cidade</label><input name="cidade" value={form.cidade} onChange={handle} required style={inputStyle} placeholder="Sua cidade" /></div>
                <div>
                  <label style={labelStyle}>Tipo de imóvel / obra</label>
                  <select name="tipo" value={form.tipo} onChange={handle} required style={inputStyle}>
                    <option value="">Selecione…</option>
                    {['Residencial', 'Comercial', 'Industrial', 'Empreendimento / Incorporadora', 'Construtora', 'Outro'].map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div><label style={labelStyle}>Metragem aproximada (m²)</label><input name="metragem" value={form.metragem} onChange={handle} style={inputStyle} placeholder="Ex: 120 m²" /></div>
              <div><label style={labelStyle}>Detalhes da obra</label><textarea name="mensagem" value={form.mensagem} onChange={handle} rows={4} style={{ ...inputStyle, resize: 'none' }} placeholder="Descreva o tipo de limpeza, estágio da obra, prazo..." /></div>
              <button type="submit" style={{ padding: '14px', borderRadius: 6, backgroundColor: BLUE, color: '#fff', fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'background 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BLUE_DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BLUE)}>
                Enviar Solicitação
              </button>
              <p style={{ fontSize: 12, color: GRAY6, textAlign: 'center' }}>Retorno em até 24h. Dados utilizados apenas para contato.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ── Contato / Footer ── */
function Footer() {
  return (
    <footer id="contato" style={{ backgroundColor: GRAY8, color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 40px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 48 }} className="footer-grid">
        <div>
          <img src={LOGO} alt="LimpaPro" style={{ height: 48, width: 'auto', objectFit: 'contain', marginBottom: 16, filter: 'brightness(0) invert(1)' }} />
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 20 }}>
            Especialistas em limpeza profissional pós-obra para residências, empresas, construtoras e empreendimentos.
          </p>
          <a href="https://wa.me/5519995699825" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 6, backgroundColor: '#25D366', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            <WaIcon size={16} color="#fff" /> WhatsApp
          </a>
        </div>
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Contato</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
            <div>(19) 99569-9825</div>
            <div>contato@limpapro.com.br</div>
            <div>Seg–Sex, 07h às 21h</div>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Menu</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', maxWidth: 1200, margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
        <span>© 2026 LimpaPro. Todos os direitos reservados.</span>
        <span>Limpeza profissional pós-obra</span>
      </div>
    </footer>
  )
}

/* ── WhatsApp FAB ── */
function WaFab() {
  return (
    <a href="https://wa.me/5519995699825" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50, width: 52, height: 52, borderRadius: '50%', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: 'transform 0.2s' }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
      <WaIcon size={24} color="#fff" />
    </a>
  )
}

/* ── Responsive helpers ── */
function GlobalStyles() {
  return (
    <style>{`
      @media (max-width: 900px) {
        .hero-grid { grid-template-columns: 1fr !important; }
        .two-col { grid-template-columns: 1fr !important; }
        .footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  )
}

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <main style={{ paddingTop: 64 }}>
        <Hero />
        <QuemSomos />
        <Servicos />
        <ComoTrabalhamos />
        <Empresas />
        <Parcerias />
        <Blog />
        <Orcamento />
      </main>
      <Footer />
      <WaFab />
    </>
  )
}
