import PostPreview from './PostPreview';
import { useState, useEffect } from 'react';
import { getFirestore, collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Importa l'istanza di Firestore dal file firebase.js

function PageContent() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4); // Numero iniziale di post visibili
  const postsPerPage = 1; // Numero di post da visualizzare ogni volta che viene premuto il pulsante "Older Posts"

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const db = getFirestore();
    const postsCollection = collection(db, 'posts');
    const q = query(postsCollection, orderBy('date', 'desc'), limit(visiblePosts)); // Limita il numero di post iniziali da visualizzare
    const postsSnapshot = await getDocs(q);
    const postsList = postsSnapshot.docs.map(doc => doc.data());
    setPosts(postsList);
  };

  const handleOlderPostsClick = async () => {
    const db = getFirestore();
    const postsCollection = collection(db, 'posts');
    const q = query(postsCollection, orderBy('date', 'desc'), startAfter(posts[posts.length - 1].date), limit(postsPerPage)); // Usa il campo "date" dell'ultimo post nella lista come punto di partenza per la successiva query
    const postsSnapshot = await getDocs(q);
    const newPostsList = postsSnapshot.docs.map(doc => doc.data());
    setPosts([...posts, ...newPostsList]); // Aggiungi i nuovi post alla lista esistente
    setVisiblePosts(visiblePosts + postsPerPage); // Incrementa il numero di post visibili
  };

  const listItems = posts.map(post =>
    <PostPreview title={post.title} subtitle={post.subtitle} date={post.date} path={post.path}/>
  );
  const hasMorePosts = visiblePosts <= posts.length;

  return (
    <div className="page-content">
      {/* <!-- Main Content--> */}
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div>{listItems}</div>
            {/* //<!-- Pager--> */}
            <div className="d-flex justify-content-end mb-4">
                <button className={"btn btn-primary text-uppercase " + (hasMorePosts ? '' : 'disabled')} onClick={handleOlderPostsClick} disabled={!hasMorePosts}>
                  Older Posts →
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
