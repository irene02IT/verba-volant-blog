import PostPreview from './PostPreview';
const posts = [{
  id: 0,
  title: 'How running saved my life',
  subtitle: 'My experience running a marathon',
  date: '20/03/2023'
}, {
  id: 1,
  title: 'We have a problem with love',
  subtitle: 'And our culture has a lot of responsibility about it',
  date: '20/03/2023'
}, {
  id: 2,
  title: 'The relationship between me and my body',
  subtitle: 'Subtitle 2',
  date: '20/03/2023'
}, {
  id: 3,
  title: 'Title 4',
  subtitle: 'Subtitle 4',
  date: '20/03/2023'
}, {
  id: 4,
  title: 'How difficult is to start',
  subtitle: 'Subtitle 5',
  date: '20/03/2023'
}];
function PageContent() {
  const listItems = posts.map(post =>
    <PostPreview key={post.id} title={post.title} subtitle={post.subtitle} date={post.date} />
  );
  return (
    <div className="page-content">
        {/* <!-- Main Content--> */}
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div>{listItems}</div>
                    {/* //<!-- Pager--> */}
                    <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default PageContent;