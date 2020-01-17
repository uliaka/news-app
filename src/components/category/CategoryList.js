import React from 'react';
import styled from 'styled-components';

const CategoryListContainer = styled.div`
  display: flex;
`
const CategoryContainer = styled.div`
  width: max-content;
  max-height: 50px;
  display: flex;
  border-radius: 10px;
  color: white;
  background-color: #A47ADC;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: -3px 3px 17px 3px rgba(207,207,207,1);
    transition: 0.2s;
  }
`
const CategoryTitle = styled.div`
  padding: 10px;
  font-size: 18px;
`

const CategoryList = (props) => {
  const categories = [
    { id: 1, title: 'business' }, { id: 2, title: 'entertainment' }, { id: 3, title: 'general' }, { id: 4, title: 'health' },
    { id: 5, title: 'science' }, { id: 6, title: 'sports' }, { id: 7, title: 'technology' },
  ];
  
  return (
    <CategoryListContainer>
      {categories.map(category =>
        <CategoryContainer onClick={(e) => props.onCategoryClick(e.target.textContent)}>
          <CategoryTitle>
            {category.title}
          </CategoryTitle>
        </CategoryContainer>
      )}
    </CategoryListContainer>
  );
}

export default CategoryList;
