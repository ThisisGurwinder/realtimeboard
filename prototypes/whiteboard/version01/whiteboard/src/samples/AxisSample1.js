import React, { Component } from "react";
import Graph from "../components/graph.js";

export default class AxisSampleOne extends React.Component {

	constructor(props) {
		super(props),
		this.state = {
			isDrawing: false,
			color: "#000000",
			hue: 1,
			direction: true,
			lastX: 0,
			lastY: 0
		},
		this.draw = this.draw.bind(this)
	}

	canvas() {
		return document.querySelector("#draw");
	}

	ctx() {
		return this.canvas().getContext("2d");
	}

	componentDidMount() {
		const canvas = this.canvas();
		
		if(this.props.fullscreen === true)
		{
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
	}

	draw(e) {
		const ctx = this.ctx();
		let hue = this.state.hue;

		if(this.state.isDrawing) {

			ctx.beginPath();
			ctx.moveTo(this.state.lastX, this.state.lastY);
			ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
			ctx.stroke();
			hue++;

			if(hue >= 360)
				hue=1;

			this.setState({
				hue: hue,
				lastX: e.nativeEvent.offsetX,
				lastY: e.nativeEvent.offsetY
			})
		}
	}

	render() {
		const canvasStyle = {
			border: "1px solid black"
		}

		return (
			<div>
				<canvas id="draw" width={this.props.width} height={this.props.height} onMouseMove={this.draw}
					onMouseDown={(e) => {
						this.setState({
							isDrawing: true,
							lastX: e.nativeEvent.offsetX,
							lastY: e.nativeEvent.offsetY
						})
					}} onMouseUp = {
						() => this.setState({ isDrawing: false})
					} onMouseOut = {
						() => this.setState({ isDrawing: false})
					} style={canvasStyle} />
			</div>
		)
	}
}