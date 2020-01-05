import React, { PureComponent } from 'react'

class Pokemon extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      moreInfo: {}
    }
    this.onMoreInfoClick = this.onMoreInfoClick.bind(this)
  }
  componentWillMount() {
    this.onMoreInfoClick()
  }
  onMoreInfoClick() {
    let pokemonId = this.props.pokemon.id
    let self = this
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId + '/')
      .then(data => {
        if (data.ok) {
          return data.json()
        }
      })
      .then(data => {
        self.setState({
          moreInfo: data
        })
      })
  }

  render() {
    const { pokemon } = this.props
    let moreInfo = this.state.moreInfo
    let type =
      (moreInfo &&
        moreInfo.types &&
        moreInfo.types.length > 0 &&
        moreInfo.types[0].type &&
        moreInfo.types[0].type.name) ||
      'N/A'
    let typeH =
      (moreInfo &&
        moreInfo.types &&
        moreInfo.types.length > 1 &&
        moreInfo.types[1].type &&
        moreInfo.types[1].type.name) ||
      'N/A'

    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemon.id
    }.png`
    let typeCls = 'label type type-' + type
    let moves = moreInfo && moreInfo.types ? moreInfo.moves : []
    return (
      <div className="pokemon panel panel-primary">
        <div className="panel-heading">
          <h1 className="">
            {pokemon.name}
            <small className="" style={{ marginLeft: '5px' }}>
              {typeH !== 'N/A'
                ? typeH.toString().toUpperCase()
                : type.toString().toUpperCase()}{' '}
              Pokémon
            </small>
            <span className="label label-primary pull-right">
              #{pokemon.id}
            </span>
          </h1>
        </div>
        <div className="panel-body">
          <img className="avatar center-block" alt="avatar" src={img} />
        </div>
        <div className="panel-footer">
          <div className="text-center">
              <span className={typeCls}>{type.toString().toUpperCase()}</span>
            <br />
            <span style={{ color: 'black' }}>#{moves.length} moves</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Pokemon
