import { useEffect, useState } from 'react'
import { postService } from '../services/post/post.service.local'

export function PostIndex() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    const posts = await postService.query()
    setPosts(posts)
  }

  return (
    <section className="post-index">
      {posts.map(post => (
        <article key={post._id} className="post-preview">
          <div className="post-header">
            <strong>{post.by.fullname}</strong>
            <span>@{post.by.username}</span>
          </div>

          <img className="post-img" src={post.imgUrl} />

          <p className="post-caption">{post.caption}</p>
        </article>
      ))}
    </section>
  )
}
