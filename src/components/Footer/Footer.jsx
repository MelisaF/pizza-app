import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container className="pt-5">
                <Row className="text-center">
                    <Col>
                        <p className="fs-5">SQUASH MARKET</p>
                        <p>Somos una pequeña empresa dedicada a la comercialización de productos deportivos de primera calidad, 
                            tanto en nuestros productos como en la experiencia del usuario. </p>
                    </Col>
                    <Col>
                        <p className="fs-5">SEGUINOS EN NUESTRAS REDES</p>
                        <ul className="d-flex text-center justify-content-center">
                            <li className="list-unstyled  ms-2 me-2"><a className="linksIcons instagram" href="https://www.instagram.com/indoor.market/"><i className="fab fa-instagram"></i></a></li>
                            <li className="list-unstyled  ms-2 me-2"><a className="linksIcons twitter" href="https://twitter.com/theindoormarket"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-unstyled  ms-2 me-2"><a className="linksIcons facebook" href="https://www.facebook.com/squashmarket"><i className="fab fa-facebook"></i></a></li>
                            <li className="list-unstyled  ms-2 me-2"><a className="linksIcons whatsapp" href="https://api.whatsapp.com/send/?phone=5492215914772&text&app_absent=0"><i className="fab fa-whatsapp"></i></a></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="m-1"/>
            </Container>
            <p className="text-center pt-3 m-0 copyright">Copyright SQUASH MARKET - 2021. Todos los derechos reservados. Defensa de lxs consumidores: para reclamos <a className="text-decoration-none ingA" href="https://www.argentina.gob.ar/produccion/defensadelconsumidor">INGRESE AQUI</a>. E-Commerce creado por programador Agustín Menegat</p>. 
        </footer>
    )
}

export default Footer;