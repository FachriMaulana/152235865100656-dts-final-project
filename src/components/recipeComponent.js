import styled from "styled-components";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  widht: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;
export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;
export const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  cursor: pointer;
  padding: 10px 15px;
  boorder-radius: 4px;
  color: black;
  text-align: center;
  margin-bottom: 12px;
`;
export const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;

export const Footer = styled.div`
  color: white;
  background-color: blue;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
