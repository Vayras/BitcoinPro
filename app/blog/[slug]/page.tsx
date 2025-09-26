'use client'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './blogPost.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

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
                <Image src="/6f6225c76b8fb5be9f3eecdd237075d814b3266f.svg" alt="GitHub" width={20} height={20} />
              </button>
              <button className='share-button linkedin-button'>
                   <Image src="/linkedin-icon.svg" alt="LinkedIn" width={20} height={20} />
              </button>
              <button className='share-button instagram-button'>
                 <Image src="/x-logo.svg" alt="GitHub" width={20} height={20} />
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