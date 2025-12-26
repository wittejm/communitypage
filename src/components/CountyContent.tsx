import { County } from '../data/counties'

interface CountyContentProps {
  county: County
}

export function CountyContent({ county }: CountyContentProps) {
  return (
    <div className="county-content">
      <h1>{county.name} County</h1>

      <div className="posts-list">
        {county.posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.preview}</p>
          </div>
        ))}
      </div>

      <div className="share-area">
        <h3>Share Your Experience</h3>
        <textarea
          className="share-input"
          placeholder="Share information about record expungement in this county..."
          rows={4}
        />
        <button className="post-button">Post</button>
      </div>
    </div>
  )
}
