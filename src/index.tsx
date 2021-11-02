import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container, Header, Segment } from "semantic-ui-react";

import { hot } from "react-hot-loader/root";

const App: React.FC = () => {
    const themeFont = { fontFamily: "Barlow Condensed" }
    return <Container style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Segment style={{ width: "100%", textAlign: "center" }}>
            <Header style={{ ...themeFont, fontSize: "64pt" }}>fukushima-computer-system</Header>
            <Header style={{ ...themeFont, fontSize: "32pt" }}>github.io</Header>
        </Segment>
    </Container>
}

export default hot(App);

ReactDOM.render(
    <App />,
    document.getElementById("app"));
