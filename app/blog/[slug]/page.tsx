'use client'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './blogPost.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogPost() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    },
    {
      id: '4',
      title: 'Bitcoin Mining: Energy, Economics, and Incentives',
      excerpt: 'Understanding how Bitcoin mining secures the network through proof-of-work and economic incentives.',
      date: 'April 22, 2025'
    },
    {
      id: '5',
      title: 'Privacy in Bitcoin: Best Practices and Tools',
      excerpt: 'Learn how to enhance your privacy when using Bitcoin through various techniques and tools.',
      date: 'April 22, 2025'
    }
  ];

  // Auto-scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const handleNext = () => {
    if (currentIndex < relatedPosts.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='blog-post-container'>
        {/* Article Header Section */}
        <div className='article-header-section'>
          <div className='article-header-copy'>
            <h1 className='h1-bold'>Running a Bitcoin Full Node: Taking Back Your Financial Power</h1>
            <p className='caption-medium '>Published: April 22, 2025</p>
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


          {/* Share Section */}
          <div className='share-section'>
     
            <div className='share-buttons'>
              <p>Share</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M10.0703 20.5029C10.0703 20.3563 10.038 20.2114 9.97578 20.0786C9.91353 19.9458 9.82284 19.8283 9.71014 19.7345C9.59743 19.6407 9.46546 19.5728 9.32359 19.5356C9.18171 19.4984 9.03341 19.493 8.88917 19.5195C7.58009 19.7597 5.92726 19.7959 5.4878 18.5615C5.10461 17.6055 4.46987 16.771 3.65089 16.1465C3.59246 16.1147 3.53677 16.0781 3.48439 16.0371C3.41272 15.8481 3.2854 15.6852 3.11925 15.5699C2.95311 15.4547 2.75592 15.3925 2.55372 15.3916H2.54884C2.28444 15.3915 2.03077 15.4962 1.84335 15.6827C1.65594 15.8692 1.55004 16.1223 1.54884 16.3867C1.54493 17.2022 2.35984 17.7246 2.69044 17.9014C3.08029 18.2931 3.39359 18.7541 3.61427 19.2608C3.97853 20.2842 5.03712 21.8369 8.08009 21.6368C8.08109 21.6719 8.08204 21.7051 8.08253 21.7354L8.08692 22.003C8.08692 22.2682 8.19228 22.5225 8.37982 22.7101C8.56735 22.8976 8.82171 23.003 9.08692 23.003C9.35214 23.003 9.60649 22.8976 9.79403 22.7101C9.98157 22.5225 10.0869 22.2682 10.0869 22.003L10.082 21.6846C10.0772 21.4951 10.0703 21.2207 10.0703 20.5029ZM20.7373 5.37691C20.7691 5.25191 20.8003 5.11324 20.8277 4.95699C20.9894 3.84258 20.8484 2.70518 20.4195 1.66399C20.3653 1.52825 20.2822 1.40599 20.1758 1.30579C20.0694 1.20559 19.9425 1.12986 19.8037 1.08392C19.4477 0.963798 18.1333 0.727468 15.6197 2.33392C13.5302 1.84221 11.3551 1.84221 9.26565 2.33392C6.76222 0.750998 5.4546 0.965798 5.10206 1.07908C4.95993 1.12316 4.82946 1.19848 4.72021 1.29954C4.61097 1.40059 4.52572 1.5248 4.47071 1.66308C4.03301 2.72426 3.89355 3.88485 4.06739 5.01952C4.09181 5.14745 4.11817 5.26562 4.14552 5.37401C3.31709 6.47745 2.87583 7.82337 2.89015 9.20311C2.88745 9.51094 2.90163 9.8187 2.93263 10.125C3.26663 14.7275 6.26663 16.1094 8.35694 16.584C8.31349 16.709 8.27394 16.8428 8.23878 16.9844C8.17612 17.2417 8.21805 17.5133 8.35538 17.7397C8.49271 17.9662 8.71422 18.1289 8.97135 18.1922C9.22848 18.2556 9.50024 18.2144 9.72703 18.0776C9.95382 17.9409 10.1171 17.7198 10.1812 17.4629C10.2448 17.1297 10.4079 16.8236 10.6489 16.5849C10.7947 16.4573 10.9002 16.2901 10.9527 16.1036C11.0052 15.9172 11.0023 15.7194 10.9445 15.5346C10.8866 15.3497 10.7763 15.1856 10.6269 15.0622C10.4775 14.9389 10.2955 14.8616 10.103 14.8398C6.64894 14.4453 5.14942 13.0381 4.92384 9.9414C4.89885 9.69613 4.88761 9.44965 4.89015 9.20312C4.87411 8.21977 5.19898 7.2612 5.80958 6.49023C5.87093 6.40985 5.93628 6.3326 6.00538 6.25878C6.12781 6.12178 6.21013 5.9537 6.2433 5.77298C6.27646 5.59227 6.25919 5.40591 6.19338 5.23437C6.12592 5.0539 6.07397 4.868 6.03811 4.6787C5.95664 4.14041 5.98337 3.59129 6.11671 3.06346C6.98585 3.30893 7.80383 3.7085 8.53171 4.24314C8.65208 4.32331 8.78828 4.37667 8.93108 4.39958C9.07388 4.4225 9.21994 4.41444 9.35935 4.37596C11.3805 3.82746 13.5113 3.8278 15.5322 4.37696C15.6724 4.4154 15.8192 4.423 15.9626 4.39923C16.106 4.37545 16.2425 4.32088 16.3628 4.23927C17.0872 3.70241 17.9018 3.29926 18.768 3.04884C18.9008 3.56399 18.9305 4.10029 18.8554 4.62696C18.8192 4.83449 18.7626 5.03796 18.6865 5.23439C18.6207 5.40593 18.6034 5.59229 18.6366 5.773C18.6697 5.95372 18.7521 6.1218 18.8745 6.2588C18.9516 6.34571 19.0288 6.43946 19.0981 6.52735C19.7044 7.28527 20.0238 8.23282 20 9.20311C20.0018 9.46272 19.9893 9.72223 19.9624 9.98045C19.7422 13.0361 18.2368 14.4443 14.7666 14.8398C14.5741 14.8617 14.392 14.9391 14.2427 15.0626C14.0933 15.1861 13.983 15.3503 13.9253 15.5352C13.8675 15.7202 13.8647 15.918 13.9172 16.1045C13.9698 16.2911 14.0754 16.4583 14.2212 16.5859C14.4698 16.8309 14.6333 17.1493 14.6875 17.4941C14.7551 17.7618 14.7861 18.0374 14.7798 18.3135V20.6475C14.77 21.2949 14.77 21.7802 14.77 22.0029C14.77 22.2681 14.8754 22.5225 15.0629 22.71C15.2504 22.8976 15.5048 23.0029 15.77 23.0029C16.0352 23.0029 16.2896 22.8976 16.4771 22.71C16.6647 22.5225 16.77 22.2681 16.77 22.0029C16.77 21.7861 16.77 21.3105 16.7798 20.6631V18.3135C16.7878 17.8713 16.7358 17.4301 16.625 17.0019C16.5933 16.8614 16.5545 16.7225 16.5088 16.5859C18.03 16.3332 19.4123 15.5489 20.4094 14.3725C21.4065 13.1962 21.9539 11.7042 21.9541 10.1621C21.987 9.84352 22.0024 9.52337 22 9.20311C22.0222 7.82188 21.5773 6.47361 20.7373 5.37691Z" fill="#F5F5F5"/>
                </svg>
              </p>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.4992 8.999C16.604 8.99862 15.7226 9.22006 14.9338 9.64353C14.8618 9.45396 14.7339 9.29077 14.567 9.17564C14.4 9.06052 14.202 8.99891 13.9992 8.999H9.99924C9.8679 8.99893 9.73783 9.02474 9.61647 9.07497C9.49511 9.1252 9.38484 9.19885 9.29197 9.29173C9.19909 9.3846 9.12543 9.49487 9.07521 9.61623C9.02498 9.73759 8.99916 9.86766 8.99924 9.999V21.999C8.99916 22.1303 9.02498 22.2604 9.0752 22.3818C9.12543 22.5031 9.19909 22.6134 9.29196 22.7063C9.38483 22.7992 9.4951 22.8728 9.61646 22.923C9.73782 22.9733 9.8679 22.9991 9.99924 22.999H13.9992C14.1306 22.9991 14.2607 22.9733 14.382 22.923C14.5034 22.8728 14.6136 22.7992 14.7065 22.7063C14.7994 22.6134 14.873 22.5031 14.9233 22.3818C14.9735 22.2604 14.9993 22.1303 14.9992 21.999V16.499C14.9992 16.2338 15.1046 15.9794 15.2921 15.7919C15.4797 15.6044 15.734 15.499 15.9992 15.499C16.2645 15.499 16.5188 15.6044 16.7063 15.7919C16.8939 15.9794 16.9992 16.2338 16.9992 16.499V21.999C16.9992 22.1303 17.025 22.2604 17.0752 22.3818C17.1254 22.5031 17.1991 22.6134 17.292 22.7063C17.3848 22.7992 17.4951 22.8728 17.6165 22.923C17.7378 22.9733 17.8679 22.9991 17.9992 22.999H21.9992C22.1306 22.9991 22.2607 22.9733 22.382 22.923C22.5034 22.8728 22.6136 22.7992 22.7065 22.7063C22.7994 22.6134 22.873 22.5031 22.9233 22.3818C22.9735 22.2604 22.9993 22.1303 22.9992 21.999V14.499C22.9974 13.0409 22.4174 11.643 21.3863 10.6119C20.3553 9.58086 18.9574 9.00081 17.4992 8.999ZM20.9992 20.999H18.9992V16.499C18.9992 15.7034 18.6832 14.9403 18.1206 14.3777C17.558 13.8151 16.7949 13.499 15.9992 13.499C15.2036 13.499 14.4405 13.8151 13.8779 14.3777C13.3153 14.9403 12.9992 15.7034 12.9992 16.499V20.999H10.9992V10.999H12.9992V11.7021C12.9994 11.9093 13.0638 12.1114 13.1837 12.2804C13.3036 12.4494 13.473 12.577 13.6685 12.6456C13.864 12.7142 14.076 12.7204 14.2752 12.6634C14.4744 12.6063 14.6509 12.4888 14.7805 12.3271C15.2293 11.7572 15.8448 11.3416 16.5412 11.1384C17.2376 10.9352 17.9801 10.9545 18.665 11.1937C19.3498 11.4329 19.9429 11.88 20.3614 12.4726C20.7799 13.0651 21.0029 13.7736 20.9992 14.499V20.999ZM6.99924 8.999H2.99924C2.8679 8.99893 2.73783 9.02474 2.61647 9.07497C2.49511 9.1252 2.38484 9.19885 2.29196 9.29173C2.19909 9.3846 2.12543 9.49487 2.07521 9.61623C2.02498 9.73759 1.99916 9.86766 1.99924 9.999V21.999C1.99916 22.1303 2.02498 22.2604 2.0752 22.3818C2.12543 22.5031 2.19909 22.6134 2.29196 22.7063C2.38484 22.7992 2.4951 22.8728 2.61646 22.923C2.73782 22.9733 2.8679 22.9991 2.99924 22.999H6.99924C7.13058 22.9991 7.26065 22.9733 7.38201 22.923C7.50337 22.8728 7.61364 22.7992 7.70652 22.7063C7.79939 22.6134 7.87305 22.5031 7.92327 22.3818C7.9735 22.2604 7.99931 22.1303 7.99924 21.999V9.999C7.99931 9.86766 7.9735 9.73759 7.92327 9.61623C7.87304 9.49487 7.79939 9.3846 7.70651 9.29173C7.61364 9.19885 7.50337 9.1252 7.38201 9.07497C7.26065 9.02474 7.13058 8.99893 6.99924 8.999ZM5.99924 20.999H3.99924V10.999H5.99924V20.999ZM5.01389 1.542C4.57625 1.5158 4.13785 1.5789 3.72536 1.72745C3.31288 1.87599 2.93491 2.10689 2.61446 2.40609C2.294 2.7053 2.03775 3.06656 1.8613 3.4679C1.68484 3.86924 1.59186 4.30229 1.58802 4.74069C1.58417 5.1791 1.66954 5.61371 1.83892 6.01808C2.00831 6.42246 2.25818 6.78816 2.57334 7.09294C2.88849 7.39772 3.26235 7.63522 3.67217 7.79098C4.08199 7.94674 4.51921 8.01752 4.95724 7.999H4.98556C5.42436 8.02506 5.86386 7.96138 6.27721 7.81185C6.69057 7.66232 7.06909 7.43007 7.38966 7.12931C7.71022 6.82854 7.9661 6.46557 8.14165 6.06258C8.31719 5.65958 8.40873 5.22503 8.41066 4.78546C8.41258 4.34589 8.32486 3.91055 8.15286 3.50603C7.98085 3.10151 7.72817 2.73631 7.41026 2.43275C7.09234 2.12918 6.71587 1.89363 6.30384 1.74047C5.89182 1.58732 5.4529 1.51979 5.01389 1.542ZM4.98557 5.999H4.95724C4.78431 6.02 4.60888 6.00378 4.44273 5.95143C4.27658 5.89908 4.12354 5.81181 3.99388 5.69547C3.86422 5.57912 3.76094 5.4364 3.69095 5.27688C3.62097 5.11735 3.5859 4.9447 3.58811 4.77051C3.58811 4.02441 4.14768 3.54199 5.01389 3.54199C5.18859 3.5187 5.36625 3.53312 5.5349 3.58428C5.70356 3.63543 5.8593 3.72213 5.99162 3.83854C6.12395 3.95495 6.22979 4.09837 6.30203 4.25913C6.37426 4.41989 6.4112 4.59427 6.41037 4.77051C6.41037 5.5166 5.8508 5.999 4.98557 5.999Z" fill="#F5F5F5"/>
                </svg>
              </p>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 23H7C3.7 23 1 20.3 1 17V7C1 3.7 3.7 1 7 1H17C20.3 1 23 3.7 23 7V17C23 20.3 20.3 23 17 23ZM7 3C4.8 3 3 4.8 3 7V17C3 19.2 4.8 21 7 21H17C19.2 21 21 19.2 21 17V7C21 4.8 19.2 3 17 3H7ZM12 17C10.9 17 9.9 16.7 9 16C7.9 15.2 7.2 14 7 12.7C6.7 10 8.6 7.4 11.3 7C11.8 6.9 12.3 6.9 12.8 7C15 7.3 16.7 9 17 11.2C17.2 12.5 16.9 13.8 16.1 14.9C15.3 16 14.1 16.7 12.8 16.9C12.5 16.9 12.3 17 12 17ZM12 9H11.6C10 9.2 8.8 10.8 9.1 12.4C9.3 14 10.9 15.2 12.5 14.9C13.3 14.8 14 14.4 14.5 13.7C15 13 15.2 12.3 15.1 11.5C14.9 10.2 13.9 9.2 12.6 9H12ZM17.5 7.5C16.9 7.5 16.5 7.1 16.5 6.5C16.5 5.9 16.9 5.5 17.5 5.5C18.1 5.5 18.5 5.9 18.5 6.5C18.5 7.1 18.1 7.5 17.5 7.5Z" fill="#F5F5F5"/>
                </svg>
              </p>
            </div>
          </div>
          
                    <div className='divider'></div>

          {/* Related Posts Section */}
          <div className='related-posts-section'>
            <div className='related-posts-container'>
              <button
                className='nav-button left-nav'
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke={currentIndex === 0 ? "#858585" : "#F5F5F5"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className='related-post-cards-wrapper'>
                <div
                  className='related-post-cards'
                  style={{
                    transform: `translateX(-${currentIndex * (404)}px)`,
                    transition: isAnimating ? 'transform 0.3s ease-in-out' : 'none'
                  }}
                >
                  {relatedPosts.map((post) => (
                    <div key={post.id} className='related-post-card'>
                      <h4 className='body-1-bold'>{post.title}</h4>
                      <p className='caption-medium'>{post.excerpt}</p>
                      <p className='caption-regular'>Published: {post.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className='nav-button right-nav'
                onClick={handleNext}
                disabled={currentIndex === relatedPosts.length - 1}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke={currentIndex === relatedPosts.length - 1 ? "#858585" : "#F5F5F5"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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