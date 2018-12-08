import React, {Component} from 'react';
import { Container, CanvasContainer } from './styled-components';
import PainterTools from './components/painterTools';
import { connect } from 'react-redux';
import { colors, sizes } from '../../../../utils';
import Socket from '../../../../api/socket';

type Props = {
  isCurrentUserPainter: boolean,
  tableId: ?number,
  userId: ?number,
}

type State = {
  canvasHeight: number,
  canvasWidth: number,
  activeColorId: number,
  activeColor: string,
  activeSizeId: number,
  activeSize: number,
  mouseDown: boolean
}

class Canvas extends Component<Props, State> {
  state = {
    canvasHeight: 0,
    canvasWidth: 0,
    activeColorId: 0,
    activeColor: colors[0].color,
    activeSizeId: 0,
    activeSize: sizes[0].size,
    mouseDown: false
  }

  componentWillMount() {
    Socket.socket.on('drawImage', this.paintFromSocket);
  }

  componentWillUnmount() {
    Socket.socket.on('drawImage', () => false)
  }

  componentDidMount() {
    const canvasContainer = this.refs['canvas_container'];
    this.setState({
      canvasHeight: canvasContainer.clientHeight,
      canvasWidth: canvasContainer.clientWidth
    })
  }
  
  clearCanvas = () => {
    const ctx = this.refs["canvas"].getContext("2d");
    ctx.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);
  }
  
  onMouseDown = event => {
    if (this.props.isCurrentUserPainter){
      this.paintSelf(event.clientX, event.clientY, "start");
      this.setState({ mouseDown: true });
    }
  };

  onMouseMove = event => {
    if (this.props.isCurrentUserPainter && this.state.mouseDown){
      this.paintSelf(event.clientX, event.clientY, "draw");
    }
  };

  onMouseUp = event =>{
    if (this.props.isCurrentUserPainter) {
      this.paintSelf(event.clientX, event.clientY, "end");
      this.setState({ mouseDown: false });
    }
  };

  sendDrawDataToSocket = (x: number, y: number, type: DrawType) => {
    if (this.props.tableId == null || this.props.userId == null) return;

    Socket.drawImage({
      x,
      y,
      type,
      color: this.state.activeColor,
      tableId: this.props.tableId,
      userId: this.props.userId,
      size: this.state.activeSize
    });
  }

  paintSelf = (x: number, y: number, type: DrawType) => {
    this.paint(x, y, type, this.state.activeSize, this.state.activeColor);
    this.sendDrawDataToSocket(x, y, type);
  }

  paintFromSocket = data => {
    this.paint(data.x, data.y, data.type, data.size, data.color);
  }

  paint = (x, y, type, size, color) => {
    const ctx = this.refs["canvas"].getContext("2d");
    ctx.fillStyle = "solid";
    ctx.strokeStyle = this.state.activeColor;
    ctx.lineCap = "round";
    ctx.lineWidth = this.state.activeSize;
    switch(type) {
      case 'start':
        ctx.beginPath();
        ctx.moveTo(x, y);
        return;
      case 'draw':
        ctx.lineTo(x, y);
        ctx.stroke();
        return;
      case 'end':
      default:
        ctx.closePath();
    }
  }

  onColorButtonClick = (id) => {
    const colorObject = colors.find(color => color.id === id);
    if (colorObject) {
      this.setState({
        activeColorId: id,
        activeColor: colorObject.color
      });
    }
  }

  onSizeButtonClick = (id) => {
    const sizeObject = sizes.find(size => size.id === id)
    if (sizeObject) {
      this.setState({
        activeSizeId: id,
        activeSize: sizeObject.size
      });
    }
  }

  render() {
    return (
      <Container>
        <CanvasContainer ref="canvas_container">
          <canvas
            onMouseDown={this.onMouseDown}
            onMouseMove={this.onMouseMove}
            onMouseUp={this.onMouseUp}
            ref="canvas"
            width={this.state.canvasWidth}
            height={this.state.canvasHeight}
          />
        </CanvasContainer>
        <PainterTools
          colors={colors}
          activeColorId={this.state.activeColorId}
          onColorButtonClick={this.onColorButtonClick}
          sizes={sizes}
          activeSizeId={this.state.activeSizeId}
          onSizeButtonClick={this.onSizeButtonClick}
          onClearPress={() => this.clearCanvas()}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state: ReducerState): Props => ({
  tableId: state.table.id,
  userId: state.user.id,
  isCurrentUserPainter: state.user.isPainter
})

export default connect(mapStateToProps)(Canvas);