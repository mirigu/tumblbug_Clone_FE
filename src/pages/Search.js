import React from 'react';
import styled from 'styled-components';
import { Header } from '../components';
import SearchPost from '../components/SearchPost';
import { Grid } from '../elements';

import QueryString from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as articlesActions } from '../redux/modules/articles';

const Search = (props) => {
  const dispatch = useDispatch();
  const search = decodeURI(props.location.search).split('=')[1];

  const searchList = useSelector((store) => store.articles.search_list);

  React.useEffect(() => {
    dispatch(articlesActions.searchDB(search));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <PostBox>
          {searchList
            ? searchList.map((a, i) => {
                return <SearchPost key={i} {...a} />;
              })
            : ''}
        </PostBox>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 100%;
  max-width: 1160px;
  margin: 0px auto;
  padding: 56px 0px;
`;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -6px;
`;
export default Search;
