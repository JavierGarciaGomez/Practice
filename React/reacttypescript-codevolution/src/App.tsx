import React from "react";

import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import { ButtonEvent } from "./components/ButtonEvent";
import CounterClass from "./components/class/CounterClass";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserC } from "./components/context/UserC";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { ButtonHTML } from "./components/html/ButtonHTML";
import { CustomComponent } from "./components/html/CustomComponent";
import { InputHTML } from "./components/html/InputHTML";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Text } from "./components/polymorphic/Text";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { RandomNumbers } from "./components/restriction/RandomNumbers";
import { Status } from "./components/Status";
import { Toast } from "./components/templateLiterals/Toast";
import { Counter } from "./state/Counter";
import { LoggedIn } from "./state/LoggedIn";
import { User } from "./state/User";
import { UserAssertion } from "./state/UserAssertion";

function App() {
  const personName = {
    first: "John",
    last: "Doe",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];

  const handleClick = () => {
    console.log("handle click");
  };

  const handleClickEvent = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log("handle click", event, id);
  };
  return (
    <div className="App">
      <Greet name={"Javier"} unreadMsgs={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success"></Status>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Hola</Heading>
      </Oscar>
      {/* optional */}
      <Greet name={"Javier"} isLoggedIn={true} />
      <Button handleClick={handleClick} />
      <ButtonEvent handleClickEvent={handleClickEvent} />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <Container
        styles={{ border: "1px red solid", padding: "1rem", margin: "0 auto" }}
      >
        Lesson 7
      </Container>
      <h3>Lesson 8: destructuring props and types in separate folder</h3>
      <h3>Lesson 9: useState</h3>
      <LoggedIn />
      <h3>Lesson 10: useState future value</h3>
      <User />
      <h3>Lesson 11: useState asserstion</h3>
      <UserAssertion />
      <h3>Lesson 12: useReducer</h3>
      <Counter />
      <h3>Lesson 14: useContext</h3>
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
      <h3>Lesson 15: useContext Future value</h3>
      <UserContextProvider>
        <UserC />
      </UserContextProvider>
      <h3>Lesson 16: useRef Hook</h3>
      <DomRef />
      <MutableRef />
      <h3>Lesson 17: Class Component</h3>
      <CounterClass message="counter message" />
      <h3>Lesson 18: Component prop</h3>
      <Private isLoggedIn={true} component={Profile} />
      <h3>Lesson 19: Generics</h3>
      <List
        items={["item 1", "item 2", "item 3"]}
        onClick={(item) => console.log(item)}
      />
      <h3>Lesson 20: Restricting</h3>
      <RandomNumbers value={4} isPositive={true} />
      <h3>Lesson 21: Template</h3>
      <Toast position="center" />
      <h3>Lesson 22: Wrapping HTML Elements</h3>
      <ButtonHTML variant="primary" onClick={() => console.log("clicked")}>
        Botón
      </ButtonHTML>
      <InputHTML type="password" />
      <h3>Lesson 23: Extracting Component PropTypes</h3>
      <CustomComponent name="Javier" isLoggedIn={false} />
      <h3>Lesson 24: Polymorphobic Component</h3>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
