export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Blood Pressure Medication{' '}
          <span className="text-[#58a6ff]">Effectiveness</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log BP readings, medication timing, and side effects to identify optimal dosing patterns and improve your treatment outcomes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Tracking — $7/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[['BP Readings', 'Log systolic & diastolic with timestamps'],['Medication Log', 'Track doses, timing, and missed medications'],['Side Effects', 'Record symptoms to share with your doctor']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold mb-1">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {['Unlimited BP readings','Medication schedule tracking','Side effect logging','Trend charts & insights','Export data as CSV','Share reports with doctor'].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            ['How does BP Tracker help me?', 'It correlates your blood pressure readings with medication timing so you and your doctor can see exactly how well your treatment is working and when your medication is most effective.'],
            ['Can I share data with my doctor?', 'Yes. You can export your readings and medication logs as a CSV or generate a shareable report to bring to your next appointment.'],
            ['Is my health data secure?', 'All data is encrypted in transit and at rest. We never sell your personal health information to third parties.']
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} BP Tracker. All rights reserved.
      </footer>
    </main>
  )
}
