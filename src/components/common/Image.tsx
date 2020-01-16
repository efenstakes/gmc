import React from "react";

type Props = {
  src: any;
  alt?: any;
  height?: any;
  width?: any;
  id?: any;
  style?: any;
};

export default class Image extends React.Component<Props> {
  render() {
    return (
      <img
        alt={this.props.alt}
        id={this.props.id}
        src={this.props.src}
        height={this.props.height}
        width={this.props.width}
        style={this.props.style}
      />
    );
  }
}
