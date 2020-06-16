import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  if (!posts) {
    return <div>Loading, please wait...</div>;
  }
  return (
    <div>
      {
        posts.map(({ id, picture_url: pictureUrl, user_id: userId }) => (
          <Link
            to={`/posts/${userId}/${id}`}
            key={id}
            className="PostList--Card"
          >
            <img src={pictureUrl} alt="post" />
          </Link>
        ))
      }
    </div>
  );
}

export default PostList;
