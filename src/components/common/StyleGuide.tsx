import ModalDropDown from "./DropDown/ModalDropDown";

import Button from "./Button";
import styled from "@emotion/styled";
// import Search from "../home/Search";
const StyleGuide = () => {
  return (
    <Style>
      <section>
        <div>
          <h1 className="ModalDropDown">ModalDropDown</h1>
          <ModalDropDown>
            <li className="dropdown-item">1</li>
            <li className="dropdown-item">2</li>
            <li className="dropdown-item">3</li>
            <li className="dropdown-item">4</li>
          </ModalDropDown>
        </div>
        <div>
          <h1 className="ModalDropDown">AlignmentDropDown</h1>
        </div>
      </section>
      <section>
        <div>
          <h1 className="SearchFormContainer">SearchFormContainer</h1>
          {/* <Search /> */}
        </div>
      </section>
      <section>
        <div>
          <h1 className="Button">Button Default</h1>
          <Button>번역</Button>
        </div>
      </section>
    </Style>
  );
};

export default StyleGuide;

const Style = styled.main`
  position: relative;
  min-height: 100vh;
  width: 1280px;
  section {
    display: flex;
    flex: wrap;
  }
  section > div {
    position: relative;
    margin: 50px 100px;
  }
  h1 {
    margin-bottom: 20px;
  }
  .ModalDropDown {
    position: relative;
  }
`;
