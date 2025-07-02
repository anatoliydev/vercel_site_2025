import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Anatolii 🍽️"
      description="Персональний сайт про харчування, сервіси та магазини"
    >
      <main style={{textAlign: 'center', marginTop: '3rem'}}>
        <h1>Ласкаво просимо!</h1>
        <p>Оберіть розділ:</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap'}}>
          <Link className="button button--primary button--lg" to="/docs/eating/">
            Eating 🍽️
          </Link>
          <Link className="button button--primary button--lg" to="/docs/services/">
            Мої сервіси
          </Link>
        </div>
      </main>
    </Layout>
  );
}
