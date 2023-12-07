import {Component} from 'react'
import {v4} from 'uuid'

import {
  CCMainBg,
  AddCounterCont,
  CharCounHead,
  CharCountInput,
  CharCountBtn,
  CharCountInputCont,
  YellowParaDiv,
  YellowHead,
  YellowPara,
  YellowImg,
  UItemsList,
  ListItem,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {searchInput: '', itemsList: []}

  onClickedAdd = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newObj = {
      id: v4(),
      item: searchInput,
      length: searchInput.length,
    }
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newObj],
      searchInput: '',
    }))
  }

  onEntered = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, itemsList} = this.state
    console.log(itemsList)
    return (
      <CCMainBg>
        <AddCounterCont BgColor="#ffc533" brtl={20} brbl={20} brtr={0} brbr={0}>
          <YellowParaDiv>
            {' '}
            <YellowHead>Count the characters like a Boss</YellowHead>
          </YellowParaDiv>
          {itemsList.length === 0 ? (
            <YellowImg
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <UItemsList>
              {itemsList.map(eachobj => (
                <ListItem key={eachobj.id}>
                  <YellowPara>
                    {eachobj.item}: {eachobj.length}
                  </YellowPara>
                </ListItem>
              ))}
            </UItemsList>
          )}
        </AddCounterCont>
        <AddCounterCont BgColor="#0f172a" brtl={0} brbl={0} brtr={20} brbr={20}>
          <CharCounHead>Character Counter</CharCounHead>
          <CharCountInputCont onSubmit={this.onClickedAdd}>
            <CharCountInput
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onEntered}
              value={searchInput}
            />
            <CharCountBtn type="submit">Add</CharCountBtn>
          </CharCountInputCont>
        </AddCounterCont>
      </CCMainBg>
    )
  }
}

export default CharacterCounter
