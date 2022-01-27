import React from 'react';
import { Nav, Tab, Text, Badge, Paragraph, Heading } from 'bootstyle';

function SampleNav() {
  return (
    <>
      <Heading size={2}>Nav</Heading>
      <Nav variant="tabs" styleName="mb-3">
        <Nav.Link>Ron</Nav.Link>
        <Nav.Link>Patrik</Nav.Link>
        <Nav.Link>Anton</Nav.Link>
        <Nav.Link>Markus</Nav.Link>
        <Nav.Link active>active</Nav.Link>
        <Nav.Link disabled>disabled</Nav.Link>
      </Nav>
      <Nav variant="pills" styleName="mb-3">
        <Nav.Link>Ron</Nav.Link>
        <Nav.Link>Patrik</Nav.Link>
        <Nav.Link>Anton</Nav.Link>
        <Nav.Link>Markus</Nav.Link>
        <Nav.Link active>active</Nav.Link>
        <Nav.Link disabled>disabled</Nav.Link>
      </Nav>

      <Tab.Provider defaultActiveTarget="pane-1">
        <Nav variant="tabs">
          <Nav.Link toggle={Tab} target="pane-1">
            <Text>Page 1</Text>
          </Nav.Link>
          <Nav.Link toggle={Tab} target="pane-2">
            <Text>Page 2</Text>{' '}
            <Badge styleName="bg-secondary">
              <Text>8</Text>
            </Badge>
          </Nav.Link>
          <Nav.Link toggle={Tab} target="pane-3">
            <Text>Page 3</Text>
          </Nav.Link>
        </Nav>

        <Tab.Content styleName="p-3">
          <Tab.Pane id="pane-1">
            <Paragraph>Page Content 1</Paragraph>
          </Tab.Pane>
          <Tab.Pane id="pane-2">
            <Paragraph>Page Content 2</Paragraph>
          </Tab.Pane>
          <Tab.Pane id="pane-3">
            <Paragraph>Page Content 3</Paragraph>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Provider>
    </>
  );
}

export default SampleNav;
