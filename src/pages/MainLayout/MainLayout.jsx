import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";

import "./MainLayout.scss";

function Layout() {
    return (
      <>
        <Container>
          <div className="Layout__container">
            <Header />
          </div>
        </Container>
      </>
    );
}

export default Layout;
