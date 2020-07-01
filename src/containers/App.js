import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          food: json,
          isLoaded: true,
        })
      })
  }
  render() {
    const { isLoaded, food } = this.state;
    console.log(food['categories'][0].strCategory)
    if(!isLoaded) {
      return <div>loading</div>;
    } else {
      return (
        <div className="App">
          <ul>
          
          </ul>
        </div>
      );
    }
    
  }
}

/* AsyncApp.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
}
const mapStateToProps = state => ({
  books: state,
  filter: state.filter,
});
 */

export default App;
