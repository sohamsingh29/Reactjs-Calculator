import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.div``;

const AccordianItem = styled.div``;
const Description = styled.div`
  /* display: ${({ visible }) => (visible ? "flex" : "none")}; */
  display:flex;
  width: 300px;
  height: 400px;
  background: red;
`;
const VButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 50px;
  background: red;
  color: white;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #c3c3c3;
`;

const Accordian = () => {
  const [open, setOpen] = useState([false, false]);
  return (
    <div>
      <AccordianItem>
        <Head>
          <Title>HELLO</Title>
          <VButton
            onClick={() => {
              let l = open;
              l[0] = !l[0];
              console.log(l);
              setOpen(l);
            }}
          >
            plus icon
          </VButton>
        </Head>
        {open[0] ? (
          <Description>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsum
          </Description>
        ) : null}
      </AccordianItem>
      <AccordianItem>
        <Head>
          <Title>HELLO</Title>
          <VButton
            onClick={() => {
              let l = open;
              l[1] = !l[1];
              console.log(l);
              setOpen(l);
            }}
          >
            plus icon
          </VButton>
        </Head>
        <Description visible={open[1]}>Lorem ipsum</Description>
      </AccordianItem>
    </div>
  );
};

export default Accordian;
