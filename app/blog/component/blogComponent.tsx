import './blogComponent.css';
import Link from 'next/link';

interface BlogComponentProps {
  title: string;
  caption: string;
  body: string;
}

export default function BlogComponent({ title, caption, body }: BlogComponentProps) {
  return (
    <Link href="/blog/test-blog" className="blog-container-link">
      <div className="blog-container">
        <h4 className="h4-bold">{title}</h4>
        <p className="caption-medium">{caption}</p>
        <p className="body-1-regular">{body}</p>
        <div style={{ width: "100%", height: "1px", background: "#333", margin: "80px 0px 0px 0px" }} />
      </div>
    </Link>
  );
}