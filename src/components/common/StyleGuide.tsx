import ModalDropDown from "./DropDown/ModalDropDown";
import AlignmentDropDown from "./DropDown/AlignmentDropDown";
import SearchFormContainer from "../../containers/home/SearchFormContainer";
import Button from "./Button";
import styled from "@emotion/styled";
const StyleGuide = () => {
  const options = [
    { name: "정렬순", status: "top" },
    { name: "최신순", status: "latest" },
    { name: "인기순", status: "popular" }
  ];
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
          <AlignmentDropDown options={options}></AlignmentDropDown>
        </div>
      </section>
      <section>
        <div>
          <h1 className="SearchFormContainer">SearchFormContainer</h1>
          <SearchFormContainer />
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
