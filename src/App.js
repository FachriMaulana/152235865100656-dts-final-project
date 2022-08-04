import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchInput,
  SearchIcon,
} from "./components/headerComponent";

import {
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText,
  Footer,
} from "./components/recipeComponent";

const APP_ID = "140838f7";
const APP_KEY = "de76486d5d95737fe23d1f185188d2b4	";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Bahan-bahan</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Nama Bahan</th>
              <th>Takaran</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </IngredientsText>
          <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>
          bahan-bahan
        </IngredientsText>
        {/* <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          Lihat Resep
        </SeeMoreText> */}
      </RecipeContainer>
    </>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeLIst, updateRecipeLIst] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeLIst(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppNameComponent>
          {/* <AppIcon src="recipebook.svg" /> */}
          Resep Online
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput
            placeholder="Cari Resep disini"
            onChange={onTextChange}
          />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeLIst.length ? (
          recipeLIst.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder src="recipebook.svg" />
        )}
      </RecipeListContainer>
      <Footer>M. Fachri Maulana</Footer>
    </Container>
  );
}

export default App;
