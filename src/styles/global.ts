import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:focus {
		outline: 0;
		border: 0;
	}

	html {
		font-size: 100%;
		scroll-behavior: smooth;
	}

	body {
		background-color: ${(props) => props.theme.colors.background};
		color: ${(props) => props.theme.colors.baseText};
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button, select {
		font-family: ${(props) => props.theme.fonts.text};
		font-size: ${(props) => props.theme.fontSizes.textM};
		font-weight: ${(props) => props.theme.fontWeights.regular};
		line-height: ${(props) => props.theme.lineHeights.default};
	}

	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		transition: background-color 0.15s, color 0.15s;
	}

	ul, ol {
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

	input {
		border: none;
	}
`;
