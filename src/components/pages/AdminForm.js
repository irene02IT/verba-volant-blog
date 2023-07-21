import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import {db} from './firebase'; // Importa l'istanza di Firestore dal file firebase.js

function AdminForm() {
  const [article, setArticle] = useState({
    title: '',
    subtitle: '',
    text: ''
  });

  const dataHandler = async (event) => {
    event.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "posts"), {
          date: new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear(),
            title: article.title,
            subtitle: article.subtitle,
            text: article.text
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setArticle((prevArticle) => ({
      ...prevArticle,
      [id]: value
    }));
  };
    return(
        <>
            <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="my-5">
                            {/* <!-- * * * * * * * * * * * * * * *-->
                            <!-- * * SB Forms Contact Form * *-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- This form is pre-integrated with SB Forms.-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!--> */}
                            <form id="adminForm" onSubmit={dataHandler}>
                                <div className="form-floating">
                                    <input className="form-control" id="title" type="text" placeholder="Enter the title..." data-sb-validations="required" onChange={handleInputChange} />
                                    <label for="title">Article title</label>
                                    <div className="invalid-feedback" data-sb-feedback="title:required">A title is required.</div>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control" id="subtitle" type="text" placeholder="Enter the subtitle..." data-sb-validations="required" onChange={handleInputChange}/>
                                    <label for="subtitle">Article subtitle</label>
                                    <div className="invalid-feedback" data-sb-feedback="subtitle:required">A subtitle is required.</div>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" id="text" placeholder="Enter your text here..." style={{innerHeight: '200rem'}} data-sb-validations="required" onChange={handleInputChange}></textarea>
                                    <label for="article-text">Text</label>
                                    <div className="invalid-feedback" data-sb-feedback="article-text:required">Text Required</div>
                                </div>
                                <br />
                                {/* <!-- Submit Button--> */}
                                <button className="btn btn-primary text-uppercase" id="submitButton" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )   
}
export default AdminForm;