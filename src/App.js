import React from 'react';
import Header from './../src/header'
import Grid from '@material-ui/core/Grid';
import Article from './../src/article'
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { fetchData } from '../src/action'


class App extends React.Component{
  componentDidMount() {
    this.props.onFetchData()
  }
render(){
  return (
    <div className="App">
      <Header />
      <Container maxWidth="md">
        <Grid xs={12}>
          <Article />
          <Article />
          <Article />
          {this.props.data.map(<ul>
          <li>id: {this.props.data.status}</li>
        
          </ul>)}
        </Grid>
      </Container>

    </div>
  );
}
 
}
const mapStatetoProps = (state) => {
  return { num: state.num, data: state.data, error: state.error }
}

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) }
}


export default connect(mapStatetoProps, mapDispatchprops)(App);
