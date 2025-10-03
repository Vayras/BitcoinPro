import Navbar from '@/components/navbar';
import './blog.css';
import Footer from '@/components/footer';
import BlogComponent from './component/blogComponent';

export default function Blog() {
  return (
    <div>
        <div>
        <Navbar />
        </div>
        <div className='blog-page-container'>
         <div className='standard-section'>
            <div className='copy'>
                <p className='h3-semibold'>Blog</p>
                <p className='subtitle-medium '>
                    Explore perspectives, technical updates, and discussions about Bitcoin’s evolution and the work behind the world’s most resilient financial infrastructure.
                </p>
            </div>
         </div>
         <div className='blog-list-section'>
            <BlogComponent title='Running a Bitcoin Full Node: Taking Back Your Financial Power' caption='Published: April 22, 2025' body='Running your own Bitcoin full node is the most direct way to reclaim financial independence in a world of centralized intermediaries. This post explains why full nodes matter, how they enforce consensus rules, and how anyone can set one up to verify the entire blockchain themselves. From privacy benefits to the critical role nodes play in keeping Bitcoin trustless, you’ll learn why node operation isn’t just for developers—it’s for anyone who values freedom.' />
           
                <BlogComponent title='The Role of Bitcoin Pro in Nation-State Adoption' caption='Published: April 22, 2025' body='As Bitcoin moves from an emerging technology to a strategic reserve asset, nation-states are recognizing its potential. This article explores how Bitcoin Pro’s open, neutral codebase underpins large-scale adoption—enabling governments, corporations, and citizens alike to transact without permission. We also look at case studies showing how running Bitcoin Pro nodes strengthens monetary sovereignty at every level.'/>

                    <BlogComponent title='Securing the Network: An Inside Look at libsecp256k1' caption='Published: April 22, 2025' body='libsecp256k1 is the cryptographic library at the heart of Bitcoin’s security model. In this post, we take a closer look at its design, performance optimizations, and rigorous review process that help protect Bitcoin transactions from tampering or forgery. You’ll learn why this library sets the standard for cryptographic engineering—and how its development reflects Bitcoin Pro’s uncompromising commitment to resilience.'/>

                    
         </div>
         <div className='text-center caption-medium' style={{marginTop: "40px", marginBottom: "140px"}}>
            page 1 of 1
         </div>
        </div>
        <Footer />
    </div>
  );
}