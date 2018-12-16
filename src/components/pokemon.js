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
  renderL() {
    const { pokemon } = this.props
    let moreInfo = this.state.moreInfo
    return (
      <div className="pokemon">
        <button
          type="button"
          className="pokemon__sprite"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`})`
          }}
        />
        <p className="pokemon__name">{pokemon.name}</p>
      </div>
    )
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

    console.log(pokemon)
    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemon.id
    }.png`
    let typeCls = 'label type type-' + type
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
          <img className="avatar center-block" src={img} />
        </div>
        <div className="panel-footer">
          <div className="text-center">
            <a
              href="/pokedex/#Poison"
              ng-repeat="type in pokemon.type"
              className="ng-scope"
            >
              <span className={typeCls}>{type.toString().toUpperCase()}</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  renderX() {
    const { pokemon } = this.props
    let moreInfo = this.state.moreInfo
    console.log(pokemon)
    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemon.id
    }.png`
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>
          <p className="card-text">
            <ul className="list-group">
              {moreInfo &&
                moreInfo.abilities &&
                moreInfo.abilities.map((item, key) => {
                  console.log(item)
                  return (
                    <li className="list-group-item" key={key}>
                      {item.ability.name}
                    </li>
                  )
                })}
            </ul>
          </p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={this.onMoreInfoClick}
          >
            Load Pokemon Information
          </a>
        </div>
      </div>
    )
  }
}

export default Pokemon
