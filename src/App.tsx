import { Button, Col, Container, Row } from "react-bootstrap";
import Counter from "./components/Counter";
import RecipeCard from "./components/RecipeCard";
import RecipeItemList from "./components/RecipeItemList";
import RecipeDialog from "./components/RecipeDialog";
import { useState } from "react";

function App() {
  const [showDialog, setShowDialog] = useState(false)

  function openDialog() {
    setShowDialog(true)
  }

  function closeDialog() {
    setShowDialog(false)
  }

  return (
    <Container>
      <h1>My very REact</h1>
      <Counter initialCount={7} onChange={(c) => console.log(c)}/>
      <Row>
        <Col md={3}>
          <RecipeCard
            title="My awesome kebab"
            description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
            pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
            items={[]}
            />
        </Col>
        <Col md={3}>
          <RecipeCard
            title="My awesome kebab"
            description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
            pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
            items={[]}
            />
        </Col>
        <Col md={3}>
          <RecipeCard
            title="My awesome kebab"
            description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
            pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
            items={[]}
            />
        </Col>
        <Col md={3}>
          <RecipeCard
            title="My awesome kebab"
            description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
            pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
            items={[]}
            />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <RecipeCard
            title="My awesome kebab"
            description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
            pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
            items={[]}
            />
        </Col>
        <Col md={3}>
          <RecipeCard
            title="My awesome kebab"
            description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
            pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
            items={[]}
            />
        </Col>
        <Col md={3}>
          <RecipeCard
            title="My awesome kebab"
            description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
            pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
            items={[]}
            />
        </Col>
        <Col md={3}>
          <RecipeCard
            title="My awesome kebab"
            description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
            pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
            items={[
          {name:'Lamb minced meat, kg', amount: 5},
          {name:'Onions, kg', amount: 2},
          {name:'Salt, tbsp', amount: 5},
          {name:'Pepper, tbsp', amount: 4},
          {name:'Hot chili, tsp', amount: 3},
        ]}
            />
        </Col>
      </Row>
      <RecipeItemList items={[{name: 'diipa', amount: 0}, {name: 'daapa', amount: 10}, {name: 'duu', amount: 100}]}/>
      <Button onClick={openDialog}>Näytä</Button>
      <RecipeDialog
        title="diipa"
        description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
        pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
        items={[
          {name:'Lamb minced meat, kg', amount: 5},
          {name:'Onions, kg', amount: 2},
          {name:'Salt, tbsp', amount: 5},
          {name:'Pepper, tbsp', amount: 4},
          {name:'Hot chili, tsp', amount: 3},
        ]}
        show={showDialog}
        hide={closeDialog}
      />
    </Container>
  )
}

export default App
