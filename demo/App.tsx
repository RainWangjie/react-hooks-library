import * as React from 'react'
import { hot } from 'react-hot-loader'

import { useQuery } from '../src/index'

import './index.scss'

const Demo: React.FunctionComponent = () => {
  const query = useQuery({
    query: () =>
      fetch('https://jsonplaceholder.typicode.com/todos/1').then(response =>
        response.json()
      ),
  })

  return <div>{JSON.stringify(query.data)}</div>
}

export const App = hot(module)(Demo)