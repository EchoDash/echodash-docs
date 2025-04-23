import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

interface Release {
  id: number;
  name: string;
  tag_name: string;
  html_url: string;
  published_at: string;
  body: string;
}

export default function GitHubReleases(): JSX.Element {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {siteConfig} = useDocusaurusContext();
  const githubToken = siteConfig.customFields?.githubToken as string || '';

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        setLoading(true);
        const headers = githubToken 
          ? { Authorization: `token ${githubToken}` }
          : {};
          
        const response = await axios.get(
          'https://api.github.com/repos/EchoDash/echodash-mvp/releases',
          { headers }
        );
        
        setReleases(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub releases:', err);
        setError('Failed to load releases. Please ensure you have the correct GitHub token configured.');
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, [githubToken]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatBody = (body: string) => {
    if (!body) return '';
    
    return body
      // Normalize line endings
      .replace(/\r\n/g, '\n')
      
      // Handle lists (both - and *)
      .replace(/^[\s]*[*-][\s]+(.+)$/gm, '<li>$1</li>')
      // Wrap consecutive list items in ul and remove empty lines between them
      .replace(/(<li>.*<\/li>\n*)+/g, (match) => {
        return '<ul>' + match.replace(/\n+/g, '\n') + '</ul>';
      })
      
      // Handle headings
      .replace(/### (.*)\n/g, '<h4>$1</h4>\n')
      .replace(/## (.*)\n/g, '<h3>$1</h3>\n')
      .replace(/# (.*)\n/g, '<h2>$1</h2>\n')
      
      // Handle paragraphs, but skip lines that are part of lists or headers
      .replace(/^(?!<[hul])[^\n].+$/gm, '<p>$&</p>')
      
      // Handle links - exclude GitHub links
      .replace(/\[(.*?)\]\((.*?)\)/g, (match, text, url) => {
        if (url.includes('github.com')) {
          return text;
        }
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      })
      
      // Clean up
      .replace(/<p>\s*<\/p>/g, '')
      .replace(/\n+/g, '\n');
  };

  if (loading) {
    return (
      <div className={styles.releasesWrapper}>
        <Heading as="h1">Releases</Heading>
        <p>Loading releases...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.releasesWrapper}>
        <Heading as="h1">Releases</Heading>
        <div className={styles.error}>
          {error}
          <div className={styles.errorHelp}>
            Make sure you have set up a GitHub personal access token with the 'repo' scope.
          </div>
        </div>
      </div>
    );
  }

  if (releases.length === 0) {
    return (
      <div className={styles.releasesWrapper}>
        <Heading as="h1">Releases</Heading>
        <p>No releases found.</p>
      </div>
    );
  }

  return (
    <div className={styles.releasesWrapper}>
      <Heading as="h1">Releases</Heading>
      <div className={styles.releasesList}>
        {releases.map((release) => (
          <div key={release.id} className={styles.releaseItem}>
            <Heading as="h2" className={styles.releaseTitle}>
              <Link
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {release.name || release.tag_name}
              </Link>
            </Heading>
            
            <div className={styles.releaseInfo}>
              <span className={styles.releaseTag}>{release.tag_name}</span>
              <span className={styles.releaseDate}>
                Released on {formatDate(release.published_at)}
              </span>
            </div>
            
            <div 
              className={styles.releaseBody}
              dangerouslySetInnerHTML={{ __html: formatBody(release.body) }}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 