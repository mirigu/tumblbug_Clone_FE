import React from "react";
import styled from "styled-components";
import { Text, Grid } from "../elements";

const RankPost = (props) => {
  const { category, nickname, image, title, targetAmount, totalAmount } = props;

  const rate = Math.floor((totalAmount / targetAmount) * 100);

  return (
    <React.Fragment>
      <SidePostCard>
        <PostImg src={image} />
        <Rank>1</Rank>
        <PostContent>
          <Grid>
            <A href="#">{category}</A>
            <Span>ㅣ</Span>
            <A href="#">{nickname}</A>
          </Grid>
          <Title>
            {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </Title>
          <Text weight="600" size="13px" color="rgb(255, 87, 87)">
            {rate}%
          </Text>
        </PostContent>
      </SidePostCard>
    </React.Fragment>
  );
};

const SidePostCard = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
`;

const PostImg = styled.img`
  width: 108px;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease 0s;
  }
`;

const Rank = styled.div`
  width: 43px;
  display: flex;
  align-items: flex-start;
  flex: 0 0 auto;
  justify-content: center;
  color: rgb(240 80 62 / 90%);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const A = styled.a`
  font-size: 11.5px;
  color: rgb(109 109 109);
  letter-spacing: -0.015em;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const Span = styled.span`
  font-size: 11px;
  color: rgb(109, 109, 109);
`;

const Title = styled.a`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export default RankPost;
