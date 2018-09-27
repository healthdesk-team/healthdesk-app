import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import cn from '../../../utils/cn'
import style from './Ico.module.css'

// TODO: replace img by svg import when picto svg will be bought

class Ico extends PureComponent {
  constructor(props) {
    super(props)

    this.renderImg = this.renderImg.bind(this)
    this.renderWithButton = this.renderWithButton.bind(this)
  }


  renderImg() {
    const { type, className, size } = this.props

    return <img className={cn([className, style[size], style.picto])} src={`./img/ico/${type}.png`} alt={`${type} pictogram`} />
  }

  renderWithButton() {
    const { onClick } = this.props
    return (
      <div
        className={style.button}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyPress={({ key }) => key === 'Enter' && onClick()}
      >
        {this.renderImg()}
      </div>
    )
  }

  render() {
    const { onClick } = this.props
    if (onClick) return this.renderWithButton()
    return this.renderImg()
  }
}

Ico.propTypes = {
  type: PropTypes.oneOf([
    'user',
    'add-user',
    'note-pad',
  ]).isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

Ico.defaultProps = {
  onClick: noop,
  className: '',
}

export default Ico
