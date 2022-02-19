import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  // props 넣어주기
  const {
    is_flex,
    flex_start,
    width,
    height,
    margin,
    marginBottom,
    padding,
    bg,
    textAlign,
    _onClick,
    children,
    is_row,
    border,
    borderRadius,
    boxShadow,
  } = props;

  // 위에 props에서 children만 빼고 스타일 속성끼리 묶은 것!
  const styles = {
    is_flex: is_flex,
    flex_start,
    width: width,
    height: height,
    margin: margin,
    marginBottom: marginBottom,
    padding: padding,
    bg: bg,
    textAlign: textAlign,
    is_row,
    border,
    borderRadius,
    boxShadow,
  };
  return (
    // 전체 감싸주는거 안에 하나는 꼭 포함되어 있어야되는데, div는 비효율적이니까 React.Fragment 사용
    <React.Fragment>
      {/* 하위에 다른 컴포넌트 같이 쓰려면 children 써야 함 */}
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  flex_start: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: null,
  textAlign: "",
  _onClick: () => {},
  is_row: false,
  marginBottom: '',
  border:'',
  borderRadius:'',
  boxShadow:'',
};

// defaultProps를 가지고 스타일 어떻게 줄건지
const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : "")}
  ${(props) => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.marginBottom ? `margin-bottom: ${props.marginBottom};` : "")}
  ${(props) => (props.bg ? `background: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;  `
      : ""}

  // detail 페이지 댓글&프로필 정렬
  ${(props) =>
    props.flex_start
      ? `display: flex; align-items: start; justify-content: space-between;  `
      : ""}
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign}` : "")}
  ${(props) => (props.is_row ? `display: inline-flex;` : "")}
`;

export default Grid;
