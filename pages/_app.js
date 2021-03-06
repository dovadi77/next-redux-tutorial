import { Provider } from "react-redux";
import React from "react";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import "../styles/globals.css";

function MyApp(props) {
	const { Component, pageProps } = props;

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
	const pageProps = Component.getInitialProps
		? await Component.getInitialProps(ctx)
		: {};

	//Anything returned here can be access by the client
	return { pageProps: pageProps };
};

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
