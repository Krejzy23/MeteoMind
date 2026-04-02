export default function TermsOfUse() {
    return (
      <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="mt-2 text-slate-400">Last updated: March 2026</p>
  
          <Section title="1. Acceptance of Terms">
            By using MeteoMind, you agree to these Terms of Use. If you do not agree, please do not use the application.
          </Section>
  
          <Section title="2. Description of Service">
            MeteoMind provides tools for tracking symptoms, monitoring atmospheric pressure, and generating insights based on weather data and user input.
          </Section>
  
          <Section title="3. No Medical Advice">
            MeteoMind is not a medical device and does not provide medical advice. All insights and predictions are informational only and should not be used as a substitute for professional medical consultation.
          </Section>
  
          <Section title="4. User Responsibilities">
            You agree to:
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Provide accurate data where applicable</li>
              <li>Use the app only for lawful purposes</li>
              <li>Not attempt to disrupt or misuse the service</li>
            </ul>
          </Section>
  
          <Section title="5. Data and Privacy">
            Your use of MeteoMind is also governed by our Privacy Policy. Please review it to understand how your data is handled.
          </Section>
  
          <Section title="6. Intellectual Property">
            All content, design, and functionality of MeteoMind are owned by us and protected by applicable laws. You may not copy or redistribute without permission.
          </Section>
  
          <Section title="7. Limitation of Liability">
            To the maximum extent permitted by law, MeteoMind shall not be liable for any indirect, incidental, or consequential damages arising from the use of the app.
          </Section>
  
          <Section title="8. Availability">
            We do not guarantee uninterrupted availability of the app and may modify or discontinue features at any time.
          </Section>
  
          <Section title="9. Termination">
            We reserve the right to suspend or terminate access to the app if these terms are violated.
          </Section>
  
          <Section title="10. EU Consumer Rights">
            If you are located in the EU, you are entitled to rights under applicable consumer protection laws, including transparency, fairness, and access to your data.
          </Section>
  
          <Section title="11. Changes to Terms">
            We may update these Terms of Use from time to time. Continued use of the app means you accept the updated terms.
          </Section>
  
          <Section title="12. Contact">
            If you have questions, contact us at:
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
  