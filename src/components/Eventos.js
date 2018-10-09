import React from 'react';
import Evento from './Evento';

class Eventos extends React.Component {
  render() {
    return( 
      <div className="uk-child-width-1-4@m" uk-grid="true">
        { Object.keys(this.props.eventos).map(key => (
          <Evento
            key={key}
            info={this.props.eventos[key]}
          />
        ))}
      </div>
    );
  };
};

export default Eventos;