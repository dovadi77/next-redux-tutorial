import { Provider } from "react-redux";
import React from "react";
import { createWrapper } from "next-redux-wrapper";

import { INCREMENT_COUNTER } from "../redux/actions/counterAction";
import store from "../redux/store";

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
