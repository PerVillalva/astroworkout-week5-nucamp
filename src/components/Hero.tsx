import AstroHero from "@/assets/astroplanetlift.jpeg";

type Props = {};

const Hero = (props: Props) => {
    return (
        <div className="container p-5 block">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-12 col-sm-8 col-lg-6">
                    <img
                        src={AstroHero}
                        className="d-block mx-lg-auto img-fluid"
                        style={{ borderRadius: "40%" }}
                        alt="Astro Lift"
                        width="700"
                        height="500"
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">
                        AstroWorkout
                    </h1>
                    <h2 className="fw-bold lh-1 mb-3">
                        A workout planner from another galaxy.
                    </h2>
                    <p className="lead">
                        Quickly design and customize responsive mobile-first
                        sites with Bootstrap, the world’s most popular front-end
                        open source toolkit, featuring Sass variables and
                        mixins, responsive grid system, extensive prebuilt
                        components, and powerful JavaScript plugins.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a
                            href="/contact"
                            type="button"
                            className="btn btn-primary btn-lg px-4 me-md-2"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
