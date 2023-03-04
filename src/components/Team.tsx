import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AstroHero from "@/assets/astroplanetlift.jpeg";

interface team {
    id: number;
    image: string;
    fbLink: string;
    twitterLink: string;
    linkedinLink: string;
    name: string;
    position: string;
    description: string;
}

const teamData: team[] = [
    {
        id: 1,
        image: "https://img.freepik.com/free-vector/cute-astronaut-king-with-crown-cartoon-icon-illustration-science-technology-icon-concept-isolated-flat-cartoon-style_138676-2380.jpg?w=1380&t=st=1677934309~exp=1677934909~hmac=ecc162f90515d84f943b44699449fe192dac923c30d3151a6c1902fd59dd0b7e",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Gabriel Hart",
        position: "CEO",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-vector/cute-astronaut-businessman-cartoon-illustration-science-business-icon-concept-flat-cartoon-style_138676-2012.jpg?w=1380&t=st=1677934347~exp=1677934947~hmac=cbd66a2851b2d9786196497ad6ca77fd28e8dc71d30e109e6a98380b79ea9cd8",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "David Antony",
        position: "Manager",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 3,
        image: "https://img.freepik.com/premium-vector/cute-astronaut-painting-drawing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-7112.jpg?w=1380",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Nicholas Perry",
        position: "UX Designer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 4,
        image: "https://img.freepik.com/free-vector/cute-astronaut-operating-laptop-with-robot-cartoon-vector-icon-illustration-science-technology-icon_138676-6609.jpg?w=1380&t=st=1677934543~exp=1677935143~hmac=fb58b60e67f96e40eb63c15f0c2791047558165ac6a21ac215b03ba612dc6af9",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Sarah Wills",
        position: "Back-end Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 5,
        image: "https://img.freepik.com/free-vector/cute-astronaut-working-laptop-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-4634.jpg?w=1380&t=st=1677934766~exp=1677935366~hmac=7fc7059a6159cb234b4971c4aaf07122ee4908bae7dbdeb01236c034d95bd886",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Sophia Pitt",
        position: "Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 6,
        image: "https://img.freepik.com/free-vector/cute-astronaut-working-laptop-moon-cartoon-vector-icon-illustration-science-technology-icon_138676-6873.jpg?w=1380&t=st=1677934644~exp=1677935244~hmac=5dd2f5516a8b20dd4b7f4d7825356bc817b37bc7f611e7d05040bc58deac84d9",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Taylor Lopez",
        position: "Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 7,
        image: "https://img.freepik.com/free-vector/astronaut-working-laptop-writing-cartoon-illustration-science-business-concept-isolated-flat-cartoon-style_138676-3447.jpg?w=1380&t=st=1677934448~exp=1677935048~hmac=2f516df626cea5d1de8cb02fcb3b9786e051c6512ea0fd120a0ad4b93f3fad31",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Ryan Giggs",
        position: "Content Writer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 8,
        image: AstroHero,
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "David Smith",
        position: "SEO Expert",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
];

function Team() {
    return (
        <section id="teams" className="block teams-block mt-5 px-5">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our Team</h2>
                    <div className="subtitle">
                        Meet a team from another planet!
                    </div>
                </div>
                <Row>
                    {teamData.map((teams) => {
                        return (
                            <Col sm={3} key={teams.id}>
                                <div className="image">
                                    <Image src={teams.image} />
                                    <div className="overlay">
                                        <div className="socials">
                                            <ul>
                                                <li>
                                                    <a href={teams.fbLink}>
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={teams.twitterLink}>
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={
                                                            teams.linkedinLink
                                                        }
                                                    >
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>{teams.name}</h3>
                                    <span className="position">
                                        {teams.position}
                                    </span>
                                    <p>{teams.description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Team;
