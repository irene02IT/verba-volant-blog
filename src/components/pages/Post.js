import backgroundpost from '../../assets/img/post-bg.jpg';
import { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, limit, getDocs } from 'firebase/firestore';

function Post() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const db = getFirestore();
      const postsCollection = collection(db, 'posts');
      const q = query(postsCollection, where('path', '==', 'post-1'), limit(1)); // Recupera il post con il titolo specificato
      const postsSnapshot = await getDocs(q);
      const postDoc = postsSnapshot.docs[0];
      if (postDoc.exists()) {
        setPost(postDoc.data());
      } else {
        console.log("No post found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!post) {
    return <p>Loading...</p>; // Puoi mostrare uno spinner o un messaggio di caricamento mentre aspetti i dati
  }

  return (
    <>
      {/* Page Header */}
      <header class="masthead" style={{ backgroundImage: `url(${backgroundpost})` }}>
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="post-heading">
                <h1>{post.title}</h1>
                <h2 class="subheading">{post.subtitle}</h2>
                <span class="meta">Posted on {post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Post Content */}
      <article class="mb-4">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <p>{post.text}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Post;