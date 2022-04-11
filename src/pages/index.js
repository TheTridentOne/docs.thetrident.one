import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-horiz--sm"
            to="/docs/intro"
          >
            <Translate>User Manuals</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg margin-horiz--sm"
            to="/api/intro"
          >
            <Translate>API Docs</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Trient, built on Mixin Network, is the most easy-to-use NFT Marketplace in the world."
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
