import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	public render() {
		return (
			<Html lang="sl" prefix="og: https://ogp.me/ns#">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<script defer data-domain="beta.sportaj.ga" src="https://plausible.io/js/plausible.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	public static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
}

export default MyDocument;
