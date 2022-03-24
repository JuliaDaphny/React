<<<<<<< HEAD
import Menu from "./components/Menu";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, Nav, Card, Form, FormControl } from "react-bootstrap";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import Cartao from "./components/Cartao";

function App() {
    return (
        <div>

            <Menu />
        
            <Cartao />
            <Cartao />

            <Container>
                <h2>Olá Mundo. Tudo bem?</h2>
                <Button variant="primary">primary</Button>
            </Container>
        </div>
    );
}

=======
import Menu from "./components/Menu";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, Nav, Card, Form, FormControl } from "react-bootstrap";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import Cartao from "./components/Cartao";

function App() {
    return (
        <div>

            <Menu />
        
            <Cartao />
            <Cartao />

            <Container>
                <h2>Olá Mundo. Tudo bem?</h2>
                <Button variant="primary">primary</Button>
            </Container>
        </div>
    );
}

>>>>>>> 4f5e9848099624b671461e7098961e9e2ee894c3
export default App;