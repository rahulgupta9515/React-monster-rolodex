import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.componenent';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = { 
      monsters: [],
      serachFiled : '' 
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users => this.setState({monsters:users}))
  }

  handlechange = (e) => {
    this.setState({serachFiled: e.target.value});
  }

  render(){
    const {monsters, serachFiled} = this.state;
    // Similiar to - const monster = this.state.monsters
    // const serachFiled = this.state.serachFiled

    const filterMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(serachFiled.toLowerCase())
      )
      
    return(
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox
            placeholder = 'Search Monster'
            handlechange = {this.handlechange}
          />
          <CardList monsters = {filterMonsters}/>
      </div>
    );
  }
}

export default App;
