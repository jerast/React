import { BandAdd } from './components/BandAdd'
import { BandChart } from './components/BandChart'
import { BandList } from './components/BandList'
import { ConnectionStatus } from './components/ConnectionStatus'

export const App = () => {

  return (
    <div className="container">
      <div className="alert">
        <ConnectionStatus />
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col">
          <BandChart />
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  )
}