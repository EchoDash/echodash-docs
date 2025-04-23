import React from 'react';
import Layout from '@theme/Layout';
import GitHubReleases from '../components/GitHubReleases';

export default function ReleasesPage(): JSX.Element {
  return (
    <Layout
      title="EchoDash Releases"
      description="View the latest releases and updates for EchoDash"
    >
      <main className="container margin-vert--lg">
        <GitHubReleases />
      </main>
    </Layout>
  );
} 