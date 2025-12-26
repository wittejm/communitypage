import { County } from '../data/counties'

interface CountyContentProps {
  county: County
  onClose: () => void
}

export function CountyContent({ county, onClose }: CountyContentProps) {
  return (
    <div className="county-content">
      <div className="county-header">
        <h1 onClick={onClose}>{county.name} County</h1>
        <button className="close-button" onClick={onClose}>&gt;&gt;</button>
      </div>

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
        <div className="form-group">
          <label htmlFor="post-title">Title:</label>
          <input
            id="post-title"
            type="text"
            className="share-input"
            placeholder="Give your post a title..."
          />
        </div>
        <textarea
          className="share-input"
          placeholder="Share your experience with record expungement in this county..."
          rows={4}
        />
        <button className="post-button">Post</button>
      </div>
    </div>
  )
}
