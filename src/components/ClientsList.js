import { useState } from "react";
import styled from "styled-components";
import clientsData from '../LocalData/ClientsData.json'

const Container = styled.div`
  padding: 1rem 3rem;
`;

const Title = styled.h1`
`;

const Text = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;
const ClientItem = styled.div`
  width: 50%;
  display: flex;
  margin: 0 2rem;
  padding: 0.6rem 0;
  align-items: center;
  border-bottom: 0.2rem solid  #82828212;
  & > span {
      width: 20%;
  }
  & > div {
    width: 60%;
    display: flex;
    padding: 0 2rem;
    box-sizing: border-box;
    justify-content: flex-end;
  }
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: #5600e8;
`

const AdressBox = styled.div`
  width: 90%;
  height: 10rem;
  display: block;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  border-raduis: 0.1rem;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  & > h1 {
    margin: 0.8rem;
    font-weight: 600;
    font-size: 1.6rem;
  }
  & > span {
    margin: 1rem;
    font-weight: 600;
  }
`

function ClientsList() {
    const [itemIndex, setItemIndex] = useState(-1);
    return (
        <Container>
            <Title>Clients List</Title>
            {clientsData.clients.map((client) => {
                return (
                    <ClientItem key={client._id} onClick={() => setItemIndex(client._id)}>
                        <Text>{client.firstName}</Text>
                        <Text>{client.lastName}</Text>
                        {client._id == itemIndex
                            &&
                            <div>
                                <StyledCheckbox checked={true}>
                                    <Icon viewBox="0 0 24 24">
                                        <polyline points="20 6 9 17 4 12" />
                                    </Icon>
                                </StyledCheckbox>
                            </div>
                        }
                    </ClientItem>
                )
            })}
            <AdressBox>
                <Title>Details</Title>
                {itemIndex !== -1 && <Text>{"Adress: " + clientsData.clients[itemIndex]?.adress}</Text>}
            </AdressBox>
        </Container>
    );
}

export default ClientsList;