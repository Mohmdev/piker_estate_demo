import { WeboraSVG } from './white-label-svg'

import './index.scss'

export const AfterNavComponent: React.FC = () => {
  return (
    <div className="afternav--wrapper">
      <div className="afternav--container">
        <WeboraSVG />
        <p>Webora</p>
      </div>
    </div>
  )
}
