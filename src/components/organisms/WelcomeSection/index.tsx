import React from "react";
import DushedCard from "../../molecules/DushedCard";
import Ranking from "../../molecules/Ranking";
import Text from "../../atoms/Text";
import logo from "../../../logo.svg";

const WelcomeSection = () => {
  return (
    <DushedCard width="150px" height="150px" bg="#d86d6d" borderColor="black">
      <img src={logo} alt="logo" />
      <div style={{ float: "right" }}>
        <DushedCard
          width="200px"
          height="80px"
          bg="#f9f4da"
          rotation="5deg"
          borderColor="black"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text variant="bold" color="black">
              Roliver Javier Rodriguez
            </Text>
            <Text variant="normal" color="black">
              React FrontEnd Developer
            </Text>
            <Ranking total={5} />
          </div>
        </DushedCard>
      </div>
    </DushedCard>
  );
};

export default WelcomeSection;
