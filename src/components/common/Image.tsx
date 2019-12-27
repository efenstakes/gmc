import React from "react";

type Props = {
  src: any;
  height?: any;
  width?: any;
  id?: any;
};

export default class Image extends React.Component<Props> {
  render() {
    return (
      <img
        id={this.props.id}
        src={this.props.src}
        height={this.props.height}
        width={this.props.width}
        style={{ borderRadius: "10px" }}
      />
    );
  }
}
