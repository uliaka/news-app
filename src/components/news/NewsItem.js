import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment'

const ItemContainer = styled.div`
  box-shadow: 0px 0px 6px 3px rgba(219,219,219,1);
  max-width: 400px;
  max-height: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
`
const ImageSection = styled.div`
  text-align: center;
  flex: 1;
`
const Image = styled.img`
  max-width: 400px;
  max-height: 200px;
`
const Title = styled.div`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
`
const Description = styled.div`
  padding: 10px;
  max-height: 200px;
  overflow-wrap: break-word;
  word-wrap: break-word;
`
const InfoSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`
const Info = styled.span`
  font-size: 13px;
  color: #565555;
`
const Dot = styled.div`
  height: 5px;
  width: 5px;
  background-color: #808080;
  border-radius: 50%;
  margin: 0 8px 0 8px;
`

const NewsItem = (props) => {
  const { item } = props;
  return (
    <ItemContainer>
      <ImageSection>
        <Image
          src={item.urlToImage}
        />
      </ImageSection>
      <Title>
        {item.title}
      </Title>
      <Description>
        {item.description}
      </Description>
      <InfoSection>
        <Info>{item.source["name"]}</Info>
        {item.author &&
          <>
            <Dot />
            <Info>{item.author}</Info>
          </>
        }
        <Dot />
        <Info>{moment(item.publishedAt).fromNow()}</Info>
      </InfoSection>
    </ItemContainer>
  );
}

export default NewsItem
