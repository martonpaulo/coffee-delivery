import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:focus {
		outline: 0;
		box-shadow: 0 0 0 1px ${(props) => props.theme.colors.baseHover};
	}

	body {
		background-color: ${(props) => props.theme.colors.white};
		color: ${(props) => props.theme.colors.baseText};
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: ${(props) => props.theme.fonts.text};
		font-size: ${(props) => props.theme.fontSizes.textM};
		font-weight: ${(props) => props.theme.fontWeights.regular};
		line-height: ${(props) => props.theme.lineHeights.default};
	}
`;
