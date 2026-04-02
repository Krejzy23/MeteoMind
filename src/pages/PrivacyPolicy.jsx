export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-slate-400">Last updated: March 2026</p>

        <Section title="1. Introduction">
          MeteoMind ("we", "our", "us") respects your privacy. This Privacy
          Policy explains how we collect, use, and protect your information when
          you use our mobile application.
        </Section>

        <Section title="2. Data We Collect">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Symptom data (e.g. migraine, headache, nausea, dizziness, joint
              pain, fatigue)
            </li>
            <li>Symptom intensity, notes, and timestamps</li>
            <li>Atmospheric pressure values linked to entries</li>
            <li>
              Location data (precise or approximate, used for weather accuracy)
            </li>
            <li>Technical data (crash logs, performance diagnostics)</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          We use your data to:
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Provide current and forecasted weather and pressure data</li>
            <li>Analyze symptom patterns</li>
            <li>Generate personalized risk insights and predictions</li>
            <li>Improve app performance and reliability</li>
          </ul>
        </Section>

        <Section title="4. Legal Basis (GDPR)">
          If you are located in the European Economic Area (EEA), we process
          your data based on:
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Your consent (Article 6(1)(a))</li>
            <li>
              Legitimate interest in improving and operating the app (Article
              6(1)(f))
            </li>
          </ul>
        </Section>

        <Section title="5. Firebase Services">
          MeteoMind uses Firebase (Google LLC) for:
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Authentication (if enabled)</li>
            <li>Cloud Firestore database (data storage)</li>
            <li>Crash reporting and performance monitoring</li>
          </ul>
          Data may be processed on servers located in the EU or United States.
        </Section>

        <Section title="6. Data Storage & Security">
          Your data is securely stored using industry-standard practices. We
          take reasonable measures to protect your data from unauthorized
          access, loss, or misuse.
        </Section>

        <Section title="7. Data Sharing">
          We do not sell, rent, or share your personal or health-related data
          with third parties for advertising or marketing purposes.
        </Section>

        <Section title="8. Your Rights (GDPR)">
          You have the right to:
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Request data portability</li>
          </ul>
        </Section>

        <Section title="9. Data Retention">
          We retain your data only as long as necessary to provide app
          functionality. You may delete your data at any time by removing
          entries or uninstalling the app.
        </Section>

        <Section title="10. Children’s Privacy">
          MeteoMind is not intended for children under 13. We do not knowingly
          collect data from children.
        </Section>

        <Section title="11. Changes to This Policy">
          We may update this Privacy Policy from time to time. Changes will be
          reflected with an updated "Last updated" date.
        </Section>

        <Section title="12. Contact">
          If you have any questions about this Privacy Policy, contact us at:
          <br />
          <span className="text-cyan-300">ales.krejzl@gmail.com</span>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 text-slate-300 leading-7">{children}</div>
    </div>
  );
}
