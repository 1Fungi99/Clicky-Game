import React, { Component } from "react";
// importing character data from JSON file
import characters from "./characters.json";
// importing components
import CharacterContainer from "./components/CharacterContainer";
import CharacterCard from "./components/Cards";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// Durstenfled shuffler function
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  state = {
    characters,
    clicked: [],
    score: 0,
    highScore: 1,
    highestScore: 0
  };

  startG = characterId => {
    if (this.state.clicked.includes(characterId)) {
      this.setState({
        clicked: [],
        score: 0,
        highScore: 1
      });
    } else {
      this.state.clicked.push(characterId);

      this.setState({
        score: this.state.score + 1,
        highScore: this.state.highScore + 1
      });
      if (
        this.state.highScore >= 0 &&
        this.state.highScore > this.state.highestScore
      ) {
        this.setState({
          highestScore: this.state.highScore
        });
      }
    }
  };

  render() {
    const shuffledCharacters = shuffleArray(this.state.characters);
    return (
      <div>
        <Nav
          currentScore={this.state.score}
          highestScore={this.state.highestScore}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h2>Don't click on a character more than once!</h2>
            </div>
            <div className="col-md-6">
              <CharacterContainer>
                {shuffledCharacters.map(characters => (
                  <CharacterCard
                    key={characters.id}
                    id={characters.id}
                    image={characters.image}
                    name={characters.name}
                    onImgClick={() => this.startG(characters.id)}
                  />
                ))}
              </CharacterContainer>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
