import React from 'react';


function Faq() {
    return (
        <div className="">
            
            <div className="accordion " id="accordionExample">
            <div className="card faq-card">
                <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed faq-title-text" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    About us
                    </button>
                </h2>
                </div>

                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    This website was made by two Web Developers, Christian Hernández and Marta Camacho, who are sport and programming lovers. This was created during the Covid19 restrictions, having in mind that people cannot do sport at the gym and that we are staying at home more than ever.
                    </div>
                </div>
            </div>
            <div className="card faq-card">
                <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed faq-title-text" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How does FitLine work?
                    </button>
                </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                It's super easy! Just by signing up, you will join the community (it's free forever), and you will be ready to check the best workouts on the internet (and add your own!).
                    </div>
                </div>
            </div>
            <div className="card faq-card">
                <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed faq-title-text" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Can I upload content?
                    </button>
                </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                    Of course! As long as you have a YouTube video link, you can share your content with the community.
                    </div>
                </div>
            </div>
            <div className="card faq-card">
                <div className="card-header" id="headingFour">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed faq-title-text" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    How does the calendar work?
                    </button>
                </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                    The calendar is focused on daily muscle group workouts, tailored and changed every month.
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Faq
