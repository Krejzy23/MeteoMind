export default function DeleteAccount() {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold">Delete Account & Data</h1>
          <p className="mt-2 text-slate-400">Last updated: March 2026</p>
  
          <Section title="1. Account and Data Deletion">
            MeteoMind allows users to request deletion of their account and
            associated data. This page explains how to delete your data and what
            happens after a deletion request.
          </Section>
  
          <Section title="2. Delete Data Directly in the App">
            You can delete your symptom entries directly inside the app:
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Open MeteoMind</li>
              <li>Go to Settings</li>
              <li>Select <strong>Delete all entries</strong></li>
            </ul>
            This removes your stored symptom entries and related weather-linked
            records from your account.
          </Section>
  
          <Section title="3. Request Full Account Deletion">
            If you want your full account and all associated data to be deleted,
            please send a request to:
            <br />
            <span className="text-cyan-300">ales.krejzl@gmail.com</span>
            <p className="mt-3">
              Please use the subject line:
              <br />
              <span className="text-cyan-300">
                Delete my MeteoMind account
              </span>
            </p>
          </Section>
  
          <Section title="4. What Data Will Be Deleted">
            When an account deletion request is completed, the following data will
            be deleted:
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Account information associated with MeteoMind</li>
              <li>Symptom entries and notes</li>
              <li>Stored weather-linked entry data</li>
              <li>User settings stored for the app</li>
            </ul>
          </Section>
  
          <Section title="5. What Data May Be Retained">
            Some limited data may be retained temporarily if required for:
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>legal compliance</li>
              <li>security and fraud prevention</li>
              <li>backup recovery windows</li>
            </ul>
            Such retained data is minimized and removed as soon as reasonably
            possible.
          </Section>
  
          <Section title="6. Deletion Timeline">
            We aim to process deletion requests within 7 days. In some cases,
            limited technical or backup data may persist for up to 30 days before
            permanent removal.
          </Section>
  
          <Section title="7. Delete Specific Data Without Deleting Your Account">
            MeteoMind also allows you to remove some or all symptom entries
            without deleting your account by using the in-app data deletion
            options in Settings.
          </Section>
  
          <Section title="8. Contact">
            If you have any questions about account or data deletion, contact:
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
        <div className="mt-3 leading-7 text-slate-300">{children}</div>
      </div>
    );
  }