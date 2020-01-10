import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment'

const ItemContainer = styled.div`
  box-shadow: 0px 0px 6px 3px rgba(219,219,219,1);
  max-width: 400px;
  max-height: 700px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
`
const ImageSection = styled.div`
  text-align: center;
`
const Image = styled.img`
  width: 100%;
  max-height: 150px;
`
const Title = styled.div`
  padding: 10px;
`
const Description = styled.div`
  padding: 10px;
`
const Content = styled.div`
  border: 1px solid red;
  padding: 10px;
  display: block;
  height: 100px;
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

/*const addDots = (string) => {
  const limit = 300;
  const dots = '...';
  if (string.length > limit) {
    string = string.substring(0, limit) + dots;
  }
  return string;
}*/
const NewsItem = (props) => {
  const refElement = useRef(0)
  const { item } = props;
  
  const listLimit = (elm) =>{
    var maxHeight = 200;
    console.log('elm', elm.current.clientHeigh)
    while(elm.current.clientHeigh > maxHeight){
        const text = elm.text();
        elm.text(text.substring(0,text.length-10)).text(elm.text()+'...');
    }
  }
  listLimit(refElement)
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
      <Content ref={refElement}>
        {item.content}
      </Content>
      <InfoSection>
        <Info>{item.source["name"]}</Info>
        <Dot/>
        <Info>{item.author}</Info>
        <Dot/>
        <Info>{moment(item.publishedAt).fromNow()}</Info>
      </InfoSection>
    </ItemContainer>
  );
}

export default NewsItem
