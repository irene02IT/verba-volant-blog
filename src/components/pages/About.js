import Header from "../Header";
function About() {
    return (
        <>
            <Header type="about"/>
             {/* <!-- Main Content--> */}
            <main class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                        <blockquote class="blockquote">  Verba volant, scriptum manent</blockquote>
                                <p>Verba volant è un pretesto: per riordinare, catalogare, buttare fuori pensieri, riflessioni, qualsiasi cosa attraversi la mia mente che riesca ad afferrare e a mettere per iscritto. È un pretesto, un'occasione per ottenere un risultato: dare a qualche mio pensiero la possibilità di avere una vita e strada più lunga, oltre che una maggiore dignità.</p>
                                <p>Un pretesto per crescere, cambiare prospettiva, maturare consapevolezze. <br />E rivelarmi al mondo.</p>

                                <p>Irene</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default About;