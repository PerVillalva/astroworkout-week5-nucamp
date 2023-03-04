import { Container, Row, Col, Card } from "react-bootstrap";
import AstroBox from "@/assets/astrobox.jpeg";
import AstroCurl from "@/assets/astrofeaturecurl.jpeg";
import AstroCommunity from "@/assets/astrocommunity.jpeg";

interface data {
    id: number;
    image: string;
    icon: string;
    title: string;
    description: string;
}

const featuresData: data[] = [
    {
        id: 1,
        image: AstroCurl,
        icon: "fas fa-dumbbell",
        title: "Workout Planner",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
        id: 2,
        image: AstroBox,
        icon: "fas fa-calendar",
        title: "Training History",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
    {
        id: 3,
        image: AstroCommunity,
        icon: "fas fa-globe",
        title: "Community",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
    },
];

const Features = () => {
    return (
        <section
            id="features"
            className="container block features-block bg-light px-5"
        >
            <Container fluid>
                <div className="title-holder">
                    <h2>Features</h2>
                    <div className="subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </div>

                <Row>
                    {featuresData.map((feature) => {
                        return (
                            <Col sm={4} className="pb-4">
                                <Card className="feature-card">
                                    <Card.Img
                                        variant="top"
                                        src={feature.image}
                                    />
                                    <Card.Body>
                                        <Card.Title key={feature.id}>
                                            <span className="icon">
                                                <i className={feature.icon} />
                                            </span>
                                            {feature.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {feature.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                {/* </Row> */}
            </Container>
        </section>
    );
};

export default Features;
