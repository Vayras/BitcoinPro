'use client'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './blogPost.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogPost() {
  const router = useRouter();
  const relatedPosts: RelatedPost[] = [
    {
      id: '1',
      title: 'Running a Bitcoin Full Node: Taking Back Your Financial Power',
      excerpt: 'Running your own Bitcoin full node is the most direct way to reclaim financial independence in a world of centralized intermediaries.',
      date: 'April 22, 2025'
    },
    {
      id: '2',
      title: 'The Role of Bitcoin Pro in Nation-State Adoption',
      excerpt: 'As Bitcoin moves from an emerging technology to a strategic reserve asset, nation-states are recognizing its potential.',
      date: 'April 22, 2025'
    },
    {
      id: '3',
      title: 'Securing the Network: An Inside Look at libsecp256k1',
      excerpt: 'libsecp256k1 is the cryptographic library at the heart of Bitcoin\'s security model.',
      date: 'April 22, 2025'
    }
  ];

  // Auto-scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='blog-post-container'>
        {/* Article Header Section */}
        <div className='article-header-section'>
          <div className='article-header-copy'>
            <h1 className='h1-bold'>Running a Bitcoin Full Node: Taking Back Your Financial Power</h1>
            <p className='caption-medium'>Published: April 22, 2025</p>
          </div>
        </div>

        {/* Main Article Content */}
        <div className='article-content-section'>
          <div className='article-content'>
            <div className='paragraph'>
              <h3 className='h4-bold'>Why Full Nodes Matter</h3>
              <p className='body-1-medium'>
                In an era where financial systems are increasingly opaque and centralized, running a Bitcoin full node is one of the most powerful steps you can take to reclaim control over your money. While many people associate Bitcoin ownership with simply holding coins on an exchange or in a mobile wallet, the real foundation of Bitcoin's credibility lies in independent verification. Full nodes make this possible.
              </p>
              <p className='body-1-medium'>
                A full node downloads and validates every block and transaction in Bitcoin's entire history. This means you don't have to trust anyone else to tell you what Bitcoin is or how much bitcoin you have—you enforce the rules yourself. By running a node, you prove to yourself that your coins are legitimate and that no invalid transactions are being accepted. This is the core principle behind the phrase "Don't trust, verify."
              </p>
            </div>

            <div className='paragraph'>
              <h3 className='h4-bold'>How Full Nodes Protect the Network</h3>
              <p className='body-1-medium'>
                Unlike lightweight wallets or custodial platforms that outsource verification, full nodes enforce Bitcoin's consensus rules in real time. They check that blocks follow proof-of-work requirements, that transactions have valid signatures, and that no coins are spent twice. In practical terms, this protects you from network attacks, dishonest miners, and even future attempts to manipulate Bitcoin's monetary policy.
              </p>
              <p className='body-1-medium'>
                Running a node also contributes to the resilience of the network. Every additional node strengthens Bitcoin's decentralization by providing another independent source of truth. Even if many large actors were to collude to push invalid changes, nodes operated by everyday users would reject them. This is what makes Bitcoin different from any centralized payment network—it can't be changed by decree.
              </p>
            </div>

            {/* Add more paragraphs as needed */}
          </div>

          {/* Divider */}
          <div className='divider'></div>

          {/* Share Section */}
          <div className='share-section'>
            <p className='body-2-medium'>Share</p>
            <div className='share-buttons'>
              <button className='share-button github-button'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12C0 17.301 3.438 21.8 8.205 23.385C8.839 23.478 9.029 23.149 9.029 22.817C9.029 22.519 9.021 21.776 9.021 20.733C6.607 21.304 6.033 19.873 6.033 19.873C5.446 18.622 4.62 18.165 4.62 18.165C3.544 17.449 4.737 17.462 4.737 17.462C5.92 17.549 6.558 18.739 6.558 18.739C7.77 20.367 9.554 19.873 10.247 19.531C10.366 18.804 10.654 18.342 10.986 18.084C8.827 17.888 6.948 16.913 6.948 14.328C6.948 13.043 7.441 12.016 8.151 11.29C8.048 11.006 7.727 9.838 8.396 8.238C8.396 8.238 9.215 7.882 10.976 8.889C11.697 8.715 12.446 8.629 13.195 8.629C13.944 8.629 14.693 8.715 15.414 8.889C17.166 7.882 18.003 8.238 18.003 8.238C18.663 9.847 18.351 11.015 18.247 11.29C18.957 12.016 19.449 13.043 19.449 14.328C19.449 16.986 17.551 17.895 15.37 18.076C15.796 18.439 16.289 19.172 16.289 20.294C16.289 21.976 16.273 22.491 16.273 22.817C16.273 23.152 16.469 23.481 17.103 23.385C21.87 21.8 25.308 17.301 25.308 12C25.308 5.373 19.935 0 13.308 0H12Z" fill="#F5F5F5"/>
                </svg>
              </button>
              <button className='share-button linkedin-button'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.335 18.339H15.67V14.16c0-1.031-.017-2.37-1.416-2.37-1.417 0-1.636 1.045-1.636 2.268v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.415 2.526-1.415 2.703 0 3.203 1.779 3.203 4.092v4.711zM5.005 7.433a2.006 2.006 0 1 1 0-4.012 2.006 2.006 0 0 1 0 4.012zm1.337 10.906H3.668V7.433h2.674v10.906zM20.67 0H3.325C1.48 0 0 1.48 0 3.325v17.35C0 22.52 1.48 24 3.325 24h17.345C22.52 24 24 22.52 24 20.675V3.325C24 1.48 22.52 0 20.67 0z" fill="#F5F5F5"/>
                </svg>
              </button>
              <button className='share-button instagram-button'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35C17.186 21.35 21.35 17.186 21.35 12C21.35 6.814 17.186 2.65 12 2.65C6.814 2.65 2.65 6.814 2.65 12C2.65 17.186 6.814 21.35 12 21.35Z" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 7.5V12" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 16.5C16.8513 16.8513 17 17.3787 17 18C17 18.6213 16.8513 19.1487 16.5 19.5C16.1487 19.8513 15.6213 20 15 20C14.3787 20 13.8513 19.8513 13.5 19.5C13.1487 19.1487 13 18.6213 13 18C13 17.3787 13.1487 16.8513 13.5 16.5C13.8513 16.1487 14.3787 16 15 16C15.6213 16 16.1487 16.1487 16.5 16.5Z" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Related Posts Section */}
          <div className='related-posts-section'>
            <div className='related-posts-container'>
              <button className='nav-button left-nav' disabled>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#858585" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className='related-post-cards'>
                {relatedPosts.map((post) => (
                  <div key={post.id} className='related-post-card'>
                    <h4 className='body-1-bold'>{post.title}</h4>
                    <p className='caption-medium'>{post.excerpt}</p>
                    <p className='caption-regular'>Published: {post.date}</p>
                  </div>
                ))}
              </div>

              <button className='nav-button right-nav'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}