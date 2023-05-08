import backgroundhome from '../assets/img/home-bg.jpg';
import backgroundabout from '../assets/img/about-bg.jpg';
import backgroundcontact from '../assets/img/contact-bg.jpg';

function Header(props){
    const mastheadcontent = [{
        type: 'home',
        background: backgroundhome,
        title: 'Un blog.',
        subtitle: 'Appunti, pensieri sparsi e altre cose',
      }, {
        type: 'about',
        background: backgroundabout,
        title: 'Verba Volant',
        subtitle: 'Perchè?',
        }, {
        type: 'about',
        background: backgroundcontact,
        title: 'Have questions?',
        subtitle: 'Contact me!',
      }];
    let masthead;
    switch(props.type){
        case 'home':
            masthead = mastheadcontent[0];
            break;
        case 'about':
            masthead = mastheadcontent[1];
            break;          
        case 'contact':
            masthead = mastheadcontent[2];
            break;
        default:
            masthead = mastheadcontent[0];}
    return(
        <header class="masthead" style={{ 
            backgroundImage: `url(
                ${masthead.background}
            )`}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>{masthead.title}</h1>
                            <span class="subheading">{masthead.subtitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header;