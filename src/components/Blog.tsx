import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const blogData = [
    {
        id: 1,
        image: "https://img.freepik.com/premium-vector/man-learning-lift-weights-with-online-teacher_301430-201.jpg",
        time: "15 Nov 2022",
        title: "Exercise",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
        link: "https://www.google.com",
    },
    {
        id: 2,
        image: "https://img.freepik.com/premium-vector/workout-gym-concept-flat-cartoon-design-man-doing-exercises-with-dumbbells-sports-club_9209-7739.jpg?w=1800",
        time: "10 Jan 2023",
        title: "Fitness tips",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
        link: "https://www.facebook.com",
    },
    {
        id: 3,
        image: "https://img.freepik.com/premium-vector/fitness-trainer-concept-workout-gym-with-professional-athlete-healthy-active-lifestyle_566886-1843.jpg?w=1800",
        time: "07 Fev 2023",
        title: "Consistency",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
        link: "https://www.twitter.com",
    },
];

function Blog() {
    return (
        <section id="blog" className="block blog-block container px-5">
            <Container fluid>
                <div className="title-holder">
                    <h2>Blog</h2>
                    <div className="subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </div>
                <Row>
                    {blogData.map((blog) => {
                        return (
                            <Col sm={4} key={blog.id}>
                                <div className="holder">
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={blog.image}
                                        />
                                        <Card.Body>
                                            <time>{blog.time}</time>
                                            <Card.Title>
                                                {blog.title}
                                            </Card.Title>
                                            <Card.Text>
                                                {blog.description}
                                            </Card.Text>
                                            <a
                                                href={blog.link}
                                                className="btn btn-primary"
                                            >
                                                Read More{" "}
                                                <i className="fas fa-chevron-right"></i>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Blog;
