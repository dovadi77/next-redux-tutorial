import React from "react";
import { connect } from "react-redux";
import {
	decrementCounter,
	incrementCounter,
} from "../redux/actions/counterAction";

function Counter(props) {
	return (
		<div>
			<button onClick={props.incrementCounter}>Increment</button>
			<button onClick={props.decrementCounter}>Decrement</button>
			<h1>{props.counter}</h1>
		</div>
	);
}
Counter.getInitialProps = ({ store }) => {};

const mapStateToProps = (state) => ({
	counter: state.counter.value,
});

const mapDispatchToProps = {
	incrementCounter: incrementCounter,
	decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
