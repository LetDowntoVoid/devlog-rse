import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="VWRSE | Devlog"
      description="A devlog for Void's thoughts and progress on RSE"
    >
      <main style={{padding: "4rem", maxWidth: "800px", margin: "0 auto"}}>
        <h1>VWRSE | Devlog</h1>
        <p>
          This is just a dev log — a place to collect Void's thoughts and blogs
          on how he will work on RSE. Nothing fancy, no fluff, just updates.
        </p>
      </main>
    </Layout>
  );
}
