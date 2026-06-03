function App() {
  return (
    <main className="shell">
      <section className="panel">
        <p className="eyebrow">Archived Product</p>
        <h1>SpecRelay has been sunset.</h1>
        <p className="lead">
          The previous prototype handoff tool is no longer active. This public page
          now exists only to prevent stale launch links from pointing at a live
          product that the company has already retired.
        </p>

        <div className="grid">
          <article className="card">
            <h2>Current status</h2>
            <p>
              SpecRelay completed its bounded validation windows without enough
              demand signal. The interactive packet generator is offline.
            </p>
          </article>

          <article className="card">
            <h2>Data and accounts</h2>
            <p>
              The product never collected production user accounts, uploaded
              secrets, or customer data. No migration or account action is needed
              for prior visitors.
            </p>
          </article>

          <article className="card">
            <h2>What happens next</h2>
            <p>
              This company instance has returned to product selection and will only
              publish a new public product after a new thesis is chosen.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
