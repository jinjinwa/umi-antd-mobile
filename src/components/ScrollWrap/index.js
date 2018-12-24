import React, { PureComponent } from 'react';
import BScroll from 'better-scroll';
import PropTypes from 'prop-types';

class ScrollWrap extends PureComponent {
  componentDidMount() {
    const { wrapId, getRef } = this.props;
    if (getRef) {
      getRef(this.myRef);
    }
    this.scroll = new BScroll(document.getElementById(wrapId), {
      click: true,
      scrollY: true,
      mouseWheel: true,
    });
  }

  render() {
    const { children, wrapId, wrapClass, height } = this.props;
    return (
      <div
        style={{ overflow: 'hidden', height }}
        id={wrapId}
        className={wrapClass}
        ref={ref => {
          this.myRef = ref;
        }}
      >
        <div className="wrap">{children}</div>
      </div>
    );
  }
}

ScrollWrap.defaultProps = {
  children: null,
  wrapId: '',
  wrapClass: '',
};

ScrollWrap.propTypes = {
  children: PropTypes.node,
  wrapId: PropTypes.string,
  wrapClass: PropTypes.string,
};

export default ScrollWrap;
