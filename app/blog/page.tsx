import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function Blog() {
  return (
    <main className="page-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title text-4xl md:text-6xl font-bold mb-6">BitcoinPro Blog</h1>
            <p className="blog-hero-description text-lg md:text-xl mb-8 max-w-2xl">
              Stay updated with the latest news, updates, and insights from the BitcoinPro team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts-section bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-3xl font-bold mb-4">Featured Posts</h2>
            <div className="section-divider w-20 h-1 bg-orange-500"></div>
          </div>
          
          <div className="featured-posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Post 1 */}
            <div className="featured-post bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="post-image relative h-48">
                <Image 
                  src="/images/blog-featured-1.png" 
                  alt="Bitcoin Lightning Network Update"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="post-content p-6">
                <div className="post-meta flex items-center text-sm text-gray-500 mb-3">
                  <span className="post-date">May 15, 2023</span>
                  <span className="mx-2">•</span>
                  <span className="post-category">Technology</span>
                </div>
                <h3 className="post-title text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
                  <a href="#">Bitcoin Lightning Network Update: What's New in 2023</a>
                </h3>
                <p className="post-excerpt text-gray-600 mb-4">
                  Discover the latest improvements and developments in the Bitcoin Lightning Network that are making transactions faster and more scalable than ever before.
                </p>
                <a href="#" className="post-read-more text-orange-500 font-medium hover:underline flex items-center">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Featured Post 2 */}
            <div className="featured-post bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="post-image relative h-48">
                <Image 
                  src="/images/blog-featured-2.png" 
                  alt="Bitcoin Security Best Practices"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="post-content p-6">
                <div className="post-meta flex items-center text-sm text-gray-500 mb-3">
                  <span className="post-date">April 28, 2023</span>
                  <span className="mx-2">•</span>
                  <span className="post-category">Security</span>
                </div>
                <h3 className="post-title text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
                  <a href="#">Bitcoin Security Best Practices for 2023</a>
                </h3>
                <p className="post-excerpt text-gray-600 mb-4">
                  Learn essential security tips to protect your Bitcoin holdings and stay safe in an evolving digital landscape.
                </p>
                <a href="#" className="post-read-more text-orange-500 font-medium hover:underline flex items-center">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Featured Post 3 */}
            <div className="featured-post bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="post-image relative h-48">
                <Image 
                  src="/images/blog-featured-3.png" 
                  alt="BitcoinPro Client Update"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="post-content p-6">
                <div className="post-meta flex items-center text-sm text-gray-500 mb-3">
                  <span className="post-date">April 10, 2023</span>
                  <span className="mx-2">•</span>
                  <span className="post-category">Updates</span>
                </div>
                <h3 className="post-title text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
                  <a href="#">BitcoinPro Client 2.0: Major Release Now Available</a>
                </h3>
                <p className="post-excerpt text-gray-600 mb-4">
                  Explore the new features and improvements in the latest BitcoinPro client release, including enhanced performance and user experience.
                </p>
                <a href="#" className="post-read-more text-orange-500 font-medium hover:underline flex items-center">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="latest-posts-section py-16">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h2 className="section-title text-3xl font-bold mb-4">Latest Posts</h2>
            <div className="section-divider w-20 h-1 bg-orange-500"></div>
          </div>
          
          <div className="latest-posts-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Latest Post 1 */}
            <div className="latest-post flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="post-image relative h-48 md:h-auto md:w-1/3">
                <Image 
                  src="/images/blog-latest-1.png" 
                  alt="Bitcoin Privacy Techniques"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="post-content p-6 md:w-2/3">
                <div className="post-meta flex items-center text-sm text-gray-500 mb-3">
                  <span className="post-date">March 25, 2023</span>
                  <span className="mx-2">•</span>
                  <span className="post-category">Privacy</span>
                </div>
                <h3 className="post-title text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
                  <a href="#">Understanding Bitcoin Privacy: Techniques and Tools</a>
                </h3>
                <p className="post-excerpt text-gray-600 mb-4">
                  A comprehensive guide to understanding Bitcoin privacy concepts and the tools available to enhance your financial privacy.
                </p>
                <a href="#" className="post-read-more text-orange-500 font-medium hover:underline flex items-center">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Latest Post 2 */}
            <div className="latest-post flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="post-image relative h-48 md:h-auto md:w-1/3">
                <Image 
                  src="/images/blog-latest-2.png" 
                  alt="Bitcoin Scalability Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="post-content p-6 md:w-2/3">
                <div className="post-meta flex items-center text-sm text-gray-500 mb-3">
                  <span className="post-date">March 12, 2023</span>
                  <span className="mx-2">•</span>
                  <span className="post-category">Technology</span>
                </div>
                <h3 className="post-title text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
                  <a href="#">Bitcoin Scalability Solutions: Beyond Layer 2</a>
                </h3>
                <p className="post-excerpt text-gray-600 mb-4">
                  Exploring innovative solutions to Bitcoin's scalability challenges beyond the Lightning Network.
                </p>
                <a href="#" className="post-read-more text-orange-500 font-medium hover:underline flex items-center">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Latest Post 3 */}
            <div className="latest-post flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="post-image relative h-48 md:h-auto md:w-1/3">
                <Image 
                  src="/images/blog-latest-3.png" 
                  alt="Bitcoin Core Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="post-content p-6 md:w-2/3">
                <div className="post-meta flex items-center text-sm text-gray-500 mb-3">
                  <span className="post-date">February 28, 2023</span>
                  <span className="mx-2">•</span>
                  <span className="post-category">Development</span>
                </div>
                <h3 className="post-title text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
                  <a href="#">How to Contribute to Bitcoin Core Development</a>
                </h3>
                <p className="post-excerpt text-gray-600 mb-4">
                  A beginner's guide to getting involved with Bitcoin Core development and contributing to the future of Bitcoin.
                </p>
                <a href="#" className="post-read-more text-orange-500 font-medium hover:underline flex items-center">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Latest Post 4 */}
            <div className="latest-post flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="post-image relative h-48 md:h-auto md:w-1/3">
                <Image 
                  src="/images/blog-latest-4.png" 
                  alt="Bitcoin Hardware Wallets"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="post-content p-6 md:w-2/3">
                <div className="post-meta flex items-center text-sm text-gray-500 mb-3">
                  <span className="post-date">February 15, 2023</span>
                  <span className="mx-2">•</span>
                  <span className="post-category">Security</span>
                </div>
                <h3 className="post-title text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
                  <a href="#">Choosing the Right Bitcoin Hardware Wallet in 2023</a>
                </h3>
                <p className="post-excerpt text-gray-600 mb-4">
                  A detailed comparison of the top Bitcoin hardware wallets available today, helping you make an informed decision.
                </p>
                <a href="#" className="post-read-more text-orange-500 font-medium hover:underline flex items-center">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="load-more-btn bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center mx-auto">
              Load More Posts
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="newsletter-title text-3xl font-bold mb-4 text-white">Stay Updated</h2>
          <p className="newsletter-description text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates, blog posts, and announcements directly to your inbox.
          </p>
          <form className="newsletter-form flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input flex-grow py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
              required
            />
            <button 
              type="submit" 
              className="newsletter-btn bg-white text-orange-500 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}