import './Blog.scss';
import articles from './Articles.json';

const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <header className="blog-header">
          <h1>Tech Writings</h1>
          <p>Articles on coding, tools, patterns, and things I learn.</p>
        </header>

        <section className="article-grid">
          {articles.map((article, idx) => (
            <article key={idx} className="card">
              <div className="card-meta">
                <span>{article.date}</span>
                <span>• {article.tags.join(', ')}</span>
              </div>
              <h2 className="card-title">{article.title}</h2>
              <p className="card-excerpt">{article.excerpt}</p>
              <a
                href={`blog/${article.link}`}
                target="_blank"
                className="read-more"
                rel="noreferrer"
              >
                Read More →
              </a>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default Blog;
