function AdminForm(){
    return(
        <>
            <main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="my-5">
                            {/* <!-- * * * * * * * * * * * * * * *-->
                            <!-- * * SB Forms Contact Form * *-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- This form is pre-integrated with SB Forms.-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!--> */}
                            <form id="adminForm">
                                <div class="form-floating">
                                    <input class="form-control" id="title" type="text" placeholder="Enter the title..." data-sb-validations="required" />
                                    <label for="title">Article title</label>
                                    <div class="invalid-feedback" data-sb-feedback="title:required">A title is required.</div>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" id="subtitle" type="text" placeholder="Enter the subtitle..." data-sb-validations="required" />
                                    <label for="subtitle">Article subtitle</label>
                                    <div class="invalid-feedback" data-sb-feedback="subtitle:required">A subtitle is required.</div>
                                </div>
                                <div class="form-floating">
                                    <textarea class="form-control" id="article-text" placeholder="Enter your text here..." style={{innerHeight: '200rem'}} data-sb-validations="required"></textarea>
                                    <label for="article-text">Text</label>
                                    <div class="invalid-feedback" data-sb-feedback="article-text:required">Text Required</div>
                                </div>
                                <br />
                                {/* <!-- Submit Button--> */}
                                <button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Submit</button>
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