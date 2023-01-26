import React from 'react';

const {
  Provider,
  Consumer,
} = React.createContext();

class ContextProvider extends React.Component {
  render() {
    const {
      children,
      ...props
    } = this.props;

    return (
      <Provider value={props}>
        {children}
      </Provider>
    )
  }
}

function withContext(WrappedComponent) {
  return (props) => (
    <Consumer>
      {(value) => (
        <WrappedComponent
          {...value}
          {...props}
        />
      )}
    </Consumer>
  )
}

export {
  ContextProvider,
  withContext,
}
