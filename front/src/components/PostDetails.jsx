import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const { postId, userId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, []);

  if (!post) {
    return <div>Loading, please wait...</div>;
  }
  return (
    <div>
      <img src={post.avatar_url} />
      <h3>{post.nickname}</h3>
      <div key={post.id} className="PostDetails--Card">
        <img src={post.picture_url} alt="post" />
      </div>

    </div>
  );
}

export default PostDetails;
